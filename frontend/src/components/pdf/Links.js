import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import { connect } from "react-redux";
import MainContext from '../../CreateCVApp';

export class Links extends React.Component {
    render() {
        return (
            <View>
                {this.props.visible && <View style={this.props.style.section}>
                    <Text style={this.props.style.header}>
                        {this.props.header}
                    </Text>
                    {this.props.links.map(link => {
                        return <Link style={this.props.style.link}src={link.link}>
                            {link.label}
                    </Link>
                    })}
                </View>}

            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.links
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Links);

