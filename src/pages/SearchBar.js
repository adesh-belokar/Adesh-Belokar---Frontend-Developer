import React, { useEffect, useState } from 'react';

function SearchBar() {
  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setfilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [searchValue, setSearchValue] = useState(''); // Add state for the input value

  const handleInputChange = (value) => {
    setSearchValue(value); // Update the input value state
    if (filterData.length > 0) {
      const res = filterData.filter((f) =>
        f.rocket_id.toLowerCase().includes(value.toLowerCase())
      );
      console.log(res);
      setData(res);
    }
  };

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Rockets..."
          value={searchValue} // Bind the input value to state
          onChange={(e) => handleInputChange(e.target.value)}
          className="pl-10 pr-4 py-2 w-64 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <div className='search-result absolute' >
          {data.map((d, i) => (
            <div key={i}>
              {d.rocket_id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
