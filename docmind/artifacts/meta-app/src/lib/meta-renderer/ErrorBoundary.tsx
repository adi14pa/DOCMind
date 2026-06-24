import React, { Component, ErrorInfo, ReactNode } from "react";
import { ComponentErrorFallback } from "../../components/meta/ComponentErrorFallback";

interface Props {
  children: ReactNode;
  componentName?: string;
  config?: any;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ComponentErrorFallback
          componentName={this.props.componentName}
          error={this.state.error}
          config={this.props.config}
          onReset={this.handleReset}
        />
      );
    }

    return this.props.children;
  }
}
