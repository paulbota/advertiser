import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TargetAudience } from './TargetAudience';

Enzyme.configure({adapter: new Adapter()});

function setup(targetAudience) {
    const props = {
        targetAudience: targetAudience,
    };

    const enzymeWrapper = shallow(<TargetAudience {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('TargetAudience', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup({
            age_range: [1, 2],
            genders: ['M', 'F'],
            interests: ['interest1'],
            KeyWords: ['keyword'],
            languages: ['en', 'fr'],
            locations: ['us', 'uk'],
        });
        expect(enzymeWrapper.find({name: 'Age range'}).props().values[0]).toBe(1);
        expect(enzymeWrapper.find({name: 'Age range'}).props().values[1]).toBe(2);
        expect(enzymeWrapper.find({name: 'Genders'}).props().elements[0]).toBe('M');
        expect(enzymeWrapper.find({name: 'Genders'}).props().elements[1]).toBe('F');
        expect(enzymeWrapper.find({name: 'Interests'}).props().elements[0]).toBe('interest1');
        expect(enzymeWrapper.find({name: 'Keywords'}).props().elements[0]).toBe('keyword');
        expect(enzymeWrapper.find({name: 'Languages'}).props().elements[0]).toBe('en');
        expect(enzymeWrapper.find({name: 'Languages'}).props().elements[1]).toBe('fr');
        expect(enzymeWrapper.find({name: 'Locations'}).props().elements[0]).toBe('us');
        expect(enzymeWrapper.find({name: 'Locations'}).props().elements[1]).toBe('uk');
    });
});
