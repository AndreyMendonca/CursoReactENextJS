import { create } from "zustand";

type States = {
    name: string;
    address: {
        street: string;
        number: string;
        complemento?: string | undefined;
        district: string;
        city: string;
        state: string;
    }
}

type Actions = {
    setName: (name: State["name"]) => void;
    setAddress: (address: State["address"]) => void;
}

const initialState: State = {
    name: '',
    address: {
        street: '',
        number: '',
        complemento: '',
        district:'',
        city: '',
        state: ''
    }
}
export const useCheckouStore = create<States & Actions>()(set => ({
    ...initialState,
    setName: (name) => set(state => ({...state, name})),
    setAddress: (address) => set(state => ({...state, address}))
}))