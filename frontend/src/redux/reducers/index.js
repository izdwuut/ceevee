import { combineReducers } from "redux";
import pdfViewer from "./pdf/pdfViewer/pdfViewer";
import details from './ui/createcv/details/details'
import skills from './ui/createcv/skills/skills'
import hobbies from './ui/createcv/hobbies/hobbies'
import experience from './ui/createcv/experience/experience'
import languages from './ui/createcv/languages/languages'
import education from './ui/createcv/education/education'
import links from './ui/createcv/links/links'
import gdpa from './ui/createcv/gdpa/gdpa'
import certificates from './ui/createcv/certificates/certificates'
import projects from './ui/createcv/projects/projects'
import accessibility from './ui/components/accessibility/accessibility'




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
