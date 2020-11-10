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
import { bindActionCreators } from 'redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import * as Actions from 'src/store/reducers/components/cv/edit/experience/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as UI from 'src/utilities/ui'
import * as Variables from 'src/env/variables'
import DeleteItem from 'src/components/contextActions/DeleteItem'

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

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
    expandedPanels: {}
}

export class Experience extends React.Component<Props> {
    state:LocalState = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)
    calendarFrom
    calendarTo
    
    updatePreview:PreviewDebounce = debounce(() => {
        this.props.updatePreview(true)

    }, Variables.debounceTime)

    updateHeader = (header:string):void => {
        this.props.updateHeader(header)
        this.updatePreview()
    }

    updatePosition = (id:number, position:number):void => {
        this.props.updatePosition(id, position)
        this.updatePreview()
    }

    updateCompany = (id:number, company:string):void => {
        this.props.updateCompany(id, company)
        this.updatePreview()
    }

    updateCity = (id:number, city:string):void => {
        this.props.updateCity(id, city)
        this.updatePreview()
    }

    updateCountry = (id:number, country:string):void => {
        this.props.updateCountry(id, country)
        this.updatePreview()
    }

    updateDescription = (id:number, description:string):void => {
        this.props.updateDescription(id, description)
        this.updatePreview()
    }

    updateFromDate = (id:number, from:Date) => {
        this.props.updateFromDate(id, from.toString())
        this.updatePreview()
    }

    updateToDate = (id:number, to:Date):void => {
        this.props.updateToDate(id, to.toString())
        this.updatePreview()
    }

    deleteExperience = (id:number):void => {
        this.props.deleteExperience(id)
        this.props.showToast(['Experience has been deleted.'])
        this.updatePreview()
    }

    addExperience = ():void => {
        this.setState((state:LocalState) => ({
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
        const isEmpty:boolean = this.props.experience.length === 0;

        let experience: Array<AccordionPanel> = []
        if (experience) {
            for (let i = 0; i < this.props.experience.length; i++) {
                experience.push(
                    <AccordionPanel
                        panelContentActions={<DeleteItem title="Delete experience" item={this.props.experience[i].position || 'Experience ' + (i + 1)} onDelete={() => this.deleteExperience(i)} />}
                        key={i}
                        onTogglePanel={e => UI.getTogglePanel(i, this.setState)}
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
                                    value={this.props.experience[i].fromDateString}
                                    onChange={e => this.updateFromDate(i, e.target.value)}
                                />
                                <DatePicker
                                    onChange={date => this.updateFromDate(i, date)}
                                    dateFormat={Variables.datepickerDateFormat}
                                    showMonthYearPicker
                                    showFullMonthYearPicker
                                    ref={c => this.calendarFrom = c}
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
                                    value={this.props.experience[i].toDateString}
                                    onChange={e => this.updateToDate(i, e.target.value)}
                                />
                                <DatePicker
                                    onChange={date => this.updateToDate(i, date)}
                                    dateFormat={Variables.datepickerDateFormat}
                                    showMonthYearPicker
                                    showFullMonthYearPicker
                                    ref={c => this.calendarTo = c}
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



export default connector(Experience)
