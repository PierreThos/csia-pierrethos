import React from 'react'
import { data } from '../data'
import Select from 'react-select'
import useStore from '../useStore';
import Home from './Home';
//import { useStore } from 'zustand'

const Search = () => {

    const years = useStore((state) => state.years);
    const categories = useStore((state) => state.categories);
    const searchQueryT = useStore((state) => state.searchQueryT);
    console.log(searchQueryT)


    return (
        <div>
            <h2>Results for "{searchQueryT}"</h2>
            <Select options={years} /*</div>placeholder={}*/></Select>
            <Select options={categories} /*placeholder={}*/></Select>


            {data.filter((item) => {
                return
            }).map((item) => (
                <h1 key={item.id}>
                    <div>{item.id}</div>
                    <div>{item.first_name}</div>
                    <div>{item.last_name}</div>
                    <div>{item.graduationYear}</div>
                    <div>{item.yearbookQuote}</div>
                </h1>

            ))}
        </div>
    )
}

export default Search
