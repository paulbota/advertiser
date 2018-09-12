import React from 'react';
import { TargetAudience } from './TargetAudience';
import { Insights } from './Insights';
import { Creatives } from './Creatives';
import styled from 'styled-components';
import { DateAttribute, NamedAttribute } from '../common/Layout';
import PropTypes from 'prop-types';

/**
 * Styled component for container of platform details
 */
const PlatformDetailsContainer = styled.div`
    margin-top: 10px;
    display: flex;
     >* {
        flex: 1;
        
        & + * {
            margin-left: 10px;
        }
     }
`;

/**
 * Presentation component for the detailed view of a campaign for a platform
 */
export const PlatformDetails = ({platform}) => {
    return (
        <div>
            <NamedAttribute name="Status" value={platform.status}/>
            <NamedAttribute name="Total budget" value={platform.total_budget}/>
            <DateAttribute name="Start date" date={platform.start_date}/>
            <DateAttribute name="End date" date={platform.end_date}/>
            <PlatformDetailsContainer>
                {!!platform.target_audiance && <TargetAudience targetAudience={platform.target_audiance}/>}
                {!!platform.insights && <Insights insights={platform.insights}/>}
                {!!platform.creatives && <Creatives creatives={platform.creatives}/>}
            </PlatformDetailsContainer>
        </div>
    );
};

PlatformDetails.propTypes = {
    /** The campaign platform object */
    platform: PropTypes.shape({
        /** The status of the campaign for this platform */
        status: PropTypes.string,
        /** The total budget of the campaign for this platform */
        total_budget: PropTypes.number,
        /** The start date of the campaign for this platform */
        start_date: PropTypes.number,
        /** The end date of the campaign for this platform */
        end_date: PropTypes.number,
        /** The target audience of the campaign for this platform */
        target_audiance: PropTypes.object,
        /** The insights of the campaign for this platform */
        insights: PropTypes.object,
        /** The creatives of the campaign for this platform */
        creatives: PropTypes.object,
    }),
};