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

import * as Actions from 'src/store/reducers/components/cv/edit/experience/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import {debounce} from 'src/utilities/debounce'
import * as UI from 'src/utilities/ui'
import * as Variables from 'src/env/variables'



export class Experience extends React.Component {
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
        this.props.showToast(['Experience has been deleted.'])
        this.updatePreview()
    }

    addExperience = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.experience.length]: true
            },
        }));
        this.props.addExperience()
        this.props.showToast(['New experience has been added.'], 'success')
        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.experience.length === 0;


        let experience = []
        if (experience) {
            for (let i = 0; i < this.props.experience.length; i++) {
                experience.push(
                    <AccordionPanel
                        panelContentActions={<DeleteItem title="Delete experience" item={this.props.experience[i].position || 'Experience ' + (i + 1)} onDelete={() => this.deleteExperience(i)} context={MainContext} />}
                        key={i}
                        onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
                        expanded={!!this.state.expandedPanels[i]}
                        summary={this.props.experience[i].position || 'Experience ' + (i + 1)}
                    >
                        <Input
                            variant="outlined"
                            label='Position'
                            value={this.props.experience[i].position}
                            onChange={e => this.updatePosition(i, e.target.value)}
                        />


                        <Input
                            variant="outlined"
                            label='Company'
                            value={this.props.experience[i].company}
                            onChange={e => this.updateCompany(i, e.target.value)}
                        />

                        <div className="slds-grid slds-gutters">
                            <Input
                                className="slds-col"
                                variant="outlined"
                                label='City'
                                value={this.props.experience[i].city}
                                onChange={e => this.updateCity(i, e.target.value)}
                            />
                            <Input
                                className="slds-col"
                                variant="outlined"
                                label="Country"
                                value={this.props.experience[i].country}
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
                            </div>
                            <div className="slds-col">
                                <Input
                                    iconLeft={
                                        <InputIcon
                                            assistiveText={{
                                                icon: 'Pick from date',
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
                            </div>
                        </div>
                        <Textarea
                            variant="outlined"
                            label='Description'
                            value={this.props.experience[i].description}
                            onChange={e => this.updateDescription(i, e.target.value)}
                        />

                    </AccordionPanel>
                )
            }

            return (
                <Card
                    heading={this.props.header}

                    icon={<Icon category="standard" name="case" size="small" />}
                    headerActions={
                        !isEmpty && UI.getAdd(this.addExperience)
                    }
                    empty={
                        isEmpty ? (
                            <CardEmpty heading="No experience">
                                {UI.getAdd(this.addExperience)}
                            </CardEmpty>
                        ) : null
                    }
                >
                    <p className='slds-col_padded'>
                        {this.props.description}
                    </p>
                    {experience.length > 0 &&
                        <Accordion>
                            {experience}
                        </Accordion>
                    }
                </Card>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.experience
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updatePosition: bindActionCreators(Actions.updatePosition, dispatch),
        updateCompany: bindActionCreators(Actions.updateCompany, dispatch),
        updateCity: bindActionCreators(Actions.updateCity, dispatch),
        updateCountry: bindActionCreators(Actions.updateCountry, dispatch),
        updateFromDate: bindActionCreators(Actions.updateFromDate, dispatch),
        updateToDate: bindActionCreators(Actions.updateToDate, dispatch),
        updateDescription: bindActionCreators(Actions.updateDescription, dispatch),
        deleteExperience: bindActionCreators(Actions.deleteExperience, dispatch),
        addExperience: bindActionCreators(Actions.addExperience, dispatch),
        showToast: bindActionCreators(showToast, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Experience)