import * as React from 'react';
import {
    Button,
    Dropdown
} from '@salesforce/design-system-react';

export const getAdd = (callback) => {
    return (
        <Button
            label="Add"
            onClick={callback}
            iconCategory="utility"
            iconName="add"
            iconPosition="left"
        />
    )
}

export const getTogglePanel = (id, setState) => {
    setState((state) => ({
        ...state,
        expandedPanels: {
            [id]: !state.expandedPanels[id],
        },
    }));
}

export const getDownload = (onSelect = null, buttonClassName = null, triggerClassName = null) => {
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