import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect } from "react-redux";
import MainContext from '../../CreateCVApp';

export class Skills extends React.Component {
    render() {
        return (
            <View>
                {this.props.visible &&
                    <View style={this.props.style.section}>
                        <Text style={this.props.style.header}>
                            {this.props.header}
                        </Text>
                        {this.props.skills.map((skill) => {
                            return <View style={this.props.style.skillWrapper}>
                                <Text style={this.props.style.skill}>{skill.skill}</Text>
                                <Text style={this.props.style.description}>{skill.description}</Text>
                            </View>
                        })}
                    </View>
                }

            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.skills
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Skills);
