import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h1>Something went wrong...</h1>
          <br />
          <section>
            {this.state.error.toString()}
            <br />
            {this.state.errorInfo ? (
              <details>
                {this.state.errorInfo.componentStack.toString()}
              </details>
            ) : null}
          </section>
        </section>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
