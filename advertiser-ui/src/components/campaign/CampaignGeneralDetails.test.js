import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CampaignGeneralDetails } from './CampaignGeneralDetails';

Enzyme.configure({adapter: new Adapter()});

function setup(campaign) {
    const props = {
        campaign: campaign,
    };

    const enzymeWrapper = shallow(<CampaignGeneralDetails {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('CampaignGeneralDetails', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup({
            name: 'test',
            goal: 'goal',
            total_budget: 100,
            status: 'active'
        });
        expect(enzymeWrapper.find({name: 'Goal'}).props().value).toBe('goal');
        expect(enzymeWrapper.find({name: 'Total budget'}).props().value).toBe(100);
        expect(enzymeWrapper.find({name: 'Status'}).props().value).toBe('active');
    });
});
