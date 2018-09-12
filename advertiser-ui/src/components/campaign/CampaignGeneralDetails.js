import React from 'react';
import { NamedAttribute, Title } from '../common/Layout';
import PropTypes from 'prop-types';

/**
 * Presentation component campaign general details
 */
export const CampaignGeneralDetails = ({campaign}) => {
    return (
        <div>
            <Title>
                {campaign.name}
            </Title>
            <NamedAttribute name="Goal" value={campaign.goal}/>
            <NamedAttribute name="Total budget" value={campaign.total_budget}/>
            <NamedAttribute name="Status" value={campaign.status}/>
        </div>
    );
};

CampaignGeneralDetails.propTypes = {
    /** The campaign object */
    campaign: PropTypes.shape({
        /** The name of the campaign */
        name: PropTypes.string,
        /** The goal of the campaign */
        goal: PropTypes.string,
        /** The total budget of the campaign */
        total_budget: PropTypes.number,
        /** The status of the campaign */
        status: PropTypes.string,
    })
};