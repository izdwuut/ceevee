import React from 'react'
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
import { connect, ConnectedProps } from "react-redux"
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import * as Actions from 'src/store/reducers/components/cv/edit/projects/actions'
import * as Types from 'src/store/reducers/components/cv/edit/projects/types'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'
import DeleteItem from 'src/components/actions/DeleteItem'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState): Types.ProjectsState => {
    return state.projects
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
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

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
    expandedPanels: {}
}

export class Projects extends React.Component<Props> {
    state: LocalState = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)
    calendarFrom
    calendarTo

    updatePreview: PreviewDebounce = debounce((): void => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateHeader = (header: string): void => {
        this.props.updateHeader(header)
        this.updatePreview()
    }

    updateProject = (id: number, project: string): void => {
        this.props.updateProject(id, project)
        this.updatePreview()
    }

    updateCompany = (id: number, company: string): void => {
        this.props.updateCompany(id, company)
        this.updatePreview()
    }

    updateCity = (id: number, city: string): void => {
        this.props.updateCity(id, city)
        this.updatePreview()
    }

    updateCountry = (id: number, country: string): void => {
        this.props.updateCountry(id, country)
        this.updatePreview()
    }

    updatePosition = (id: number, position: string): void => {
        this.props.updatePosition(id, position)
        this.updatePreview()
    }

    updateFromDate = (id: number, from: Date) => {
        this.props.updateFromDate(id, from.toString())
        this.updatePreview()
    }

    updateToDate = (id: number, to: Date): void => {
        this.props.updateToDate(id, to.toString())
        this.updatePreview()
    }

    updateDescription = (id: number, description: string): void => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    deleteProject = (id: number): void => {
        this.props.deleteProject(id)
        this.props.showToast(['Project has been deleted.'])
        this.updatePreview()
    }

    addProject = (): void => {
        this.setState((state: LocalState) => ({
            ...state,
            expandedPanels: {
                [this.props.projects.length]: true
            },
        }));
        this.props.addProject()
        this.props.showToast(['New project has been added.'], 'success')
        this.updatePreview()
    }

    render(): JSX.Element {
        const isEmpty: boolean = this.props.projects.length === 0;

        let projects: Array<AccordionPanel> = []

        for (let i = 0; i < this.props.projects.length; i++) {
            projects.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete project" item={this.props.projects[i].project || 'Project ' + (i + 1)} onDelete={() => this.deleteProject(i)} />
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
                                        calendar={this.calendarFrom} onClick={() => this.calendarFrom.setOpen(true)}
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
                                ref={(c) => this.calendarFrom = c}
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
                                        calendar={this.calendarTo} onClick={() => this.calendarTo.setOpen(true)}
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
                                ref={(c) => this.calendarTo = c}
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

export default connector(Projects)
