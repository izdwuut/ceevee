import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/skills/types'

const mapStateToProps = (state:RootState):Types.SkillsState => {
    return state.skills
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

class Skills extends React.Component<Props> {
    render():JSX.Element {
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

export default connector(Skills)
