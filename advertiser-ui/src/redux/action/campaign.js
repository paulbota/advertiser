export const OPEN_CAMPAIGN_DETAIL_VIEW = 'OPEN_CAMPAIGN_DETAIL_VIEW';
export const REQUEST_CAMPAIGNS = 'REQUEST_CAMPAIGNS';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const INVALIDATE_ERROR = 'INVALIDATE_ERROR';
export const CHANGE_PLATFORM = 'CHANGE_PLATFORM';

/**
 * Action to open the campaign detail view
 */
export const openCampaignDetailView = (campaignId) => {
    return {
        type: OPEN_CAMPAIGN_DETAIL_VIEW,
        campaignId,
    };
};

/**
 * Action to change the campaign platform
 */
export const changePlatform = (selectedPlatform) => {
    return {
        type: CHANGE_PLATFORM,
        selectedPlatform,
    };
};

/**
 * Action to request the campaign fetch
 */
export const requestCampaigns = () => {
    return {
        type: REQUEST_CAMPAIGNS,
    };
};

/**
 * Action that shows when the received campaigns
 */
export const receiveCampaigns = (campaigns) => {

    return {
        type: RECEIVE_CAMPAIGNS,
        campaigns,
    };
};

/**
 * Action that shows that an error occurred
 */
export const receiveError = (errorMessage) => {

    return {
        type: RECEIVE_ERROR,
        errorMessage,
    };
};

/**
 * Action to invalidate the error
 */
export const invalidateError = () => {

    return {
        type: INVALIDATE_ERROR,
    };
};