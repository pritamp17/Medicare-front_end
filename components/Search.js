import * as React from "react";
import { useState } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";
import { FormControl, InputGroup, Form, InputGroupText, Button } from "react-bootstrap";

const Search = () => {
  const [Item, setItem] = useState("");
  const [data, setdata] = useState([]);

  const inputEvent = (event) => {
    const data = event.target.value;
    // console.log(data)
    setItem(data);

    axios.get(`http://localhost:9000/users?name=${Item}`).then((response) => {
      if (response.data.length > 0) {
        setdata(response.data);
        console.log(response.data);
      }else setdata([]);
    });
  };
  return (
    <>
      <div>
            <FormControl type="search" placeholder="Find Doctor" value={Item} onChange={inputEvent} />
        {/*<input type=" text" value={Item} onChange={inputEvent} placeholder="Search Doctor" />*/}
        <SearchResult data={data} />
      </div>
    </>
  );
};

export default Search;
