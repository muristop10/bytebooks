import React, { ErrorInfo } from 'react';

interface Props {
    children: React.ReactNode
}

interface State {
    error: Error | null
    errorInfo: ErrorInfo | null
}

class ErrorLogger extends React.Component<Props, State> {
    state:State = { error: null, errorInfo: null };

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // Aqui você poderia integrar com um serviço de log externo
        // Por exemplo: logService.error(error.toString(), errorInfo.componentStack);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <h2>Algo deu errado.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo!.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorLogger;