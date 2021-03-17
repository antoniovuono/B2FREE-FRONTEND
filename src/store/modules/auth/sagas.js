import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (!user.establishment) {
            toast.error(
                'Usuario nao é prestador de um estabelecimento comercial'
            );
            return;
        }

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        toast.error('Falha na autenticação, verifique seu email/senha');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, cpf, email, password } = payload;

        yield call(api.post, 'users', {
            name,
            cpf,
            email,
            password,
            establishment: true,
        });

        history.push('/');
    } catch (err) {
        toast.error('Falha no cadastro verifique seus dados!');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;
    const { token } = payload.auth;
    if (token) {
        api.defaults.headers.Authorization = `Baerer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
