import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Insights } from './Insights';

Enzyme.configure({adapter: new Adapter()});

function setup(insights) {
    const props = {
        insights: insights,
    };

    const enzymeWrapper = shallow(<Insights {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('Insights', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup({
            advanced_kpi_1: 0.1,
            advanced_kpi_2: 0.1,
            click_through_rate: 0.1,
            clicks: 1,
            cost_per_click: 0.1,
            impressions: 0.1,
            nanos_score: 0.1,
        });
        expect(enzymeWrapper.find({name: 'Advanced kpi 1'}).props().value).toBe(0.1);
        expect(enzymeWrapper.find({name: 'Advanced kpi 2'}).props().value).toBe(0.1);
        expect(enzymeWrapper.find({name: 'Click through rate'}).props().value).toBe(0.1);
        expect(enzymeWrapper.find({name: 'Clicks'}).props().value).toBe(1);
        expect(enzymeWrapper.find({name: 'Click through rate'}).props().value).toBe(0.1);
        expect(enzymeWrapper.find({name: 'Impressions'}).props().value).toBe(0.1);
        expect(enzymeWrapper.find({name: 'Nanos score'}).props().value).toBe(0.1);
    });
});
