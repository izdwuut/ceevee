import { combineReducers } from "redux";
import pdfViewer from "./pdf/pdfViewer";
import metaData from './ui/metaData'
import skills from './pdf/skills'
import hobbies from './pdf/hobbies'

export default combineReducers({ 
    metaData: metaData,
    pdfViewer: pdfViewer,
    skills: skills,
    hobbies: hobbies
});
