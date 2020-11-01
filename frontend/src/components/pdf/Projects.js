import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import MainContext from '../../index';
import { connect } from "react-redux";

export class Projects extends React.Component {
    render() {
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

const mapStateToProps = state => {
    return state.projects
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Projects);
