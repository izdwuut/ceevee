import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import MainContext from '../../CreateCVApp';
import { connect } from "react-redux";
export class Experience extends React.Component {
    render() {
        return (
            <View>
                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.experience.map(experience => {
                            return <View style={this.props.style.section}>
                                {(experience.position != '' || experience.company != '' || experience.city != '' || experience.country != '') &&
                                    <Text style={this.props.style.metaData}>
                                        {experience.position}{experience.position && (experience.company || experience.city || experience.country) && ', '}{experience.company}{experience.company && (experience.position || experience.city || experience.country) && ', '}{experience.city}{experience.city && experience.country && ', '}{experience.country}
                                    </Text>
                                }
                                {(experience.fromDateString != '' || experience.toDateString != '') &&
                                    <Text style={this.props.style.duration}>{experience.fromDateString}{experience.fromDateString && experience.toDateString && ' - '}{experience.toDateString}</Text>
                                }
                                {experience.description != '' &&
                                    <Text style={this.props.style.description}>{experience.description}</Text>
                                }
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.experience
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Experience);
