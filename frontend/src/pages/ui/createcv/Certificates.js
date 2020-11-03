import * as React from 'react';
import { connect } from "react-redux"
import MainContext from '../../../index'
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../redux/reducers/ui/createcv/certificates/actions'
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
export class Certificates extends React.Component {
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

    updateCertificate = (id, school) => {
        this.props.updateCertificate(id, school)
        this.updatePreview()
    }

    updateIssuer = (id, title) => {
        this.props.updateIssuer(id, title)
        this.updatePreview()
    }

    updateValidUntil = (id, from) => {
        this.props.updateValidUntil(id, from.toString())
        this.updatePreview()
    }

    deleteCertificate = id => {
        this.props.deleteCertificate(id)
        this.updatePreview()
    }

    addCertificate = () => {
        this.setState((state) => ({
            ...state,
            expandedPanels: {
                [this.props.certificates.length]: true
            },
        }));
        this.props.addCertificate()
        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.certificates.length === 0;

        let certificates = []
        for (let i = 0; i < this.props.certificates.length; i++) {
            certificates.push(
                <AccordionPanel
                    panelContentActions={UI.getContentActions(() => this.deleteCertificate(i))}
                    key={i}
                    onTogglePanel={(e) => UI.getTogglePanel(i, this.setState)}
                    expanded={!!this.state.expandedPanels[i]}
                    summary={this.props.certificates[i].certificate || 'Certificate ' + (i + 1)}
                >
                    <Input
                        variant="outlined"
                        label='Certificate'
                        value={this.props.certificates[i].certificate}
                        onChange={e => this.updateCertificate(i, e.target.value)}
                    />


                    <Input
                        variant="outlined"
                        label='Issuer'
                        value={this.props.certificates[i].issuer}
                        onChange={e => this.updateIssuer(i, e.target.value)}
                    />

                    <Input
                        iconLeft={
                            <InputIcon
                                assistiveText={{
                                    icon: 'Pick valid until date',
                                }}
                                iconCategory="utility"
                                iconName="event"
                                calendar={this._calendarValidUntil} onClick={() => this._calendarValidUntil.setOpen(true)}
                            />}
                        fieldLevelHelpTooltip={
                            <Tooltip
                                align="top left"
                                content="ex: January 2020"
                                isOpen={this.props.tooltipOpen}
                            />
                        }
                        variant="outlined"
                        label='Valid until'
                        value={this.props.certificates[i].validUntilString}
                        onChange={e => this.updateValidUntil(i, e.target.value)}
                    />
                    <DatePicker
                        onChange={date => this.updateValidUntil(i, date)}
                        dateFormat={datepickerDateFormat}
                        showMonthYearPicker
                        showFullMonthYearPicker
                        ref={(c) => this._calendarValidUntil = c}
                        selected={this.props.certificates[i].validUntil}
                        customInput={
                            <div></div>
                        }
                    />

                </AccordionPanel>
            )
        }


        return (

            <Card
                heading={this.props.header}

                icon={<Icon category="standard" name="document" size="small" />}
                headerActions={
                    !isEmpty && UI.getAdd(this.addCertificate)
                }
                empty={
                    isEmpty ? (
                        <CardEmpty heading="No certificates">
                            {UI.getAdd(this.addCertificate)}
                        </CardEmpty>
                    ) : null
                }
            >
                <p className='slds-col_padded'>
                    {this.props.description}
                </p>
                {certificates.length > 0 &&
                    <Accordion>
                        {certificates}
                    </Accordion>
                }
            </Card>
        )

    }
}

const mapStateToProps = state => {
    return state.certificates
}

const mapDispatchToProps = dispatch => {
    return {
        updateHeader: header => dispatch(Actions.updateHeader(header)),
        updatePreview: isUpdate => dispatch(updatePreview(isUpdate)),
        updateCertificate: (id, school) => dispatch(Actions.updateCertificate(id, school)),
        updateIssuer: (id, issuer) => dispatch(Actions.updateIssuer(id, issuer)),
        updateValidUntil: (id, validUntil) => dispatch(Actions.updateValidUntil(id, validUntil)),
        deleteCertificate: id => dispatch(Actions.deleteCertificate(id)),
        addCertificate: () => dispatch(Actions.addCertificate()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { context: MainContext }
)(Certificates)