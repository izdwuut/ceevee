import { combineReducers } from "redux";

import details from './components/cv/edit/details/details'
import skills from './components/cv/edit/skills/skills'
import hobbies from './components/cv/edit/hobbies/hobbies'
import experience from './components/cv/edit/experience/experience'
import languages from './components/cv/edit/languages/languages'
import education from './components/cv/edit/education/education'
import links from './components/cv/edit/links/links'
import gdpa from './components/cv/edit/gdpa/gdpa'
import certificates from './components/cv/edit/certificates/certificates'
import projects from './components/cv/edit/projects/projects'
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

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
