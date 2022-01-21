import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {render} from '../__mocks__/app-renderer';
import {waitForLoadingToStartAndFinish} from '../__mocks__/helper';
import {mockData} from '../__mocks__/vehicle';
import {Vehicle} from '../models/vehicle';

// In a real backend interaction, I typically use msw to mock server response
jest.mock('../services', () => ({
  fetchData: (cb: (_: boolean, data: Vehicle[]) => void) => {
    cb(false, [...mockData]);
  },
}));

test('Initial view should display all vehicles', async () => {
  render();

  await waitForLoadingToStartAndFinish();

  expect(await screen.findAllByTestId('vehicle-container')).toHaveLength(
    mockData.length,
  );
});

test('Enabling/Disabling of select fields', async () => {
  const vehicle = mockData[0];

  render();

  await waitForLoadingToStartAndFinish();

  // Only Vehicle type is enabled by default
  expect(screen.getByLabelText(/^Vehicle$/i)).not.toBeDisabled();
  expect(screen.getByLabelText(/^Brand$/i)).toBeDisabled();
  expect(screen.getByLabelText(/^Color$/i)).toBeDisabled();

  userEvent.selectOptions(screen.getByLabelText(/^Vehicle$/i), vehicle.type);
  expect(screen.getByLabelText(/^Vehicle$/i)).toHaveValue(vehicle.type);
  // Not necessary need to check if disabled since we can already set a value as shown above
  expect(screen.getByLabelText(/^Brand$/i)).not.toBeDisabled();
  expect(screen.getByLabelText(/^Color$/i)).toBeDisabled();

  userEvent.selectOptions(screen.getByLabelText(/^Brand$/i), vehicle.brand);
  expect(screen.getByLabelText(/^Color$/i)).not.toBeDisabled();
});

test('Should display vehicle matching all criteria', async () => {
  render();

  await waitForLoadingToStartAndFinish();

  const vehicle = mockData[0];

  userEvent.selectOptions(screen.getByLabelText(/^Vehicle$/i), vehicle.type);
  userEvent.selectOptions(screen.getByLabelText(/^Brand$/i), vehicle.brand);
  userEvent.selectOptions(screen.getByLabelText(/^Color$/i), vehicle.colors[0]);

  // Alternatively, we can use the following approach:
  // fireEvent.change(screen.getByLabelText(/Vehicle/i), {
  //   target: {value: vehicle.type},
  // });

  // expect(screen.getByText(`Brand: ${vehicle.brand}`)).toBeInTheDocument();
  expect(screen.getByTestId('vehicle-container')).toHaveTextContent(
    vehicle.brand,
  );
});

test('Should reset filter after clicking reset button', async () => {
  render();

  await waitForLoadingToStartAndFinish();

  const vehicle = mockData[0];

  userEvent.selectOptions(screen.getByLabelText(/^Vehicle$/i), vehicle.type);
  userEvent.selectOptions(screen.getByLabelText(/^Brand$/i), vehicle.brand);
  userEvent.selectOptions(screen.getByLabelText(/^Color$/i), vehicle.colors[0]);

  expect(await screen.findAllByTestId('vehicle-container')).toHaveLength(1);

  userEvent.click(screen.getByText(/Reset/i));

  expect(await screen.findAllByTestId('vehicle-container')).toHaveLength(
    mockData.length,
  );
});

test('should display empty list component there is no match', async () => {
  render();

  await waitForLoadingToStartAndFinish();

  userEvent.selectOptions(screen.getByLabelText(/^Vehicle$/i), 'Car');
  userEvent.selectOptions(screen.getByLabelText(/^Brand$/i), 'Ferrari F40');
  userEvent.selectOptions(screen.getByLabelText(/^Color$/i), 'Red');

  userEvent.selectOptions(
    screen.getByLabelText(/^Brand$/i),
    'Porsche Carrera GT',
  );

  expect(
    screen.getByRole('alert', {name: 'No results found'}),
  ).toBeInTheDocument();
});

test('disabled select and button when fetching data', async () => {
  render();

  expect(screen.getByRole('alert', {name: 'Loading'})).toBeInTheDocument();
  expect(screen.getByText(/Reset/i)).toBeDisabled();
  expect(screen.getByLabelText(/^Vehicle$/i)).toBeDisabled();
  expect(screen.getByLabelText(/^Color$/i)).toBeDisabled();
  expect(screen.getByLabelText(/^Brand$/i)).toBeDisabled();

  await waitFor(() => {
    expect(
      screen.queryByRole('alert', {name: 'Loading'}),
    ).not.toBeInTheDocument();
    expect(screen.getByLabelText(/^Vehicle$/i)).not.toBeDisabled();
  });
});
