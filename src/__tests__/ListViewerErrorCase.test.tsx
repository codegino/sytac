import {screen, waitFor} from '@testing-library/react';
import {render} from '../__mocks__/app-renderer';
import {waitForLoadingToStartAndFinish} from '../__mocks__/helper';

// Due to how the service in implemented, I'm creating the error case in separate file
// Normally, I'm using `server.use` in `msw` to mock the error response from backend

jest.mock('../services', () => ({
  fetchData: (cb: (_: boolean) => void) => {
    cb(true);
  },
}));

test('Initial view should display all vehicles', async () => {
  render();

  await waitForLoadingToStartAndFinish();

  await waitFor(() => {
    expect(
      screen.getByRole('alert', {name: 'error boundary'}),
      // We can use regex, for other tests I'll simply copy paste the message
    ).toHaveTextContent(/ooops!!! something went wrong\./i);
  });

  expect(screen.getByRole('alert', {name: 'error boundary'})).toHaveTextContent(
    'An error has occured',
  );
});

beforeEach(() => {
  // To hide the error message in Error Boundary
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});
