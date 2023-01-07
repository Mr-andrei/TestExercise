import { createSlice } from '@reduxjs/toolkit';
import { Worker } from '../../types';

type InitialState = {
    workers: Worker[];
};

const initialState: InitialState = {
    workers: [
        {
            id: '1',
            name: 'Andrei',
            type: 'Employee',
            workedTime: {
                workedHours: '6:00',
                workedDays: '12',
                holidays: '21',
            },
        },

        {
            id: '2',
            name: 'Viktor',
            type: 'Employee',
            workedTime: {
                workedHours: '7:00',
                workedDays: '17',
                holidays: '12',
            },
        },
        {
            id: '3',
            name: 'Misha',
            type: 'Employee',
            workedTime: {
                workedHours: '10:00',
                workedDays: '16',
                holidays: '10',
            },
        },
        {
            id: '4',
            name: 'Katya',
            type: 'Engineer',
            workedTime: {
                workedHours: '12:00',
                workedDays: '32',
                holidays: '5',
            },
        },
        {
            id: '5',
            name: 'Bro',
            type: 'Engineer',
            workedTime: {
                workedHours: '16:00',
                workedDays: '55',
                holidays: '10',
            },
        },
    ],
};

export const workersSlice = createSlice({
    name: 'workerSlice',
    initialState,
    reducers: {},
});


