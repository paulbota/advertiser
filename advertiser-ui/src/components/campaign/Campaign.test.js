import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Campaign from './Campaign';

Enzyme.configure({adapter: new Adapter()});

function setup(campaign, openDetailView) {
    const props = {
        campaign: campaign,
        openDetailView: openDetailView,
    };

    const enzymeWrapper = mount(<Campaign {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('Campaign', () => {
    it('should render self and subcomponents', () => {
        const openDetailView = jest.fn();
        const {enzymeWrapper} = setup(
            {
                id: 1,
            },
            openDetailView,
        );
        expect(enzymeWrapper).toBeTruthy();
    });

    it('should call openDetailView on click', () => {
        const openDetailView = jest.fn();
        const {enzymeWrapper} = setup(
            {
                id: 1,
            },
            openDetailView,
        );
        enzymeWrapper.find('Button').simulate('click');
        expect(openDetailView).toHaveBeenCalledWith(1);
    });
});
