import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = state => {
    return state.certificates
}

const connector = connect(
    mapStateToProps,
    null
)

type Props = ConnectedProps<typeof connector>

export class Certificates extends React.Component<Props> {
    render() {
        return (
            <View style={this.props.style.section}>

                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.certificates.map(certificate => {
                            return <View style={this.props.style.section}>
                                {(certificate.certificate !== '' || certificate.issuer !== '') &&
                                    <Text style={this.props.style.metaData}>{certificate.certificate}{certificate.certificate && certificate.issuer && ', '}{certificate.issuer}</Text>
                                }
                                {certificate.validUntilString !== '' &&
                                    <Text style={this.props.style.validUntil}>Valid until: {certificate.validUntilString}</Text>
                                }
                                <Text style={this.props.style.description}> </Text>
                            </View>
                        })}
                    </View>
                }
            </View>
        )
    }
}

export default connector(Certificates)
