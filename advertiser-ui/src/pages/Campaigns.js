import React, { Component } from 'react';
import Campaign from '../components/campaign/Campaign';
import CampaignDetails from '../components/campaign/CampaignDetails';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { invalidateError, openCampaignDetailView, requestCampaigns } from '../redux/action';
import './Campaigns.css';
import { bindActionCreators } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';

/**
 * Function that maps the redux state to the component props
 */
const mapStateToProps = (state) => {
    return {
        campaigns: state.campaign.campaigns,
        selectedCampaign: state.campaign.selectedCampaign,
        errorMessage: state.campaign.errorMessage,
    };
};

/**
 * Function that adds redux actions to component props
 */
const bindDispatch = dispatch => ({
    actions: bindActionCreators({
        openCampaignDetailView,
        requestCampaigns,
        invalidateError,
    }, dispatch),
});

/**
 * Campaigns page
 */
export class Campaigns extends Component {

    componentWillMount() {
        const {requestCampaigns} = this.props.actions;
        requestCampaigns();
    }

    render() {
        const {campaigns, selectedCampaign, errorMessage, actions: {openCampaignDetailView, invalidateError}} = this.props;

        return (
            <div>
                <div className="grid">
                    <Grid container justify="center">
                        {campaigns && campaigns.map((campaign, index) => (
                            <Grid key={`campaign-${index}`} item className="grid-item">
                                <Campaign campaign={campaign} openDetailView={openCampaignDetailView}/>
                            </Grid>
                        ))}
                    </Grid>
                    {!!selectedCampaign && <div className="campaign-details"><CampaignDetails/></div>}
                </div>

                <Snackbar open={!!errorMessage} message={`${errorMessage}`} autoHideDuration={4000}
                          onClose={() => {invalidateError();}}/>
            </div>
        );
    }
}

Campaigns.propTypes = {
    /** The campaigns list */
    campaigns: PropTypes.array,
    /** The selected campaign */
    selectedCampaign: PropTypes.object,
    /** The error message if an error occurred */
    errorMessage: PropTypes.string,
    /** The possible actions */
    actions: PropTypes.shape({
        /** Action to open the detail view */
        openCampaignDetailView: PropTypes.func,
        /** Action to invalidate error */
        invalidateError: PropTypes.func,
        /** Action to request campaigns */
        requestCampaigns: PropTypes.func,
    })
};

export default connect(mapStateToProps, bindDispatch)(Campaigns);
