import React from 'react';
import { NamedAttribute, Section, Title } from '../common/layout';
import PropTypes from 'prop-types';

/**
 * Presentation component for campaign insights
 */
export const Insights = ({insights}) => {
    return (
        <Section>
            <Title>
                Insights
            </Title>
            <NamedAttribute name="Advanced kpi 1" value={insights.advanced_kpi_1}/>
            <NamedAttribute name="Advanced kpi 2" value={insights.advanced_kpi_2}/>
            <NamedAttribute name="Click through rate" value={insights.click_through_rate}/>
            <NamedAttribute name="Clicks" value={insights.clicks}/>
            <NamedAttribute name="Cost per click" value={insights.cost_per_click}/>
            <NamedAttribute name="Impressions" value={insights.impressions}/>
            <NamedAttribute name="Nanos score" value={insights.nanos_score}/>
        </Section>
    );
};

Insights.propTypes = {
    /** The campaign insights object */
    insights: PropTypes.shape({
        /** The advanced kpi 1 */
        advanced_kpi_1: PropTypes.number,
        /** The advanced kpi 2 */
        advanced_kpi_2: PropTypes.number,
        /** The rate of the click through */
        click_through_rate: PropTypes.number,
        /** The number of clicks */
        clicks: PropTypes.number,
        /** The cost for each click */
        cost_per_click: PropTypes.number,
        /** The number of impressions */
        impressions: PropTypes.number,
        /** The nanos score */
        nanos_score: PropTypes.number,
    }),
};