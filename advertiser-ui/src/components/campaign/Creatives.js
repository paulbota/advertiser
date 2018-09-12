import React from 'react';
import { NamedAttribute, Section, Title } from '../common/layout';
import { generateImageURL } from '../../api/campaignsApi';
import PropTypes from 'prop-types';

/**
 * Presentation component for campaign creatives
 */
export const Creatives = ({creatives}) => {
    const {image} = creatives;
    return (
        <Section>
            <Title>
                Creatives
            </Title>
            <NamedAttribute name="Description" value={creatives.description}/>
            <NamedAttribute name="Header" value={creatives.header}/>
            <NamedAttribute name="URL" value={creatives.url}/>
            <img src={generateImageURL(image)} alt={image} width="300"/>
        </Section>
    );
};

Creatives.propTypes = {
    /** The campaign creatives object */
    creatives: PropTypes.shape({
        /** The description of creatives */
        description: PropTypes.string,
        /** The header of creatives */
        header: PropTypes.string,
        /** The url of creatives */
        url: PropTypes.string,
        /** The image name of the creatives */
        image: PropTypes.string
    }),
};