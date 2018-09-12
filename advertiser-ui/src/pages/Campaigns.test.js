import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Campaigns } from './Campaigns';

Enzyme.configure({adapter: new Adapter()});

function setup(campaigns, selectedCampaign, errorMessage, actions) {
    const props = {
        campaigns,
        selectedCampaign,
        errorMessage,
        actions
    };

    const enzymeWrapper = shallow(<Campaigns {...props} />);
    return {
        props,
        enzymeWrapper,
    };
}


describe('Campaigns', () => {
    it('should render self and subcomponents', () => {
        const {enzymeWrapper} = setup(
            [{}],
            {},
            null,
            {
                openCampaignDetailView: jest.fn(),
                invalidateError: jest.fn(),
                requestCampaigns: jest.fn(),
            }
        );
        expect(enzymeWrapper.find('Campaign').exists()).toBe(true);
    });

    it('should not render on undefined campaigns', () => {
        const {enzymeWrapper} = setup(
            undefined,
            {},
            null,
            {
                openCampaignDetailView: jest.fn(),
                invalidateError: jest.fn(),
                requestCampaigns: jest.fn(),
            }
        );
        expect(enzymeWrapper.find('Campaign').exists()).toBe(false);
    });

    it('should render campaign details on selectedCampaign', () => {
        const {enzymeWrapper} = setup(
            [{}],
            {},
            null,
            {
                openCampaignDetailView: jest.fn(),
                invalidateError: jest.fn(),
                requestCampaigns: jest.fn(),
            }
        );
        expect(enzymeWrapper.find('.campaign-details').exists()).toBe(true);
    });

    it('should not render campaign details when no selected campaign', () => {
        const {enzymeWrapper} = setup(
            [{}],
            undefined,
            null,
            {
                openCampaignDetailView: jest.fn(),
                invalidateError: jest.fn(),
                requestCampaigns: jest.fn(),
            }
        );
        expect(enzymeWrapper.find('.campaign-details').exists()).toBe(false);
    });
});
