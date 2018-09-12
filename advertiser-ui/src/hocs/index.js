import React from 'react';

/**
 * High order component to forward props
 */
export const withPropsPassing = WrappedComponent => props => (<WrappedComponent { ...props }/>);