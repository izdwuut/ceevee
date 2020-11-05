import * as Types from './types'

const initialState: Types.LinksState = {
    header: 'Links',
    description: "Do you run a website? Perhaps you have a portfolio? LinkedIn profile? Attach it all.",
    originalHeader: 'Links',
    links: [],
    visible: false
}

export default function links(state: Types.LinksState = initialState, action: Types.LinksActionTypes) {
    switch (action.type) {
        case Types.LINKS_UPDATE_HEADER: {
            return {
                ...state,
                header: action.payload.header
            }
        }
        case Types.LINKS_UPDATE_LABEL: {
            let linksCopy: Array<Types.Link> = [...state.links]
            linksCopy[action.payload.id].label = action.payload.label
            return {
                ...state,
                links: linksCopy
            }
        }
        case Types.LINKS_UPDATE_LINK: {
            let linksCopy: Array<Types.Link> = [...state.links]
            linksCopy[action.payload.id].link = action.payload.link
            return {
                ...state,
                links: linksCopy
            }
        }
        case Types.LINKS_ADD_LINK: {
            let linksCopy: Array<Types.Link> = [...state.links]
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
        case Types.LINKS_DELETE_LINK: {
            let linksCopy: Array<Types.Link> = [...state.links]
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