import React, {Component} from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';

class Home extends Component {
    render() {
        const {history: {push}} = this.props;
        return (
            <div>
                <Card onClick={() => push('/campaigns')}>
                    Campaigns
                </Card>
            </div>
        );
    }
}

export default Home;