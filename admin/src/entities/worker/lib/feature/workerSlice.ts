import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@shared/lib';

export interface IWorkerState {
    isOpen?: boolean;
    img: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    telegram: string;
    whatsapp: string;
    position: string;
    about: string;
    experience: string;
    date: string;
}

const initialState: IWorkerState = {
    isOpen: false,
    img: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    telegram: '',
    whatsapp: '',
    position: '',
    about: '',
    experience: '',
    date: '',
};

export const workerSlice = createSlice({
    name: 'worker',
    initialState,
    reducers: {
        setWorkerData: (state, action) => {
            return action.payload;
        },
    },
});

export const { setWorkerData } = workerSlice.actions;
export const selectWorker = (state: RootState) => state.worker;