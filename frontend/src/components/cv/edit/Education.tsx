import * as React from 'react';
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

import * as Actions from 'src/store/reducers/components/cv/edit/education/actions'
import * as Types from 'src/store/reducers/components/cv/edit/education/types'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'
import DeleteItem from 'src/components/actions/DeleteItem'
import { RootState } from 'src/store/reducers';
import AddItem from 'src/components/actions/AddItem'

const mapStateToProps = (state: RootState): Types.EducationState => {
    return state.education
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
        updateSchool: bindActionCreators(Actions.updateSchool, dispatch),
        updateCourse: bindActionCreators(Actions.updateCourse, dispatch),
        updateTitle: bindActionCreators(Actions.updateTitle, dispatch),
        updateCity: bindActionCreators(Actions.updateCity, dispatch),
        updateCountry: bindActionCreators(Actions.updateCountry, dispatch),
        updateFromDate: bindActionCreators(Actions.updateFromDate, dispatch),
        updateToDate: bindActionCreators(Actions.updateToDate, dispatch),
        updateDescription: bindActionCreators(Actions.updateDescription, dispatch),
        deleteEducation: bindActionCreators(Actions.deleteEducation, dispatch),
        addEducation: bindActionCreators(Actions.addEducation, dispatch),
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

export class Education extends React.Component<Props> {
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

    updateCourse = (id: number, course: string): void => {
        this.props.updateCourse(id, course)
        this.updatePreview()
    }

    updateSchool = (id: number, school: string): void => {
        this.props.updateSchool(id, school)
        this.updatePreview()
    }

    updateTitle = (id: number, title: string): void => {
        this.props.updateTitle(id, title)
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

    updateDescription = (id: number, description: string): void => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    updateFromDate = (id: number, from: Date): void => {
        this.props.updateFromDate(id, from.toString())
        this.updatePreview()
    }

    updateToDate = (id: number, to: Date): void => {
        this.props.updateToDate(id, to.toString())
        this.updatePreview()
    }

    deleteEducation = (id: number): void => {
        this.props.deleteEducation(id)
        this.props.showToast(['Education has been deleted.'])
        this.updatePreview()
    }

    addEducation = (): void => {
        this.setState((state:LocalState) => ({
            ...state,
            expandedPanels: {
                [this.props.education.length]: true
            },
        }));
        this.props.addEducation()
        this.props.showToast(['New education has been added.'], 'success')
        this.updatePreview()
    }

    render(): JSX.Element {
        const isEmpty: boolean = this.props.education.length === 0;

        let education: Array<AccordionPanel> = []
        for (let i = 0; i < this.props.education.length; i++) {
            education.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete education" item={this.props.education[i].school || 'School ' + (i + 1)} onDelete={() => this.deleteEducation(i)} />
                    }
                    key={i}
                    onTogglePanel={e => UI.getTogglePanel(i, this.setState)}
                    expanded={!!this.state.expandedPanels[i]}
                    summary={this.props.education[i].school || 'School ' + (i + 1)}
                >
                    <Input
                        variant="outlined"
                        label='Course'
                        value={this.props.education[i].course}
                        onChange={e => this.updateCourse(i, e.target.value)}
                    />
                    <Input
                        variant="outlined"
                        label='School'
                        value={this.props.education[i].school}
                        onChange={e => this.updateSchool(i, e.target.value)}
                    />

                    <Input
                        variant="outlined"
                        label='Title'

                        value={this.props.education[i].title}
                        onChange={e => this.updateTitle(i, e.target.value)}
                    />
                    <div className="slds-grid slds-gutters">
                        <Input
                            className="slds-col"
                            variant="outlined"
                            label='City'
                            value={this.props.education[i].city}
                            onChange={e => this.updateCity(i, e.target.value)}
                        />
                        <Input
                            className="slds-col"
                            variant="outlined"
                            label='Country'
                            value={this.props.education[i].country}
                            onChange={e => this.updateCountry(i, e.target.value)}
                        />
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
                                inlineHelpText=""

                                value={this.props.education[i].fromDateString}
                                onChange={e => this.updateFromDate(i, e.target.value)}
                            />
                            <DatePicker
                                onChange={date => this.updateFromDate(i, date)}
                                dateFormat={Variables.datepickerDateFormat}
                                showMonthYearPicker
                                showFullMonthYearPicker
                                ref={(c) => this.calendarFrom = c}
                                selected={this.props.education[i].fromDate}
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

                                value={this.props.education[i].toDateString}
                                onChange={e => this.updateToDate(i, e.target.value)}
                            />
                            <DatePicker
                                onChange={date => this.updateToDate(i, date)}
                                dateFormat={Variables.datepickerDateFormat}
                                showMonthYearPicker
                                showFullMonthYearPicker
                                ref={(c) => this.calendarTo = c}
                                selected={this.props.education[i].toDate}
                                customInput={
                                    <div></div>
                                }
                            />
                        </div>
                    </div>
                    <Textarea
                        label='Description'
                        value={this.props.education[i].description}
                        onChange={e => this.updateDescription(i, e.target.value)}
                    />
                </AccordionPanel>
            )
        }

        return (
            <Card
                heading={this.props.header}

                icon={<Icon category="standard" name="education" size="small" />}
                headerActions={
                    !isEmpty && <AddItem onAdd={this.addEducation} />
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No education">
                            <AddItem onAdd={this.addEducation} />
                        </CardEmpty>
                    ) : null
                }
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                {education.length > 0 &&
                    <Accordion>
                        {education}
                    </Accordion>
                }
            </Card>
        )
    }
}

export default connector(Education)
