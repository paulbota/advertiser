import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CampaignDetails} from './CampaignDetails';

Enzyme.configure({adapter: new Adapter()});

function setup(selectedCampaign, selectedPlatform, changePlatform) {
    const props = {
        selectedCampaign,
        selectedPlatform,
        changePlatform
    };

    const enzymeWrapper = shallow(<CampaignDetails {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('CampaignDetails', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup({platforms: {facebook: {}}}, 'facebook', jest.fn());

        expect(enzymeWrapper.find('WithStyles(Tab)').props().value).toBe('facebook');
        expect(enzymeWrapper.find({platform: {}}).exists()).toBe(true);
    });
});
