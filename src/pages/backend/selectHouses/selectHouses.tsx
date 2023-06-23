import React, { useContext } from 'react'
import "../style.css";
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import {listHouses} from "../../../graphql/queries"
import {updateHouse} from "../../../graphql/mutations"

const SelectHouses = () => {
  const [itms, setItms] = React.useState([]);
  const {getUser} = useContext(AccountContext);
  const {pullDataFilter, pushDataUser} = useContext(DatabaseContext);
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


  return(<>
  <button onClick={pullHousesWithFilter}>PULL</button>
    {itms && itms.map((itm:any) => (
      <div><p>{itm.id}</p><button onClick={() => setAsEmployesHouse(itm.id)}>set as my house</button></div>

    ))}
  
  </>)
}

export default SelectHouses;