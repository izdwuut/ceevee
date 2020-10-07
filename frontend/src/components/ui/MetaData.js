import MainContext from '../../CreateCVApp';
import * as React from 'react';
import { Form } from 'semantic-ui-react'
import { updateFirstName, updateMiddleName, updateLastName, updatePosition, updateEmail, updateMobile, updateCountry, updateCity, updateDrivingLicense, updateBirthDate } from '../../redux/reducers/ui/metaData/actions'
import { updatePreview } from '../../redux/reducers/pdf/pdfViewer/actions'
import { connect } from "react-redux";
import {debounceTime} from '../../utilities/variables'
import debounce from '../../utilities/debounce'

export class MetaData extends React.Component {
    constructor(props) {
        super(props)

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
            <Form>
                <Form.Input
                    label='Name'
                    type='text'
                    onChange={e => this.updateFirstName(e)}
                    value={this.props.firstName}
                />
                <Form.Input
                    label='Middle name'
                    type='text'
                    onChange={e => this.updateMiddleName(e)}
                    value={this.props.middleName}
                />
                <Form.Input
                    label='Last name'
                    type='text'
                    onChange={e => this.updateLastName(e)}
                    value={this.props.lastName}
                />
                <Form.Input
                    label='Position'
                    type='text'
                    onChange={e => this.updatePosition(e)}
                    value={this.props.position}
                />
                <Form.Input
                    label='Email'
                    type='text'
                    onChange={e => this.updateEmail(e)}
                    value={this.props.email}
                />
                <Form.Input
                    label='Mobile'
                    type='text'
                    onChange={e => this.updateMobile(e)}
                    value={this.props.mobile}
                />
                <Form.Input
                    label='Country'
                    type='text'
                    onChange={e => this.updateCountry(e)}
                    value={this.props.country}
                />
                <Form.Input
                    label='City'
                    type='text'
                    onChange={e => this.updateCity(e)}
                    value={this.props.city}
                />
                <Form.Input
                    label='Driving license'
                    type='text'
                    onChange={e => this.updateDrivingLicense(e)}
                    value={this.props.drivingLicense}
                />
                <Form.Input
                    label='Birth Date'
                    type='text'
                    onChange={e => this.updateBirthDate(e)}
                    value={this.props.birthDate}
                />
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return state.metaData
}

export default connect(
    mapStateToProps,
    { updateFirstName, updateMiddleName, updateLastName, updatePosition, updateEmail, updateMobile, updateCountry, updateCity, updateDrivingLicense, updateBirthDate, updatePreview },
    null,
    { context: MainContext }
)(MetaData);