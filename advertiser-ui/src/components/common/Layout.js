import styled from 'styled-components';
import { withPropsPassing } from '../../hocs/index';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';


/**
 * Styled paper for a section in page
 */
export const Section = styled(withPropsPassing(Paper))`
  padding: 1em;
  margin-bottom: 1em;
`;

/**
 * Styled component for title
 */
export const Title = props => (
    <Typography variant="title" gutterBottom={true} {...props} />
);

/**
 * Named attribute component that renders a pair of name and value
 */
export const NamedAttribute = ({name, value}) => {
    if (value !== undefined) {
        return (
            <Typography variant="body1">
                {name}: {value}
            </Typography>
        );
    }
    return null;
};

NamedAttribute.propTypes = {
    /** The name of the attribute */
    name: PropTypes.string.isRequired,
    /** Values of the attribute */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


/**
 * List component that displays elements as chips
 */
export const ChipsList = (({elements, name}) => {
    if (!!elements && elements.length > 0) {
        return (
            <div>
                {name}: {elements.map((it) => (
                <Chip label={it} key={`${name}-${it}`}/>
            ))}
            </div>
        );
    }
    return null;
});

ChipsList.propTypes = {
    /** The elements that will be chips */
    elements: PropTypes.arrayOf(
        PropTypes.string
    ),
    /** The name of the attribute */
    name: PropTypes.string.isRequired,
};

/**
 * Named attribute which has a date value
 */
export const DateAttribute = ({name, date}) => {
    if (date !== undefined) {
        return (
            <Typography variant="body1">
                {name}: {new Date(date).toLocaleDateString()}
            </Typography>
        );
    }
    return null;
};

DateAttribute.propTypes = {
    /** The name of the attribute */
    name: PropTypes.string.isRequired,
    /** The date of the attribute */
    date: PropTypes.number
};


/**
 * Named attribute which has a range as a value
 */
export const RangeAttribute = ({name, values}) => {
    if (values !== undefined && values.length === 2) {
        return (
            <Typography variant="body1">
                {name}: from {values[0]} to {values[1]}
            </Typography>
        );
    }
    return null;
};

RangeAttribute.propTypes = {
    /** The name of the attribute */
    name: PropTypes.string.isRequired,
    /** The values in the range */
    values: PropTypes.array
};