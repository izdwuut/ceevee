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
import { connect, ConnectedProps } from "react-redux"
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import * as Actions from 'src/store/reducers/components/cv/edit/certificates/actions'
import * as Types from 'src/store/reducers/components/cv/edit/certificates/types'
import { updatePreview } from 'src/store/reducers/components/pdf/viewer/actions'
import { showToast } from 'src/store/reducers/components/toasts/actions'
import { debounce, PreviewDebounce } from 'src/utilities/debounce'
import * as Variables from 'src/env/variables'
import * as UI from 'src/utilities/ui'
import DeleteItem from 'src/components/actions/DeleteItem'
import { RootState } from 'src/store/reducers';

const mapStateToProps = (state: RootState):Types.CertificatesState => {
    return state.certificates
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
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

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

type Props = ConnectedProps<typeof connector>

type LocalState = {
    expandedPanels: {}
}

class Certificates extends React.Component<Props> {
    state: LocalState = {
        expandedPanels: {},
    }
    setState = this.setState.bind(this)
    calendarValidUntil

    updatePreview: PreviewDebounce = debounce((): void => {
        this.props.updatePreview(true)
    }, Variables.debounceTime)

    updateHeader = (header: string): void => {
        this.props.updateHeader(header)
        this.updatePreview()
    }

    updateCertificate = (id: number, school: number): void => {
        this.props.updateCertificate(id, school)
        this.updatePreview()
    }

    updateIssuer = (id: number, title: string): void => {
        this.props.updateIssuer(id, title)
        this.updatePreview()
    }

    updateValidUntil = (id: number, from: Date): void => {
        this.props.updateValidUntil(id, from.toString())
        this.updatePreview()
    }

    deleteCertificate = (id: number): void => {
        this.props.deleteCertificate(id)
        this.props.showToast(['Certificate has been deleted.'])
        this.updatePreview()
    }

    addCertificate = (): void => {
        this.setState((state: LocalState) => ({
            ...state,
            expandedPanels: {
                [this.props.certificates.length]: true
            },
        }));
        this.props.addCertificate()
        this.props.showToast(['New certificate has been added.'], 'success')
        this.updatePreview()
    }

    render(): JSX.Element {
        const isEmpty: boolean = this.props.certificates.length === 0;

        let certificates: Array<AccordionPanel> = []
        for (let i = 0; i < this.props.certificates.length; i++) {
            certificates.push(
                <AccordionPanel
                    panelContentActions={
                        <DeleteItem title="Delete certificate" item={this.props.certificates[i].certificate || 'Certificate ' + (i + 1)} onDelete={() => this.deleteCertificate(i)} />
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
                                calendar={this.calendarValidUntil} onClick={() => this.calendarValidUntil.setOpen(true)}
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
                        dateFormat={Variables.datepickerDateFormat}
                        showMonthYearPicker
                        showFullMonthYearPicker
                        ref={(c) => this.calendarValidUntil = c}
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

export default connector(Certificates)

