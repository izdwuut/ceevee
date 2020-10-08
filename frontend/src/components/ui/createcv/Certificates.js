import * as React from 'react';
import {
    Button,
    Segment,
    Form,
    Input,
    TextArea,
    Header,
    Icon
} from 'semantic-ui-react'
import { connect } from "react-redux"
import MainContext from '../../../CreateCVApp'
import debounce from '../../../utilities/debounce'
import { updatePreview } from '../../../redux/reducers/pdf/pdfViewer/actions'
import { debounceTime } from '../../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../../redux/reducers/ui/certificates/actions'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { datepickerDateFormat } from '../../../utilities/variables'

export class Certificates extends React.Component {

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
        this.props.addCertificate()
        this.updatePreview()
    }

    render() {
        let certificates = []
        for (let i = 0; i < this.props.certificates.length; i++) {
            certificates.push(
                <Segment>
                    <Form.Field
                        control={Input}
                        label='Certificate'
                        value={this.props.certificates[i].position}
                        onChange={e => this.updateCertificate(i, e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        label='Issuer'
                        value={this.props.certificates[i].title}
                        onChange={e => this.updateIssuer(i, e.target.value)}
                    />
                    <Form.Field
                        icon={<Icon name='calendar outline' link  {...this.props} calendar={this._calendarFrom} onClick={() => this._calendarFrom.setOpen(true)} />}
                        control={Input}
                        label='Valid until'
                        value={this.props.certificates[i].validUntilString}
                        onChange={e => this.updateValidUntil(i, e.target.value)}
                    />
                    <DatePicker
                        onChange={date => this.updateValidUntil(i, date)}
                        dateFormat={datepickerDateFormat}
                        showMonthYearPicker
                        showFullMonthYearPicker
                        ref={(c) => this._calendarFrom = c}
                        selected={this.props.certificates[i].validUntil}
                        customInput={
                            <div></div>
                        }
                    />

                    <Button onClick={() => this.deleteCertificate(i)}>
                        Delete certificate
                </Button>
                </Segment>
            )
        }


        return (
            <Segment>
                <Header>{this.props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                {certificates.length > 0 &&
                    <Form>
                        {certificates}
                    </Form>
                }

                <Button onClick={() => this.addCertificate()}>
                    Add
            </Button>
            </Segment>
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