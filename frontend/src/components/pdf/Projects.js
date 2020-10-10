import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import MainContext from '../../CreateCVApp';
import { connect } from "react-redux";
export class Projects extends React.Component {
    render() {
        return (
            <View>
                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.projects.map(project => {
                            return <View style={this.props.style.section}>
                                <Text style={this.props.style.header}>{project.header}</Text>
                                {project.project != '' &&
                                    <Text style={this.props.style.project}>{project.project}</Text>
                                }
                                {project.position != '' &&
                                    <Text style={this.props.style.position}>{project.position}</Text>
                                }
                                {project.company != '' &&
                                    <Text style={this.props.style.company}>{project.company}</Text>
                                }
                                {(project.city != '' || project.country != '') &&
                                    <Text style={this.props.style.origin}>{project.city}{project.city && project.country && ', '}{project.country}</Text>
                                }
                                {(project.fromDateString != '' || project.toDateString != '') &&
                                    <Text style={this.props.style.duration}>{project.fromDateString}{project.fromDateString && project.toDateString && ' - '}{project.toDateString}</Text>
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

const mapStateToProps = state => {
    return state.projects
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Projects);
