import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import MainContext from '../../CreateCVApp';
import { connect } from "react-redux";

export class Details extends React.Component {
    render() {
        return (
            <View className="details-section">
                <Text style={this.props.style.details}>Details</Text>
                {(this.props.city != '' || this.props.country != '') &&
                    <Text style={this.props.style.name}>{this.props.city}{this.props.country != '' && this.props.city != '' ? ', ' : ''}{this.props.country}</Text>
                }
                {this.props.email != '' &&
                    <Link style={this.props.style.email} url={`mailto:${this.props.email}`}>{this.props.email}</Link>
                }
                {this.props.mobile != '' &&
                    <View style={this.props.style.mobileWrapper}>
                        <Text style={this.props.style.mobileHeader}>
                            Mobile
                        </Text>
                        <Text style={this.props.style.mobile}>{this.props.mobile}</Text>
                    </View>
                }
                {this.props.birthDate != '' &&
                    <View style={this.props.style.birthDateWrapper}>
                        <Text style={this.props.style.birthDateHeader}>
                            Birth date
                        </Text>
                        <Text style={this.props.style.birthDate}>{this.props.birthDate}</Text>
                    </View>
                }
                {this.props.drivingLicense != '' &&
                    <View style={this.props.style.drivingLicenseWrapper}>
                        <Text style={this.props.style.drivingLicenseHeader}>
                            Driving license
                        </Text>
                        <Text style={this.props.style.drivingLicense}>{this.props.drivingLicense}</Text>
                    </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return state.metaData
}

export default connect(
    mapStateToProps,
    null,
    null,
    { context: MainContext }
)(Details);
