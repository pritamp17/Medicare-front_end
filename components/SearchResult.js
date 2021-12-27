import * as React from "react";
import { useState } from "react";
import {Card} from "react-bootstrap"
import axios from "axios"

const SearchResult = ({data})=>
{
    return(
        <>
          <div>
          <Card>
         <Card.Body>{data}</Card.Body>
         </Card>

          </div>
        </>
    )
}
export default SearchResult