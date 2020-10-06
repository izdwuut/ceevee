import { combineReducers } from "redux";
import pdfViewer from "./pdf/pdfViewer";
import metaData from './ui/metaData'
import skills from './ui/skills'
import hobbies from './ui/hobbies'
import experience from './ui/experience'
import languages from './ui/languages'


export default combineReducers({ 
    metaData: metaData,
    pdfViewer: pdfViewer,
    skills: skills,
    hobbies: hobbies,
    experience: experience,
    languages: languages
});
