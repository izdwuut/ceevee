import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect } from "react-redux";

import { MainContext } from '../../pages/_document';


export class Hobbies extends React.Component {
    render() {
        return (
            <View style={this.props.style.section}>

                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.hobbies.map(hobby => {
                            return <View style={this.props.style.hobbyWrapper}>
                                <Text style={this.props.style.hobby}>{hobby}</Text>
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.hobbies
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Hobbies);
