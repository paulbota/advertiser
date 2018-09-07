import React, {Component} from 'react';

class Campaign extends Component {
    render() {
        const {name} = this.props;

        return (
            <div>{name}</div>
        );
    }
}

export default Campaign;