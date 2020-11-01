import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect } from "react-redux";
import MainContext from '../../index';

export class Languages extends React.Component {
    render() {
        return (
            <View style={this.props.style.section}>

                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.languages.map(language => {
                            return <View style={this.props.style.languageWrapper}>
                                <Text style={this.props.style.language}>{language}</Text>
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.languages
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Languages);

