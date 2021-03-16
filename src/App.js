import './config/ReactotronConfig';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import { store, persistor } from './store';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router history={history}>
                        <Routes />
                        <GlobalStyle />
                        <ToastContainer autoClose={3000} />
                    </Router>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
