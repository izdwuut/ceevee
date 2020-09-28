import { combineReducers } from "redux";
import pdfViewer from "./pdf/pdfViewer";
import metaData from './ui/metaData'

export default combineReducers({ 
    metaData: metaData,
    pdfViewer: pdfViewer
});
