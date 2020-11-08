import React from 'react'
import { connect } from "react-redux"
import {
    Icon,
    InputIcon,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    Textarea,
    CardEmpty
} from '@salesforce/design-system-react';
import { bindActionCreators } from 'redux'

import * as Actions from 'src/store/reducers/components/cv/edit/projects/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'

export class Projects extends React.Component {
    state = {
        expandedPanels: {},
    }

    setState = this.setState.bind(this)

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

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
        this.props.showToast(['Project has been deleted.'])

        this.updatePreview()
    }

    addProject = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.projects.length]: true
            },
        }));
        this.props.addProject()
        this.props.showToast(['New project has been added.'], 'success')

        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.projects.length === 0;

        let projects = []
        if (projects) {
            for (let i = 0; i < this.props.projects.length; i++) {
                projects.push(
                    <AccordionPanel
                        panelContentActions={
                            <DeleteItem title="Delete project" item={this.props.projects[i].project || 'Project ' + (i + 1)} onDelete={() => this.deleteProject(i)} context={MainContext} />
                        }
                        key={i}
                        onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
                        expanded={!!this.state.expandedPanels[i]}
                        summary={this.props.projects[i].project || 'Project ' + (i + 1)}
                    >
                        <Input
                            variant="outlined"
                            label='Project'
                            value={this.props.projects[i].project}
                            onChange={e => this.updateProject(i, e.target.value)}
                        />


                        <Input
                            variant="outlined"
                            label='Position'
                            value={this.props.projects[i].position}
                            onChange={e => this.updatePosition(i, e.target.value)}
                        />
                        <Input
                            variant="outlined"
                            label='Company'
                            value={this.props.projects[i].company}
                            onChange={e => this.updateCompany(i, e.target.value)}
                        />
                        <div className="slds-grid slds-gutters">
                            <div className="slds-col">
                                <Input
                                    variant="outlined"
                                    label='City'
                                    value={this.props.projects[i].city}
                                    onChange={e => this.updateCity(i, e.target.value)}
                                />
                            </div>
                            <div className="slds-col">
                                <Input
                                    variant="outlined"
                                    label='Country'
                                    value={this.props.projects[i].country}
                                    onChange={e => this.updateCountry(i, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="slds-grid slds-gutters">
                            <div className="slds-col">
                                <Input
                                    iconLeft={
                                        <InputIcon
                                            assistiveText={{
                                                icon: 'Pick from date',
                                            }}
                                            iconCategory="utility"
                                            iconName="event"
                                            calendar={this._calendarFrom} onClick={() => this._calendarFrom.setOpen(true)}
                                        />}
                                    fieldLevelHelpTooltip={
                                        <Tooltip
                                            align="top left"
                                            content="ex: January 2020"
                                            isOpen={this.props.tooltipOpen}
                                        />
                                    }
                                    variant="outlined"
                                    label='From'
                                    value={this.props.projects[i].fromDateString}
                                    onChange={e => this.updateFromDate(i, e.target.value)}
                                />

                                <DatePicker
                                    onChange={date => this.updateFromDate(i, date)}
                                    dateFormat={Variables.datepickerDateFormat}
                                    showMonthYearPicker
                                    showFullMonthYearPicker
                                    ref={(c) => this._calendarFrom = c}
                                    selected={this.props.projects[i].fromDate}

                                    customInput={
                                        <div></div>

                                    }
                                />
                            </div>
                            <div className="slds-col">
                                <Input
                                    iconLeft={
                                        <InputIcon
                                            assistiveLeft={{
                                                icon: 'Pick to date',
                                            }}
                                            iconCategory="utility"
                                            iconName="event"
                                            calendar={this._calendarTo} onClick={() => this._calendarTo.setOpen(true)}
                                        />}
                                    fieldLevelHelpTooltip={
                                        <Tooltip
                                            align="top left"
                                            content="ex: January 2020"
                                            isOpen={this.props.tooltipOpen}
                                        />
                                    }
                                    variant="outlined"
                                    label='To'
                                    value={this.props.projects[i].toDateString}
                                    onChange={e => this.updateToDate(i, e.target.value)}
                                />
                                <DatePicker
                                    onChange={date => this.updateToDate(i, date)}
                                    dateFormat={Variables.datepickerDateFormat}
                                    showMonthYearPicker
                                    showFullMonthYearPicker
                                    ref={(c) => this._calendarTo = c}
                                    selected={this.props.projects[i].toDate}
                                    customInput={
                                        <div></div>

                                    }
                                />
                            </div>
                        </div>


                        <Textarea
                            label='Description'
                            value={this.props.projects[i].description}
                            onChange={e => this.updateDescription(i, e.target.value)}
                        />


                    </AccordionPanel >
                )
            }

            return (
                <Card
                    heading={this.props.header}

                    icon={<Icon category="standard" name="case_wrap_up" size="small" />}
                    headerActions={
                        !isEmpty && UI.getAdd(this.addProject)
                    }
                    empty={
                        isEmpty ? (
                            <CardEmpty heading="No projects">
                                {UI.getAdd(this.addProject)}
                            </CardEmpty>
                        ) : null
                    }
                >
                    <p className='slds-col_padded'>
                        {this.props.description}
                    </p>
                    {projects.length > 0 &&
                        <Accordion>
                            {projects}
                        </Accordion>
                    }


                </Card>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.projects
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
        updateProject: bindActionCreators(Actions.updateProject, dispatch),
        updatePosition: bindActionCreators(Actions.updatePosition, dispatch),
        updateCompany: bindActionCreators(Actions.updateCompany, dispatch),
        updateCity: bindActionCreators(Actions.updateCity, dispatch),
        updateCountry: bindActionCreators(Actions.updateCountry, dispatch),
        updateFromDate: bindActionCreators(Actions.updateFromDate, dispatch),
        updateToDate: bindActionCreators(Actions.updateToDate, dispatch),
        updateDescription: bindActionCreators(Actions.updateDescription, dispatch),
        deleteProject: bindActionCreators(Actions.deleteProject, dispatch),
        addProject: bindActionCreators(Actions.addProject, dispatch),
        showToast: bindActionCreators(showToast, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Projects)
