import {
    CHANGE_PLATFORM,
    INVALIDATE_ERROR,
    OPEN_CAMPAIGN_DETAIL_VIEW,
    RECEIVE_CAMPAIGNS,
    RECEIVE_ERROR,
} from '../action/campaign';

/**
 * The initial state
 */
const initialState = {
    campaigns: [],
    selectedCampaign: null,
    selectedPlatform: null,
    errorMessage: null,
};

/**
 * The reducer for the campaign state
 */
export default function reducer(state = initialState, action) {
    const {type} = action;

    switch (type) {
        /**
         * Handle open campaign action
         */
        case OPEN_CAMPAIGN_DETAIL_VIEW:
            const {campaignId} = action;
            const selectedCampaign = state.campaigns.find(it => it.id === campaignId);
            let firstPlatform = null;
            if(selectedCampaign && selectedCampaign.platforms && Object.keys(selectedCampaign.platforms).length > 0) {
                firstPlatform = Object.keys(selectedCampaign.platforms)[0];
            }
            return Object.assign({}, state, {
                selectedCampaign,
                selectedPlatform: firstPlatform,
            });
        /**
         * Handle change platform action
         */
        case CHANGE_PLATFORM:
            const {selectedPlatform} = action;
            return Object.assign({}, state, {selectedPlatform});
        /**
         * Handle receive campaigns action
         */
        case RECEIVE_CAMPAIGNS:
            const {campaigns} = action;
            return Object.assign({}, state, {campaigns});
        /**
         * Handle receive error action
         */
        case RECEIVE_ERROR:
            const {errorMessage} = action;
            return Object.assign({}, state, {errorMessage});
        /**
         * Handle invalidate error action
         */
        case INVALIDATE_ERROR:
            return Object.assign({}, state, {errorMessage: null});
        default:
            return state;
    }
}