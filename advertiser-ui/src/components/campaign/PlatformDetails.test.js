import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PlatformDetails } from './PlatformDetails';

Enzyme.configure({adapter: new Adapter()});

function setup(platform) {
    const props = {
        platform: platform,
    };

    const enzymeWrapper = shallow(<PlatformDetails {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('PlatformDetails', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup({
            status: 'active',
            total_budget: 100,
            start_date: 1532901600000,
            end_date: 1532901600000,
            target_audiance: {},
            insights: {},
            creatives: {},
        });
        expect(enzymeWrapper.find({name: 'Status'}).props().value).toBe('active');
        expect(enzymeWrapper.find({name: 'Total budget'}).props().value).toBe(100);
        expect(enzymeWrapper.find({name: 'Start date'}).props().date).toBe(1532901600000);
        expect(enzymeWrapper.find({name: 'End date'}).props().date).toBe(1532901600000);

        expect(enzymeWrapper.find({targetAudience: {}})).toBeTruthy();
        expect(enzymeWrapper.find({insights: {}})).toBeTruthy();
        expect(enzymeWrapper.find({creatives: {}})).toBeTruthy();
    });

    it('should not render details on undefined', () => {
        const {enzymeWrapper} = setup({
            status: 'active',
            total_budget: 100,
            start_date: 1532901600000,
            end_date: 1532901600000,
            target_audiance: undefined,
            insights: undefined,
            creatives: undefined,
        });

        expect(enzymeWrapper.find('styled.div').exists()).toBe(false);
    });
});
