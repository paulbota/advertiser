import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getAllCampaigns } from '../api/campaignsApi';
import { receiveCampaigns, receiveError } from '../redux/action/campaign';
import { REQUEST_CAMPAIGNS } from '../redux/action/campaign';

/**
 * Execute campaigns and call the receive campaigns or receive error action
 */
function* executeRequestCampaigns() {
    try {
        const campaings = yield call(getAllCampaigns);
        yield put(receiveCampaigns(campaings));
    } catch(err) {
        yield put(receiveError(err));
    }
}

/**
 * Subscribe to actions
 */
export default function* campaignSagas() {
    yield all([
        takeEvery(REQUEST_CAMPAIGNS, executeRequestCampaigns),
    ]);
}