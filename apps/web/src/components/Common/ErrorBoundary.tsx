import type { ReactNode } from 'react';
import { Component } from 'react';

import Custom500 from '@/pages/500';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    console.error('Uncaught error:', error);
  }

  public render() {
    if (this.state.hasError) {
      return <Custom500 />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
