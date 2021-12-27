import * as React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

const SearchResult = ({ data }) => {
  const router = useRouter();
  if (!data[0]) return null;
  console.log(data)
  const link = `http://localhost:3000/doctors/${data[0]._id}`;
  return (
    <>
      <div>
        <Card>
          <a href={link}><Card.Body >{data[0] ? data[0].name : null}</Card.Body></a>
        </Card>
      </div>
    </>
  );
};
export default SearchResult;
