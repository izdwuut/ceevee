import * as React from 'react';
import { connect } from "react-redux"
import MainContext from '../../../CreateCVApp'
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../redux/reducers/ui/experience/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { datepickerDateFormat } from '../../../utilities/variables'
import * as UI from '../../../utilities/ui'
import PropTypes from 'prop-types';


import {
    Icon,
    InputIcon,
    Button,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    Textarea,
    CardEmpty
} from '@salesforce/design-system-react';

const propTypes = {
    tooltipOpen: PropTypes.bool,
};



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
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.experience.length]: true
            },
        }));
        this.props.addExperience()
        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.experience.length === 0;


        let experience = []
        if (experience) {
            for (let i = 0; i < this.props.experience.length; i++) {
                experience.push(
                    <AccordionPanel
                        panelContentActions={UI.getContentActions(() => this.deleteExperience(i))}
                        key={i}
                        onTogglePanel={(e) => UI.getTogglePanel(i)}
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
                        <Input
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
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