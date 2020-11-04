import * as React from 'react';
import { connect } from "react-redux"
import MainContext from '../../../index'
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import * as Actions from '../../../redux/reducers/ui/createcv/education/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { datepickerDateFormat } from '../../../utilities/variables'
import './template/CreateCV'
import PropTypes from 'prop-types';
import * as UI from '../../../utilities/ui'
import DeleteItem from '../components/contentActions/DeleteItem'
import {showToast} from 'redux/reducers/ui/components/toasts/actions'

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

export class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedPanels: {},
        }
    }
    setState = this.setState.bind(this)

    updatePreview = debounce(() => {
        this.props.updatePreview(true)
    }, debounceTime)

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
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateSchool: (id, school) => dispatch(Actions.updateSchool(id, school)),
        updateCourse: (id, course) => dispatch(Actions.updateCourse(id, course)),
        updateTitle: (id, title) => dispatch(Actions.updateTitle(id, title)),
        updateCity: (id, city) => dispatch(Actions.updateCity(id, city)),
        updateCountry: (id, country) => dispatch(Actions.updateCountry(id, country)),
        updateFromDate: (id, from) => dispatch(Actions.updateFromDate(id, from)),
        updateToDate: (id, to) => dispatch(Actions.updateToDate(id, to)),
        updateDescription: (id, description) => dispatch(Actions.updateDescription(id, description)),
        deleteEducation: id => dispatch(Actions.deleteEducation(id)),
        addEducation: () => dispatch(Actions.addEducation()),
        showToast: (heading, variant) => dispatch(showToast(heading, variant))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Education)