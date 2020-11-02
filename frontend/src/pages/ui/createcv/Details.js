import MainContext from '../../../index';
import * as React from 'react';
import { updateFirstName, updateMiddleName, updateLastName, updatePosition, updateEmail, updateMobile, updateCountry, updateCity, updateDrivingLicense, updateBirthDate } from '../../../redux/reducers/ui/details/actions'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { connect } from "react-redux";
import { debounceTime } from '../../../utilities/variables'
import debounce from '../../../utilities/debounce'
import * as UI from '../../../utilities/ui'

import {
    Icon,
    InputIcon,
    Button,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    Textarea,
    CardEmpty
} from '@salesforce/design-system-react';

export class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedPanels: {},
        }
    }

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateFirstName = (e) => {
        this.props.updateFirstName(e.target.value)
        this.updatePreview()
    }
    updateMiddleName = (e) => {
        this.props.updateMiddleName(e.target.value)
        this.updatePreview()
    }
    updateLastName = (e) => {
        this.props.updateLastName(e.target.value)
        this.updatePreview()
    }
    updatePosition = (e) => {
        this.props.updatePosition(e.target.value)
        this.updatePreview()
    }
    updateEmail = (e) => {
        this.props.updateEmail(e.target.value)
        this.updatePreview()
    }
    updateMobile = (e) => {
        this.props.updateMobile(e.target.value)
        this.updatePreview()
    }
    updateCountry = (e) => {
        this.props.updateCountry(e.target.value)
        this.updatePreview()
    }
    updateCity = (e) => {
        console.log(e.target.value)
        this.props.updateCity(e.target.value)
        this.updatePreview()
    }
    updateDrivingLicense = (e) => {
        this.props.updateDrivingLicense(e.target.value)
        this.updatePreview()
    }
    updateBirthDate = (e) => {
        this.props.updateBirthDate(e.target.value)
        this.updatePreview()
    }
    render() {

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
                            onChange={e => this.updateFirstName(e)}
                            value={this.props.firstName}
                        />
                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Middle name'
                            onChange={e => this.updateMiddleName(e)}
                            value={this.props.middleName}
                        />

                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Last name'
                            onChange={e => this.updateLastName(e)}
                            value={this.props.lastName}
                        />
                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Email'
                            onChange={e => this.updateEmail(e)}
                            value={this.props.email}
                        />
                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Position'
                            onChange={e => this.updatePosition(e)}
                            value={this.props.position}
                        />
                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Mobile'
                            onChange={e => this.updateMobile(e)}
                            value={this.props.mobile}
                        />
                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Country'
                            onChange={e => this.updateCountry(e)}
                            value={this.props.country}
                        />

                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='City'
                            onChange={e => this.updateCity(e)}
                            value={this.props.city}
                        />
                    </div>
                </div>
                <div className="slds-grid slds-gutters slds-col_padded">
                    <div className="slds-col">

                        <Input
                            variant="outlined"
                            label='Driving license'
                            onChange={e => this.updateDrivingLicense(e)}
                            value={this.props.drivingLicense}
                        />

                    </div>
                    <div className="slds-col">
                        <Input
                            variant="outlined"
                            label='Birth Date'
                            onChange={e => this.updateBirthDate(e)}
                            value={this.props.birthDate}
                        />
                    </div>
                </div>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return state.details
}

export default connect(
    mapStateToProps,
    { updateFirstName, updateMiddleName, updateLastName, updatePosition, updateEmail, updateMobile, updateCountry, updateCity, updateDrivingLicense, updateBirthDate, updatePreview },
    null,
    { context: MainContext }
)(Details);