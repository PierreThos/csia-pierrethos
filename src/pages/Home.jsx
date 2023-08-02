import React, { useState } from 'react'
import Select from 'react-select'
import Search from './Search'
import { Link } from 'react-router-dom';
import { create } from 'zustand';
import useStore from '../useStore';




const Home = () => {


  const years = useStore((state) => state.years);
  const categories = useStore((state) => state.categories);

  console.log(years)
  console.log(categories)


  //Sample student data (temp)
  const students = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      graduatingYear: 2022,
      yearbookQuote: "Carpe Diem!"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      graduatingYear: 2020,
      yearbookQuote: "Dream big, achieve bigger!"
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      graduatingYear: 2024,
      yearbookQuote: ""
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Davis",
      graduatingYear: 2021,
      yearbookQuote: "Always follow your passion!"
    }
  ];



  //All variables that will be used to filter the search
  const [searchQueryYear, setSearchQuery1] = useState('');
  const [searchQueryCat, setSearchQuery2] = useState('');
  const [searchQueryText, setSearchQuery3] = useState('');


  //functions setting above variables to what is entered in the fields (text and dropdown filtering)
  const handleYearInput = choice => {
    setSearchQuery1(choice.value);
  }

  const handleCatInput = choice2 => {
    setSearchQuery2(choice2.value);
  }

  const handleTextInput = event3 => {
    setSearchQuery3(event3.target.value);
  }

  console.log(searchQueryText)
  console.log(searchQueryYear)
  console.log(searchQueryCat)



  const storeQueries = create((set) => ({
    searchQueryT: searchQueryText,
    searchQueryY: searchQueryYear,
    searchQueryC: searchQueryCat,

    setText: (value) => set(() => ({ searchQueryT: value })),
    setYear: (value) => set(() => ({ searchQueryY: value })),
    setCat: (value) => set(() => ({ searchQueryC: value })),
  }));



  //function that will search through API with filters to find results
  const handleSearch = () => {


    if (true) {
      // Call the API with the search query
      /*axios.get(`https://api.example.com/items?search=${query}`)
      .then(response => {
        // Handle the API response
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });*/
    }
  }


  return (
    <div className='home'>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel auctor diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut finibus non risus non congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer at nulla at nisl interdum placerat eu nec neque. Aenean vitae condimentum justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lobortis ipsum aliquet diam lacinia hendrerit. Aenean neque nunc, mollis eu augue eget, venenatis commodo metus.

        Mauris eu dapibus lorem, quis posuere libero. Aliquam dapibus ultrices porttitor. Praesent nulla metus, varius ac placerat in, molestie sit amet risus. Quisque sed elit tristique, ultrices est accumsan, vehicula est. Proin ac ante non lacus luctus venenatis non vitae elit. Nulla eu dui sapien. Integer dapibus, tortor vitae pulvinar ornare, ligula ligula interdum nibh, nec gravida augue metus quis leo. Mauris at neque et felis ultricies sodales.</p>

      <form>
        <input type="text" placeholder='Search students/ yearbook quotes...' onChange={handleTextInput} />
        <Select className="dropdown" options={years} placeholder="Any Year" onChange={handleYearInput}></Select>
        <Select className="dropdown" options={categories} placeholder="Any Category" onChange={handleCatInput}></Select>
      </form>

      <button onClick={handleSearch}>
        <Link className='searchLink' to='/search'>
          Search
        </Link>
      </button>

      <h1 style={{ display: "none" }}>
        <Search searchQueryY={searchQueryYear} searchQueryC={searchQueryCat} searchQueryT={searchQueryText} yearsArr={years} categoriesArr={categories} />
      </h1>
    </div>
  );
}
export default (Home);







{/* <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div> */}