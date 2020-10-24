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
