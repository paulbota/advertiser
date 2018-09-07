import React, {Component} from 'react';
import {getAllCampaigns} from '../../api/campaignsApi';
import Campaign from '../../components/campaign/Campaign';

class Campaigns extends Component {
    state = {campaigns: []};

    componentWillMount() {
        getAllCampaigns().then((campaigns) => this.setState({campaigns}));
    }

    render() {
        const {campaigns} = this.state;
        return (
            <div>
                {campaigns.map((campaign, index) => (
                    <Campaign name={campaign.name} key={`campaign-${index}`}/>
                ))}
            </div>
        );
    }
}

export default Campaigns;