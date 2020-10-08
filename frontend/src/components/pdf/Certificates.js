import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import MainContext from '../../CreateCVApp';
import { connect } from "react-redux";

export class Certificates extends React.Component {
    render() {
        return (
            <View>
                {this.props.visible &&
                    <View>
                        <Text style={this.props.style.header}>{this.props.header}</Text>
                        {this.props.certificates.map(certificate => {
                            return <View style={this.props.style.section}>
                                {certificate.certificate !== '' &&
                                    <Text style={this.props.style.certificate}>{certificate.certificate}</Text>
                                }
                                {certificate.issuer !== '' &&
                                    <Text style={this.props.style.issuer}>{certificate.issuer}</Text>
                                }
                                {(certificate.validUntilString !== '') &&
                                    <Text style={this.props.style.validUntil}>Valid until: {certificate.validUntilString}</Text>
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
    return state.certificates
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Certificates);
