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
import * as Actions from '../../../redux/reducers/ui/projects/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {datepickerDateFormat} from '../../../utilities/variables'




export class Projects extends React.Component {

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

    updateHeader = header => {
        this.props.updateHeader(header)
        this.updatePreview()
    }

    updateProject = (id, project) => {
        this.props.updateProject(id, project)
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

    updatePosition = (id, position) => {
        this.props.updatePosition(id, position)
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

    updateDescription = (id, description) => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    deleteProject = id => {
        this.props.deleteProject(id)
        this.updatePreview()
    }

    addProject = () => {
        this.props.addProject()
        this.updatePreview()
    }
    
    render() {
        let projects = []
        if (projects) {
            for (let i = 0; i < this.props.projects.length; i++) {
                projects.push(
                    <Segment>
                        <Form.Field
                            control={Input}
                            label='Project'
                            value={this.props.projects[i].project}
                            onChange={e => this.updateProject(i, e.target.value)}
                        />
                        <Form.Field
                            control={Input}
                            label='Position'
                            value={this.props.projects[i].position}
                            onChange={e => this.updatePosition(i, e.target.value)}
                        />
                        <Form.Field
                            control={Input}
                            label='Company'
                            value={this.props.projects[i].company}
                            onChange={e => this.updateCompany(i, e.target.value)}
                        />
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='City'
                                value={this.props.projects[i].city}
                                onChange={e => this.updateCity(i, e.target.value)}
                            />
                            <Form.Field
                                control={Input}
                                label='Country'
                                value={this.props.projects[i].country}
                                onChange={e => this.updateCountry(i, e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                        <Form.Field
                                icon={<Icon name='calendar outline' link  {...this.props} calendar={this._calendarFrom} onClick={() => this._calendarFrom.setOpen(true)} />}
                                control={Input}
                                label='From'
                                value={this.props.projects[i].fromDateString}
                                onChange={e => this.updateFromDate(i, e.target.value)}
                            />
                            <DatePicker
                                onChange={date => this.updateFromDate(i, date)}
                                dateFormat={datepickerDateFormat}
                                showMonthYearPicker
                                showFullMonthYearPicker
                                ref={(c) => this._calendarFrom = c}
                                selected={this.props.projects[i].fromDate}

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
                                value={this.props.projects[i].toDateString}
                                onChange={e => this.updateToDate(i, e.target.value)}
                            />
                            <DatePicker
                                onChange={date => this.updateToDate(i, date)}
                                dateFormat={datepickerDateFormat}
                                showMonthYearPicker
                                showFullMonthYearPicker
                                ref={(c) => this._calendarTo = c}
                                selected={this.props.projects[i].toDate}
                                customInput={
                                    <div></div>

                                }
                            />



                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label='Description'
                            value={this.props.projects[i].description}
                            onChange={e => this.updateDescription(i, e.target.value)}
                        />
                        <Button onClick={() => this.deleteProject(i)}>
                            Delete project
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
                    {projects.length > 0 &&
                        <Form>
                            {projects}
                        </Form>
                    }

                    <Button onClick={() => this.addProject()}>
                        Add
            </Button>
                </Segment>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.projects
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateProject: (id, project) => dispatch(Actions.updateProject(id, project)),
        updatePosition: (id, position) => dispatch(Actions.updatePosition(id, position)),
        updateCompany: (id, company) => dispatch(Actions.updateCompany(id, company)),
        updateCity: (id, city) => dispatch(Actions.updateCity(id, city)),
        updateCountry: (id, country) => dispatch(Actions.updateCountry(id, country)),
        updateFromDate: (id, from) => dispatch(Actions.updateFromDate(id, from)),
        updateToDate: (id, to) => dispatch(Actions.updateToDate(id, to)),
        updateDescription: (id, description) => dispatch(Actions.updateDescription(id, description)),
        deleteProject: id => dispatch(Actions.deleteProject(id)),
        addProject: project => dispatch(Actions.addProject(project)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Projects)