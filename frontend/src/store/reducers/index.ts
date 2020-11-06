import { combineReducers } from "redux";

import details from './pages/cv/edit/details/details'
import skills from './pages/cv/edit/skills/skills'
import hobbies from './pages/cv/edit/hobbies/hobbies'
import experience from './pages/cv/edit/experience/experience'
import languages from './pages/cv/edit/languages/languages'
import education from './pages/cv/edit/education/education'
import links from './pages/cv/edit/links/links'
import gdpa from './pages/cv/edit/gdpa/gdpa'
import certificates from './pages/cv/edit/certificates/certificates'
import projects from './pages/cv/edit/projects/projects'
import pdfViewer from "./components/pdf/viewer/viewer";
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
