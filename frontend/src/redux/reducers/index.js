import { combineReducers } from "redux";
import pdfViewer from "./pdf/pdfViewer/pdfViewer";
import metaData from './ui/metaData/metaData'
import skills from './ui/skills/skills'
import hobbies from './ui/hobbies/hobbies'
import experience from './ui/experience/experience'
import languages from './ui/languages/languages'
import education from './ui/education/education'
import links from './ui/links/links'
import gdpa from './ui/gdpa/gdpa'



export default combineReducers({ 
    metaData: metaData,
    pdfViewer: pdfViewer,
    skills: skills,
    hobbies: hobbies,
    experience: experience,
    languages: languages,
    education: education,
    links: links,
    gdpa: gdpa
});
