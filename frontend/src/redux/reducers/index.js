import { combineReducers } from "redux";
import pdfViewer from "./pdf/pdfViewer/pdfViewer";
import details from './ui/details/details'
import skills from './ui/skills/skills'
import hobbies from './ui/hobbies/hobbies'
import experience from './ui/experience/experience'
import languages from './ui/languages/languages'
import education from './ui/education/education'
import links from './ui/links/links'
import gdpa from './ui/gdpa/gdpa'
import certificates from './ui/certificates/certificates'
import projects from './ui/projects/projects'
import accessibility from './ui/accessibility/accessibility'




export default combineReducers({ 
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
});
