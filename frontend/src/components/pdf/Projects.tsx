import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/projects/types'

const mapStateToProps = (state:RootState):Types.ProjectsState => {
    return state.projects
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

class Projects extends React.Component<Props> {
    render():JSX.Element {
        return (
            <View style={this.props.style.section}>
                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.projects.map(project => {
                            return <View style={this.props.style.section}>
                                {(project.project != '' && project.position != '' || project.company != '' || project.city != '' || project.country != '') &&
                                    <Text style={this.props.style.metaData}>
                                        {project.project}{project.project && (project.position && project.company || project.city || project.country) && ', '}{project.position}{project.position && (project.company || project.city || project.country) && ', '}{project.company}{project.company && (project.position || project.city || project.country) && ', '}{project.city}{project.city && project.country && ', '}{project.country}
                                    </Text>
                                }
                                {project.description != '' &&
                                    <Text style={this.props.style.description}>{project.description}</Text>
                                }
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

export default connector(Projects)
