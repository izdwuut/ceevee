import * as React from 'react';
import {
    Button,
    Segment,
    Form,
    Input,
    TextArea,
    Header
} from 'semantic-ui-react'
import { connect } from "react-redux"
import MainContext from '../../CreateCVApp'
import debounce from '../../utilities/debounce'
import { updatePreview } from '../../redux/actions/pdf/pdfViewer/actions'
import { debounceTime } from '../../utilities/variables'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css'
import * as Actions from '../../redux/actions/ui/experience/actions'
import  DatePicker  from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const mapStateToProps = state => {
    return state.experience
}



export function Experience(props) {

    const activeIndex = React.useState(0)

    const updatePreview = debounce(() => {
        props.updatePreview(true)
    }, debounceTime)

    const updateHeader = header => {
        props.updateHeader(header)
        updatePreview()
    }

    const updatePosition = (id, position) => {
        props.updatePosition(id, position)
        updatePreview()
    }

    const updateCompany = (id, company) => {
        props.updateCompany(id, company)
        updatePreview()
    }

    const updateCity = (id, city) => {
        props.updateCity(id, city)
        updatePreview()
    }

    const updateCountry = (id, country) => {
        props.updateCountry(id, country)
        updatePreview()
    }

    const updateDescription = (id, description) => {
        props.updateDescription(id, description)
        updatePreview()
    }

    const updateFromDate = (id, from) => {
        console.log(new Date(from))
        props.updateFromDate(id, new Date(from))
        updatePreview()
    }

    const updateToDate = (id, to) => {
        props.updateToDate(id, new Date(to))
        updatePreview()
    }

    const deleteExperience = id => {
        props.deleteExperience(id)
        updatePreview()
    }

    const addExperience = () => {
        props.addExperience({
            position: '',
            company: '',
            city: '',
            country: '',
            fromDate: new Date(),
            toDate: new Date(),
            description: ''
        })
        activeIndex.useState = props.experience.length
        updatePreview()
    }

    let experience = []
    if (experience) {
        for (let i = 0; i < props.experience.length; i++) {
            experience.push(
                <Segment>
                    <Form.Field
                        control={Input}
                        label='Position'
                        value={props.experience[i].position}
                        onChange={e => updatePosition(i, e.target.value)}
                    />
                    <Form.Field
                        control={Input}
                        label='Company'
                        value={props.experience[i].company}
                        onChange={e => updateCompany(i, e.target.value)}
                    />
                    <Form.Group widths='equal'>
                        <Form.Field
                            control={Input}
                            label='City'
                            value={props.experience[i].city}
                            onChange={e => updateCity(i, e.target.value)}
                        />
                        <Form.Field
                            control={Input}
                            label='Country'
                            value={props.experience[i].country}
                            onChange={e => updateCountry(i, e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <DatePicker
                            selected={props.experience[i].fromDate}
                            onChange={date => updateFromDate(i, date)}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            showFullMonthYearPicker
                        />
                        <DatePicker
                            selected={props.experience[i].toDate}
                            onChange={date => updateToDate(i, date)}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            showFullMonthYearPicker
                        />

                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label='Description'
                        value={props.experience[i].description}
                        onChange={e => updateDescription(i, e.target.value)}
                    />
                    <Button onClick={() => deleteExperience(i)}>
                        Delete
                </Button>
                </Segment>
            )
        }

        return (
            <Segment>
                <Header>{props.header}</Header>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                {experience.length > 0 &&
                    <Form>
                        {experience}
                    </Form>
                }

                <Button onClick={() => addExperience()}>
                    Add
            </Button>
            </Segment>
        )
    }
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