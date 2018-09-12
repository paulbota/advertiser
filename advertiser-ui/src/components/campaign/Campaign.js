import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CampaignGeneralDetails } from './CampaignGeneralDetails';
import styled from 'styled-components';
import { withPropsPassing } from '../../hocs/index';
import PropTypes from 'prop-types';

const HoverCard = styled(withPropsPassing(Card))`
        &:hover {
            box-shadow: 0 0 15px rgba(0,0,0,0.25);
        }
`;

/**
 * Component for campaign high level view
 */
class Campaign extends Component {
    render() {
        const {campaign, openDetailView} = this.props;

        return (
            <HoverCard>
                <CardContent>
                    <CampaignGeneralDetails campaign={campaign}/>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => openDetailView(campaign.id)}>Details</Button>
                </CardActions>
            </HoverCard>
        );
    }
}

Campaign.propTypes = {
    /** The campaign object */
    campaign: PropTypes.shape({
        /** The id of the campaign */
        id: PropTypes.number,
    }),
    /** Function to open the detail view */
    openDetailView: PropTypes.func,
};

export default Campaign;