import React from 'react';
import { ChipsList, RangeAttribute, Section, Title } from '../common/layout';
import PropTypes from 'prop-types';

/**
 * Presentation component for campaign target audience
 */
export const TargetAudience = ({targetAudience}) => {
    return (
        <Section>
            <Title>Target audience</Title>
            <RangeAttribute name="Age range" values={targetAudience.age_range}/>
            <ChipsList elements={targetAudience.genders} name="Genders"/>
            <ChipsList elements={targetAudience.interests} name="Interests"/>
            <ChipsList elements={targetAudience.KeyWords} name="Keywords"/>
            <ChipsList elements={targetAudience.languages} name="Languages"/>
            <ChipsList elements={targetAudience.locations} name="Locations"/>
        </Section>
    );
};

TargetAudience.propTypes = {
    /** The target audience object */
    targetAudience: PropTypes.shape({
        /** The age range targeted */
        age_range: PropTypes.arrayOf(
            PropTypes.number,
        ),
        /** The genders targeted */
        genders: PropTypes.arrayOf(
            PropTypes.string,
        ),
        /** The interests targeted */
        interests: PropTypes.arrayOf(
            PropTypes.string,
        ),
        /** The keywords targeted */
        KeyWords: PropTypes.arrayOf(
            PropTypes.string,
        ),
        /** The languages targeted */
        languages: PropTypes.arrayOf(
            PropTypes.string,
        ),
        /** The locations targeted */
        locations: PropTypes.arrayOf(
            PropTypes.string,
        ),
    }),
};