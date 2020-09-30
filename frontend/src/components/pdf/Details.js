import React from 'react';
import { Text, View, Link } from '@react-pdf/renderer';
import MainContext from '../../CreateCVApp';
import { connect } from "react-redux";

export class Details extends React.Component {
    render() {
        return (
            <View className="details-section">
                <Text className="header1">Details</Text>
                {(this.props.city != '' || this.props.country != '') &&
                    <Text>{this.props.city}{this.props.country != '' && this.props.city != '' ? ', ' : ''}{this.props.country}</Text>
                }
                {this.props.email != '' &&
                    <Link url={`mailto:${this.props.email}`}>{this.props.email}</Link>
                }
                {this.props.mobile != '' &&
                    <View>
                        <Text className="header3">
                            Mobile
                        </Text>
                        <Text>{this.props.mobile}</Text>
                    </View>
                }
                {this.props.birthDate != '' &&
                    <View>
                        <Text className="header3">
                            Birth date
                        </Text>
                        <Text>{this.props.birthDate}</Text>
                    </View>
                }
                {this.props.drivingLicense != '' &&
                    <View>
                        <Text className="header3">
                            Driving license
                        </Text>
                        <Text>{this.props.drivingLicense}</Text>
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

