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
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import * as Actions from 'src/store/reducers/components/cv/edit/education/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'





export class Education extends React.Component {
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

    updateCourse = (id, course) => {
        this.props.updateCourse(id, course)
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
        this.props.showToast(['Education has been deleted.'])

        this.updatePreview()
    }

    addEducation = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.education.length]: true
            },
        }));
        this.props.addEducation()
        this.props.showToast(['New education has been added.'], 'success')

        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.education.length === 0;

        let education = []
        for (let i = 0; i < this.props.education.length; i++) {
            education.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete education" item={this.props.education[i].school || 'School ' + (i + 1)} onDelete={() => this.deleteEducation(i)} context={MainContext} />
                    }
                    key={i}
                    onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
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
                                inlineHelpText=""

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
                    !isEmpty && UI.getAdd(this.addEducation)
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No education">
                            {UI.getAdd(this.addEducation)}
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

const mapStateToProps = state => {
    return state.education
}

const mapDispatchToProps = dispatch => {
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Education)