import React, { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    isError: boolean    
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            isError: false
        }
    }

    handleReload = () => {
        window.location.reload();
    }

    handleBack = () => {
        window.location.replace('/');
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            isError: true
        })
        // fazer oq desejar com o erro
        console.log('Erro: ', error);
        console.log("Error info:", errorInfo)
    }

    render(): ReactNode {
        if (this.state.isError) {
        return (
            <div className='flex-1 flex flex-col items-center justify-center mt-4'>
                <h2 className='text-center text-[#002F52] text-[32px]'>
                    Oops! Um erro inesperado aconteceu. Por favor recarregue a página ou volte ao inicio.
                </h2>
                <img
                    src='/not_found.webp'
                    alt='sem resultado'
                    className='w-1/2 max-w-[500px] mx-auto mt-4'
                />
                <button
                    className='py-3 w-1/4 bg-[#EB9B00] hover:opacity-80 rounded-md shadow-md'
                    onClick={this.handleReload}
                >
                    <h3 className='text-white text-lg font-medium'>Recarregar Página</h3>
                </button>
                <button
                    className='py-3 w-1/4 bg-slate-500 hover:opacity-80 rounded-md shadow-md mt-2'
                    onClick={this.handleBack}
                >
                    <h3 className='text-white text-lg font-medium'>Voltar ao Inicio</h3>
                </button>
            </div>
        );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary
