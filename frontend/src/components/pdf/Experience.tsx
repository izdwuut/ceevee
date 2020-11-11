import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/experience/types'

const mapStateToProps = (state: RootState): Types.ExperienceState => {
    return state.experience
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

export class Experience extends React.Component<Props> {
    render(): JSX.Element {
        return (
            <View style={this.props.style.section}>
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

export default connector(Experience)
