import React, { useContext, useEffect } from 'react'
import "../style.css";
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import {listHouses} from "../../../graphql/queries"
import {updateHouse} from "../../../graphql/mutations"
import { DashboardPageHeader } from '../Components/dashboard-page-header/DashboardPageHeader';
import "./style.css";
import { TextInput, Textarea } from '../../../common/components/input/Input';

const SelectHouses = () => {
  const [itms, setItms] = React.useState([]);
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
          attributeExists: false,
        },
      }
    };
    try {
      const response = await pullDataFilter(listHouses, variables);
      console.log(response);
      setItms(response.data.listHouses.items);
    } catch(response){
      console.log(response);
    }
    
  }

  const setAsEmployesHouse = async (id:any) => {
    const itm = {
      id: id,
      employeeID: getUser().username
    }
    try {
      const response = await pushDataUser(updateHouse, itm);
      console.log(response);
      setItms(response.data.listHouses.items);
    } catch(response){
      console.log(response);
    }
  }


  return(
    <>
      {/* {itms && itms.map((itm:any) => (
        <div><p>{itm.id}</p><button onClick={() => setAsEmployesHouse(itm.id)}>set as my house</button></div>

      ))} */}

      {/* <DashboardPageHeader/> */}
      <div className='search-container-select-house'>
        <div className='search-container'>
          <TextInput label="" type="Text" name="search" placeholder='Search by address, area'/>
        </div>
        <div className='flex-distance-filter-container'>
          <p>Sort by: </p>
          <select>
            <option>Distance</option>
            <option>Highest to Lowest</option>
            <option>Lowest to Highest</option>
          </select>
        </div>
      </div>

      <ul>
        
      </ul>
    </>
  )
}

export default SelectHouses;