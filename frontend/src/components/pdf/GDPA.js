import React from 'react';
import { Text } from '@react-pdf/renderer';
import { connect } from "react-redux";

export class GDPA extends React.Component {
    render() {
        return (
            <Text style={this.props.style.gdpa}>{this.props.gdpa}</Text>
        )
    }
}

const mapStateToProps = state => {
    return state.gdpa
}

export default connect(
    mapStateToProps,
    null,
)(GDPA);
