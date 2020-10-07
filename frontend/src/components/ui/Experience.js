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
import MainContext from '../../CreateCVApp'
import debounce from '../../utilities/debounce'
import { updatePreview } from '../../redux/actions/pdf/pdfViewer/actions'
import { debounceTime } from '../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../redux/actions/ui/experience/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {datepickerDateFormat} from '../../utilities/variables'




export class Experience extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateHeader = header => {
        this.props.updateHeader(header)
        this.updatePreview()
    }

    updatePosition = (id, position) => {
        this.props.updatePosition(id, position)
        this.updatePreview()
    }

    updateCompany = (id, company) => {
        this.props.updateCompany(id, company)
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

    deleteExperience = id => {
        this.props.deleteExperience(id)
        this.updatePreview()
    }

    addExperience = () => {
        this.props.addExperience()
        this.updatePreview()
    }
    
    render() {
        let experience = []
        if (experience) {
            for (let i = 0; i < this.props.experience.length; i++) {
                experience.push(
                    <Segment>
                        <Form.Field
                            control={Input}
                            label='Position'
                            value={this.props.experience[i].position}
                            onChange={e => this.updatePosition(i, e.target.value)}
                        />
                        <Form.Field
                            control={Input}
                            label='Company'
                            value={this.props.experience[i].company}
                            onChange={e => this.updateCompany(i, e.target.value)}
                        />
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='City'
                                value={this.props.experience[i].city}
                                onChange={e => this.updateCity(i, e.target.value)}
                            />
                            <Form.Field
                                control={Input}
                                label='Country'
                                value={this.props.experience[i].country}
                                onChange={e => this.updateCountry(i, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                        <Form.Field
                                icon={<Icon name='calendar outline' link  {...this.props} calendar={this._calendarFrom} onClick={() => this._calendarFrom.setOpen(true)} />}
                                control={Input}
                                label='From'
                                value={this.props.experience[i].fromDateString}
                                onChange={e => this.updateFromDate(i, e.target.value)}
                            />
                            <DatePicker
                                onChange={date => this.updateFromDate(i, date)}
                                dateFormat={datepickerDateFormat}
                                showMonthYearPicker
                                showFullMonthYearPicker
                                ref={(c) => this._calendarFrom = c}
                                selected={this.props.experience[i].fromDate}

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
                                value={this.props.experience[i].toDateString}
                                onChange={e => this.updateToDate(i, e.target.value)}
                            />
                            <DatePicker
                                onChange={date => this.updateToDate(i, date)}
                                dateFormat={datepickerDateFormat}
                                showMonthYearPicker
                                showFullMonthYearPicker
                                ref={(c) => this._calendarTo = c}
                                selected={this.props.experience[i].toDate}
                                customInput={
                                    <div></div>

                                }
                            />



                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label='Description'
                            value={this.props.experience[i].description}
                            onChange={e => this.updateDescription(i, e.target.value)}
                        />
                        <Button onClick={() => this.deleteExperience(i)}>
                            Delete
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
                    {experience.length > 0 &&
                        <Form>
                            {experience}
                        </Form>
                    }

                    <Button onClick={() => this.addExperience()}>
                        Add
            </Button>
                </Segment>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.experience
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updatePosition: (id, position) => dispatch(Actions.updatePosition(id, position)),
        updateCompany: (id, company) => dispatch(Actions.updateCompany(id, company)),
        updateCity: (id, city) => dispatch(Actions.updateCity(id, city)),
        updateCountry: (id, country) => dispatch(Actions.updateCountry(id, country)),
        updateFromDate: (id, from) => dispatch(Actions.updateFromDate(id, from)),
        updateToDate: (id, to) => dispatch(Actions.updateToDate(id, to)),
        updateDescription: (id, description) => dispatch(Actions.updateDescription(id, description)),
        deleteExperience: id => dispatch(Actions.deleteExperience(id)),
        addExperience: experience => dispatch(Actions.addExperience(experience)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Experience)