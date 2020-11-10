import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux"
import { RootState } from 'src/store/reducers';
import * as Types from 'src/store/reducers/components/cv/edit/links/types'

const mapStateToProps = (state:RootState):Types.LinksState => {
    return state.links
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

class Links extends React.Component<Props> {
    render():JSX.Element {
        return (
            <View style={this.props.style.section}>
                {this.props.visible && <View style={this.props.style.section}>
                    <Text style={this.props.style.header}>
                        {this.props.header}
                    </Text>
                    {this.props.links.map(link => {
                        return <Link style={this.props.style.link} src={link.link}>
                            {link.label}
                        </Link>
                    })}
                </View>}
            </View>
        )
    }
}

export default connector(Links)

