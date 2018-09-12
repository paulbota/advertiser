import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CampaignGeneralDetails } from './CampaignGeneralDetails';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PlatformDetails } from './PlatformDetails';
import { changePlatform } from '../../redux/action/campaign';
import { Section } from '../common/Layout';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    return {
        selectedCampaign: state.campaign.selectedCampaign,
        selectedPlatform: state.campaign.selectedPlatform,
    };
};

const bindDispatch = (dispatch) => {
    return {
        changePlatform: (selectedPlatform) => dispatch(changePlatform(selectedPlatform)),
    };
};

/**
 * Component that shows detailed view of the campaign
 */
export class CampaignDetails extends Component {
    handleChange = (event, value) => {
        const {changePlatform} = this.props;
        changePlatform(value);
    };


    render() {
        const {selectedCampaign, selectedPlatform} = this.props;

        return (
            <Section>
                <CampaignGeneralDetails campaign={selectedCampaign}/>
                {!!selectedCampaign.platforms && <Tabs value={selectedPlatform} onChange={this.handleChange} centered>
                    {Object.keys(selectedCampaign.platforms).map((it) => (
                        <Tab key={`tab-${it}`} label={it} value={it}/>
                    ))}
                </Tabs>}
                {selectedPlatform && <PlatformDetails platform={selectedCampaign.platforms[selectedPlatform]}/>}
            </Section>
        );
    }
}

CampaignDetails.propTypes = {
    /** The selected campaign*/
    selectedCampaign: PropTypes.shape({
        platforms: PropTypes.object
    }),
    /** The selected campaign platform */
    selectedPlatform: PropTypes.string
};

export default connect(mapStateToProps, bindDispatch)(CampaignDetails);