import {screen, waitFor} from '@testing-library/react';

export const waitForLoadingToStartAndFinish = async (): Promise<void> => {
  await waitFor(() => {
    expect(screen.getByRole('alert', {name: 'Loading'})).toBeInTheDocument();
  });

  await waitFor(() =>
    expect(
      screen.queryByRole('alert', {name: 'Loading'}),
    ).not.toBeInTheDocument(),
  );
};
