import * as React from 'react';
import {
    Button,
    Segment,
    Form,
    Input,
    TextArea,
    Header,
    Icon
} from 'semantic-ui-react'
import { connect } from "react-redux"
import MainContext from '../../../CreateCVApp'
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../redux/reducers/ui/education/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { datepickerDateFormat } from '../../../utilities/variables'

export class Education extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateHeader = header => {
        this.props.updateHeader(header)
        this.updatePreview()
    }

    updateSchool = (id, school) => {
        this.props.updateSchool(id, school)
        this.updatePreview()
    }

    updateTitle = (id, title) => {
        this.props.updateTitle(id, title)
        this.updatePreview()
    }

    updateCity = (id, city) => {
        this.props.updateCity(id, city)
        this.updatePreview()
    }

    updateCountry = (id, country) => {
        this.props.updateCountry(id, country)
        this.updatePreview()
    }

    updateDescription = (id, description) => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    updateFromDate = (id, from) => {
        this.props.updateFromDate(id, from.toString())
        this.updatePreview()
    }

    updateToDate = (id, to) => {
        this.props.updateToDate(id, to.toString())
        this.updatePreview()
    }

    deleteEducation = id => {
        this.props.deleteEducation(id)
        this.updatePreview()
    }

    addEducation = () => {
        this.props.addEducation()
        this.updatePreview()
    }

    render() {
        let education = []
        for (let i = 0; i < this.props.education.length; i++) {
            education.push(
                <Segment>
                    <Form.Field
                        control={Input}
                        label='School'
                        value={this.props.education[i].position}
                        onChange={e => this.updateSchool(i, e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        label='Title'
                        value={this.props.education[i].title}
                        onChange={e => this.updateTitle(i, e.target.value)}
                    />
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='City'
                            value={this.props.education[i].city}
                            onChange={e => this.updateCity(i, e.target.value)}
                        />
                        <Form.Field
                            control={Input}
                            label='Country'
                            value={this.props.education[i].country}
                            onChange={e => this.updateCountry(i, e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            icon={<Icon name='calendar outline' link  {...this.props} calendar={this._calendarFrom} onClick={() => this._calendarFrom.setOpen(true)} />}
                            control={Input}
                            label='From'
                            value={this.props.education[i].fromDateString}
                            onChange={e => this.updateFromDate(i, e.target.value)}
                        />
                        <DatePicker
                            onChange={date => this.updateFromDate(i, date)}
                            dateFormat={datepickerDateFormat}
                            showMonthYearPicker
                            showFullMonthYearPicker
                            ref={(c) => this._calendarFrom = c}
                            selected={this.props.education[i].fromDate}
                            customInput={
                                <div></div>
                            }
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            icon={<Icon name='calendar outline' link  {...this.props} calendar={this._calendarTo} onClick={() => this._calendarTo.setOpen(true)} />}
                            control={Input}
                            label='To'
                            value={this.props.education[i].toDateString}
                            onChange={e => this.updateToDate(i, e.target.value)}
                        />
                        <DatePicker
                            onChange={date => this.updateToDate(i, date)}
                            dateFormat={datepickerDateFormat}
                            showMonthYearPicker
                            showFullMonthYearPicker
                            ref={(c) => this._calendarTo = c}
                            selected={this.props.education[i].toDate}
                            customInput={
                                <div></div>
                            }
                        />



                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='Description'
                        value={this.props.education[i].description}
                        onChange={e => this.updateDescription(i, e.target.value)}
                    />
                    <Button onClick={() => this.deleteEducation(i)}>
                        Delete education
                </Button>
                </Segment>
            )
        }


        return (
            <Segment>
                <Header>{this.props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                {education.length > 0 &&
                    <Form>
                        {education}
                    </Form>
                }

                <Button onClick={() => this.addEducation()}>
                    Add
            </Button>
            </Segment>
        )

    }
}

const mapStateToProps = state => {
    return state.education
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateSchool: (id, school) => dispatch(Actions.updateSchool(id, school)),
        updateTitle: (id, title) => dispatch(Actions.updateTitle(id, title)),
        updateCity: (id, city) => dispatch(Actions.updateCity(id, city)),
        updateCountry: (id, country) => dispatch(Actions.updateCountry(id, country)),
        updateFromDate: (id, from) => dispatch(Actions.updateFromDate(id, from)),
        updateToDate: (id, to) => dispatch(Actions.updateToDate(id, to)),
        updateDescription: (id, description) => dispatch(Actions.updateDescription(id, description)),
        deleteEducation: id => dispatch(Actions.deleteEducation(id)),
        addEducation: () => dispatch(Actions.addEducation()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Education)