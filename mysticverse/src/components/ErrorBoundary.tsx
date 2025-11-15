'use client';

import React from 'react';
import { Button } from '@/components/ui';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cosmic-deep text-text-primary p-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <h1 className="text-h2 font-display font-bold">
              Something went wrong
            </h1>
            <p className="text-body text-text-secondary">
              The cosmic energies are misaligned. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left text-small bg-glass p-4 rounded-xl border border-glass-border">
                <summary className="cursor-pointer font-semibold mb-2">
                  Error details
                </summary>
                <pre className="whitespace-pre-wrap text-micro text-red-400">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <Button
              variant="primary"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
