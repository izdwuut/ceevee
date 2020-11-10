import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/languages/types'

const mapStateToProps = (state:RootState):Types.LanguagesState => {
    return state.languages
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

class Languages extends React.Component<Props> {
    render():JSX.Element {
        return (
            <View style={this.props.style.section}>
                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.languages.map(language => {
                            return <View style={this.props.style.languageWrapper}>
                                <Text style={this.props.style.language}>{language}</Text>
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

export default connector(Languages)

