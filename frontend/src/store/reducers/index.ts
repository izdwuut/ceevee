import { combineReducers } from "redux";
import details from './pages/createcv/details/details'
import skills from './pages/createcv/skills/skills'
import hobbies from './pages/createcv/hobbies/hobbies'
import experience from './pages/createcv/experience/experience'
import languages from './pages/createcv/languages/languages'
import education from './pages/createcv/education/education'
import links from './pages/createcv/links/links'
import gdpa from './pages/createcv/gdpa/gdpa'
import certificates from './pages/createcv/certificates/certificates'
import projects from './pages/createcv/projects/projects'

import pdfViewer from "./components/pdfViewer/pdfViewer";
import accessibility from './components/accessibility/accessibility'
import modal from './components/modal/modal'
import toasts from './components/toasts/toasts'

const rootReducer = combineReducers({
    details: details,
    pdfViewer: pdfViewer,
    skills: skills,
    hobbies: hobbies,
    experience: experience,
    languages: languages,
    education: education,
    links: links,
    gdpa: gdpa,
    certificates: certificates,
    projects: projects,
    accessibility: accessibility,
    modal: modal,
    toasts: toasts
});

export default rootReducer