import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ChipsList, DateAttribute, NamedAttribute, RangeAttribute } from './Layout';

Enzyme.configure({adapter: new Adapter()});

function setupNamedAttribute(name, value) {
    const props = {
        name: name,
        value: value,
    };

    const enzymeWrapper = mount(<NamedAttribute {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}

function setupChipsList(name, elements) {
    const props = {
        name: name,
        elements: elements,
    };

    const enzymeWrapper = mount(<ChipsList {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}

function setupDateAttribute(name, date) {
    const props = {
        name: name,
        date: date,
    };

    const enzymeWrapper = mount(<DateAttribute {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}

function setupRangeAttribute(name, values) {
    const props = {
        name: name,
        values: values,
    };

    const enzymeWrapper = mount(<RangeAttribute {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}

describe('components', () => {
    describe('NamedAttribute', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setupNamedAttribute('test', 'test');
            expect(enzymeWrapper.find('Typography').text()).toBe('test: test');
        });

        it('should render nothing on undefined', () => {
            const {enzymeWrapper} = setupNamedAttribute('test', undefined);
            expect(enzymeWrapper.html()).toBe(null);
        });
    });

    describe('ChipsList', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setupChipsList('test', ['el1', 'el2']);
            expect(enzymeWrapper.find('div').at(1).text()).toBe('el1');
            expect(enzymeWrapper.find('div').at(2).text()).toBe('el2');
        });

        it('should render nothing on undefined', () => {
            const {enzymeWrapper} = setupChipsList('test', undefined);
            expect(enzymeWrapper.html()).toBe(null);
        });

        it('should render nothing on element list empty', () => {
            const {enzymeWrapper} = setupChipsList('test', []);
            expect(enzymeWrapper.html()).toBe(null);
        });
    });

    describe('DateAttribute', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setupDateAttribute('test', 1532901600000);
            expect(enzymeWrapper.find('Typography').text()).toBe('test: 7/30/2018');
        });

        it('should render nothing on undefined', () => {
            const {enzymeWrapper} = setupDateAttribute('test', undefined);
            expect(enzymeWrapper.html()).toBe(null);
        });
    });

    describe('RangeAttribute', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setupRangeAttribute('test', [1, 2]);
            expect(enzymeWrapper.find('Typography').text()).toBe('test: from 1 to 2');
        });

        it('should render nothing on undefined', () => {
            const {enzymeWrapper} = setupRangeAttribute('test', undefined);
            expect(enzymeWrapper.html()).toBe(null);
        });

        it('should render nothing on values list empty', () => {
            const {enzymeWrapper} = setupRangeAttribute('test', []);
            expect(enzymeWrapper.html()).toBe(null);
        });
    });
});