import * as React from 'react';
import {
    Icon,
    InputIcon,
    Card,
    Input,
    Accordion,
    AccordionPanel,
    Tooltip,
    CardEmpty
} from '@salesforce/design-system-react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import * as Actions from 'src/store/reducers/components/cv/edit/certificates/actions'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'

export class Certificates extends React.Component {
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
        this.props.showToast(['Certificate has been deleted.'])

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
        this.props.showToast(['New certificate has been added.'], 'success')

        this.updatePreview()
    }

    render() {
        const isEmpty = this.props.certificates.length === 0;

        let certificates = []
        for (let i = 0; i < this.props.certificates.length; i++) {
            certificates.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete certificate" item={this.props.certificates[i].certificate || 'Certificate ' + (i + 1)} onDelete={() => this.deleteCertificate(i)} context={MainContext} />
                    }
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
        updateHeader: bindActionCreators(Actions.updateHeader, dispatch),
        updatePreview: bindActionCreators(updatePreview, dispatch),
        updateCertificate: bindActionCreators(Actions.updateCertificate, dispatch),
        updateIssuer: bindActionCreators(Actions.updateIssuer, dispatch),
        updateValidUntil: bindActionCreators(Actions.updateValidUntil, dispatch),
        deleteCertificate: bindActionCreators(Actions.deleteCertificate, dispatch),
        addCertificate: bindActionCreators(Actions.addCertificate, dispatch),
        showToast: bindActionCreators(showToast, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Certificates)