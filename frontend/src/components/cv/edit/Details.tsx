import * as React from 'react';
import { connect, ConnectedProps } from "react-redux"
import {
    Icon,
    Card,
    Input,
} from '@salesforce/design-system-react';
import { bindActionCreators, Dispatch, AnyAction } from 'redux'

import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import * as Actions from 'src/store/reducers/components/cv/edit/details/actions'
import * as Types from 'src/store/reducers/components/cv/edit/details/types'
import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState): Types.DetailsState => {
    return state.details
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateFirstName: bindActionCreators(Actions.updateFirstName, dispatch),
        updateMiddleName: bindActionCreators(Actions.updateMiddleName, dispatch),
        updateLastName: bindActionCreators(Actions.updateLastName, dispatch),
        updatePosition: bindActionCreators(Actions.updatePosition, dispatch),
        updateEmail: bindActionCreators(Actions.updateEmail, dispatch),
        updateMobile: bindActionCreators(Actions.updateMobile, dispatch),
        updateCountry: bindActionCreators(Actions.updateCountry, dispatch),
        updateCity: bindActionCreators(Actions.updateCity, dispatch),
        updateDrivingLicense: bindActionCreators(Actions.updateDrivingLicense, dispatch),
        updateBirthDate: bindActionCreators(Actions.updateBirthDate, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),

    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
    expandedPanels: {}
}

export class Details extends React.Component<Props> {
    state: LocalState = {
        expandedPanels: {},
    }

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateFirstName = (firstName: string): void => {
        this.props.updateFirstName(firstName)
        this.updatePreview()
    }

    updateMiddleName = (middleName: string): void => {
        this.props.updateMiddleName(middleName)
        this.updatePreview()
    }

    updateLastName = (lastName: string): void => {
        this.props.updateLastName(lastName)
        this.updatePreview()
    }

    updatePosition = (position: string): void => {
        this.props.updatePosition(position)
        this.updatePreview()
    }

    updateEmail = (email: string): void => {
        this.props.updateEmail(email)
        this.updatePreview()
    }

    updateMobile = (mobile: string): void => {
        this.props.updateMobile(mobile)
        this.updatePreview()
    }

    updateCountry = (country: string): void => {
        this.props.updateCountry(country)
        this.updatePreview()
    }

    updateCity = (city: string): void => {
        this.props.updateCity(city)
        this.updatePreview()
    }

    updateDrivingLicense = (drivingLicense: string): void => {
        this.props.updateDrivingLicense(drivingLicense)
        this.updatePreview()
    }
    
    updateBirthDate = (birthDate: Date): void => {
        this.props.updateBirthDate(birthDate)
        this.updatePreview()
    }

    render(): JSX.Element {
        return (
            <Card
                heading={this.props.header}
                icon={<Icon category="standard" name="contact" size="small" />}
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='First name'
                            onChange={e => this.updateFirstName(e.target.value)}
                            value={this.props.firstName}
                        />
                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Middle name'
                            onChange={e => this.updateMiddleName(e.target.value)}
                            value={this.props.middleName}
                        />

                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Last name'
                            onChange={e => this.updateLastName(e.target.value)}
                            value={this.props.lastName}
                        />
                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Email'
                            onChange={e => this.updateEmail(e.target.value)}
                            value={this.props.email}
                        />
                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Position'
                            onChange={e => this.updatePosition(e.target.value)}
                            value={this.props.position}
                        />
                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Mobile'
                            onChange={e => this.updateMobile(e.target.value)}
                            value={this.props.mobile}
                        />
                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Country'
                            onChange={e => this.updateCountry(e.target.value)}
                            value={this.props.country}
                        />

                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='City'
                            onChange={e => this.updateCity(e.target.value)}
                            value={this.props.city}
                        />
                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Driving license'
                            onChange={e => this.updateDrivingLicense(e.target.value)}
                            value={this.props.drivingLicense}
                        />

                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Birth Date'
                            onChange={e => this.updateBirthDate(e.target.value)}
                            value={this.props.birthDate}
                        />
                    </div>
                </div>
            </Card>
        )
    }
}

export default connector(Details)
