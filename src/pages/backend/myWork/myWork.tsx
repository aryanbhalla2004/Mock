import React, { useContext, useEffect, useState} from 'react'
import "../style.css";
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import {listWorkorders} from "../../../graphql/queries"
import {updateHouse} from "../../../graphql/mutations"

const MyWork = () => {
  const [itms, setItms] = useState([]);
  const {getUser} = useContext(AccountContext);
  const {pullDataFilter, pushDataUser} = useContext(DatabaseContext);
  useEffect(() => {
    // Update the document title using the browser API
    pullHousesWithFilter();
  });
  const pullHousesWithFilter = async () => {
    const variables = {
      filter: {
        employeeID: {
          eq: getUser().username
        },
      }
    };
    try {
      const response = await pullDataFilter(listWorkorders, variables);
      console.log(response);
      setItms(response.data.listHouses.items);
    } catch(response){
      console.log(response);
    }
    
  }



  return(<>
    {itms && itms.map((itm:any) => (
      <div><p>{itm.id}</p><button >View Workorder</button></div>

    ))}
  
  </>)
}

export default MyWork;