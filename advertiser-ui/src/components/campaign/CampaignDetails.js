import React, { Component } from 'react';
import { CampaignGeneralDetails } from './CampaignGeneralDetails';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { PlatformDetails } from './PlatformDetails';
import { Section } from '../common/layout';
import PropTypes from 'prop-types';

/**
 * Component that shows detailed view of the campaign
 */
export class CampaignDetails extends Component {

    render() {
        const {selectedCampaign, selectedPlatform, changePlatform} = this.props;

        return (
            <Section>
                <CampaignGeneralDetails campaign={selectedCampaign}/>
                {!!selectedCampaign.platforms &&
                <Tabs value={selectedPlatform} onChange={(_event, value) => changePlatform(value)} centered>
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
        platforms: PropTypes.object,
    }),
    /** The selected campaign platform */
    selectedPlatform: PropTypes.string,
    /** Action to change platform */
    changePlatform: PropTypes.func
};

export default CampaignDetails;