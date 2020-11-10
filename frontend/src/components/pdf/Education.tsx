import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/education/types'

const mapStateToProps = (state: RootState): Types.EducationState => {
    return state.education
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

export class Education extends React.Component<Props> {
    render():JSX.Element {
        return (
            <View style={this.props.style.section}>

                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.education.map(education => {
                            return <View style={this.props.style.section}>
                                {(education.course != '' || education.school != '' || education.city != '' || education.country != '' || education.title != '') &&
                                    <Text style={this.props.style.metaData}>{education.course}{education.course && (education.school || education.city || education.country || education.title) && ', '}{education.school}{education.school && (education.city || education.country || education.title) && ', '}{education.city}{education.city && (education.country || education.title) && ', '}{education.country}{education.country && education.title && ', '}{education.title}</Text>
                                }
                                {(education.fromDateString != '' || education.toDateString != '') &&
                                    <Text style={this.props.style.duration}>{education.fromDateString}{education.fromDateString && education.toDateString && ' - '}{education.toDateString}</Text>
                                }
                                {education.description != '' &&
                                    <Text style={this.props.style.description}>{education.description}</Text>
                                }
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

export default connector(Education)
