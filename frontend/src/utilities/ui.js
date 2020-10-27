import * as React from 'react';
import {
    Button,
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

export const getContentActions = (callback) => {
    return (
        <Button
            assistiveText={{ icon: 'Delete' }}
            label="Delete"
            iconCategory="action"
            iconName="delete"
            iconSize="small"
            iconVariant="bare"
            colorVariant="error"
            onClick={callback}
            variant="icon"
        />
    );
}

export const getTogglePanel = (id, setState) => {
    setState((state) => ({
        ...state,
        expandedPanels: {
            [id]: !state.expandedPanels[id],
        },
    }));
}