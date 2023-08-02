import React, { useState } from "react";

const students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    graduatingYear: 2021,
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
    graduatingYear: 2013,
    yearbookQuote: ""
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    graduatingYear: 2020,
    yearbookQuote: "Always follow your passion!"
  }
];

const SearchStudents = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = students.filter(student => {
      const { firstName, lastName, graduatingYear, yearbookQuote } = student;
      const lowerCaseQuery = query.toLowerCase();

      return (
        firstName.toLowerCase().includes(lowerCaseQuery) ||
        lastName.toLowerCase().includes(lowerCaseQuery) ||
        graduatingYear.toString().includes(query) ||
        yearbookQuote.toLowerCase().includes(lowerCaseQuery)
      );
    });

    setResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map(student => (
          <li key={student.id}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchStudents;