import { all, fork } from 'redux-saga/effects';
import campaignSagas from './campaign';

export default function* root() {
    yield all([
        fork(campaignSagas),
    ]);
}