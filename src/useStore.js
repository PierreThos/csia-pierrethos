import { create } from 'zustand';
import Home from './pages/Home';



export const useStore = create((set) => ({
    years: [
        { value: 2023, label: 'Class of 2023' },
        { value: 2022, label: 'Class of 2022' },
        { value: 2021, label: 'Class of 2021' },
        { value: 2020, label: 'Class of 2020' },
        { value: 2019, label: 'Class of 2019' },
        { value: 2018, label: 'Class of 2018' },
        { value: 2017, label: 'Class of 2017' },
    ],

    categories: [
        { value: 'firstName', label: 'Search by first name' },
        { value: 'lastName', label: 'Search by last name' },
        { value: 'quotes', label: 'Search yearbook quotes' },

    ],

    setYears: (value) => set(() => ({ years: value })),
    setCategories: (value) => set(() => ({ categories: value })),
}));

export default useStore;
