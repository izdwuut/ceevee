import * as actions from './actionTypes'

const initialState = {
    header: 'Links',
    description: "Do you run a website? Perhaps you have a portfolio? LinkedIn profile? Attach it all.",
    originalHeader: 'Links',
    links: [],
    visible: false
}

export default function links(state = initialState, action) {
    switch (action.type) {
        case actions.LINKS_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case actions.LINKS_UPDATE_LABEL: {
            let linksCopy = [...state.links]
            linksCopy[action.payload.id].label = action.payload.label
            return {
                ...state,
                links: linksCopy
            }
        }
        case actions.LINKS_UPDATE_LINK: {
            let linksCopy = [...state.links]
            linksCopy[action.payload.id].link = action.payload.link
            return {
                ...state,
                links: linksCopy
            }
        }
        case actions.LINKS_ADD_LINK: {
            let linksCopy = [...state.links]
            linksCopy.push({
                label: '',
                link: ''
            })
            return {
                ...state,
                links: linksCopy,
                visible: true
            }
        }
        case actions.LINKS_DELETE_LINK: {
            let linksCopy = [...state.links]
            linksCopy.splice(action.payload.id, 1)
            return {
                ...state,
                links: linksCopy,
                visible: linksCopy.length > 0
            }
        }
        default:
            return state;
    }
}