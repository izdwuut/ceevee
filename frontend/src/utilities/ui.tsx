import * as React from 'react';
import {
    Dropdown
} from '@salesforce/design-system-react';

export const toggleAccordionPanel = (id:number, setState:any):void => {
    setState((state) => ({
        ...state,
        expandedPanels: {
            [id]: !state.expandedPanels[id],
        },
    }));
}

export const getDownload = (onSelect:any = null, buttonClassName:string = '', triggerClassName:string = '') => {
    return (
        <Dropdown
            align="right"
            iconCategory="utility"
            iconName="download"
            iconPosition="left"
            label="Download..."
            options={[
                { label: 'PDF', value: 'pdf' },
                { label: 'Text', value: 'text' },
            ]}
            onSelect={onSelect}
            buttonClassName={buttonClassName}
            triggerClassName={triggerClassName}
        />
    )
}