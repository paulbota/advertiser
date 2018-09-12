import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Creatives } from './Creatives';

Enzyme.configure({adapter: new Adapter()});

function setup(creatives) {
    const props = {
        creatives: creatives,
    };

    const enzymeWrapper = shallow(<Creatives {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('Creatives', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup({
            description: 'test',
            header: 'test',
            url: 'test',
            image: 'test.jpg'
        });
        expect(enzymeWrapper.find({name: 'Description'}).props().value).toBe('test');
        expect(enzymeWrapper.find({name: 'Header'}).props().value).toBe('test');
        expect(enzymeWrapper.find({name: 'URL'}).props().value).toBe('test');
    });
});
