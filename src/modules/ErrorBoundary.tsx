import React, {ReactNode} from 'react';
import styled from '@emotion/styled';
import _ErrorImage from '../icons/car-crash.svg';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

// Alternatively we can use `react-error-boundary` package

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error): State {
    return {hasError: true, errorMessage: error.message};
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Container role="alert" aria-label="error boundary">
          <div className="content">
            <h2>Ooops!!! Something went wrong. Please refresh the page.</h2>
            <pre>{this.state.errorMessage}</pre>
          </div>
          <ErrorIcon src={_ErrorImage} />
        </Container>
      );
    }

    return this.props.children;
  }
}

// Another way to use emotion which resembles vanilla CSS
const Container = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  width: 100%;
  height: 100%;
  max-height: 40rem;
  min-width: 20rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    background-color: #ffffff;
    width: 100%;
    text-align: center;
  }
`;

const ErrorIcon = styled.img({
  width: '100%',
  height: '70%',
  backgroundColor: '#ffffff',
});

export default ErrorBoundary;
