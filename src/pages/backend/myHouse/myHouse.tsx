import React, { useContext, useEffect } from 'react'
import "../style.css";
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import {listHouses} from "../../../graphql/queries"
import {updateHouse} from "../../../graphql/mutations"

const MyHouse = () => {
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
          eq: getUser().username
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



  return(<>

    {itms && itms.map((itm:any) => (
      <div><p>{itm.id}</p><button >View House</button></div>

    ))}
  
      <div className="house-cards">
        <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg" alt="" className="house-card-img" />
        <div className="house-cards-bottom">
          <p className="house-cards-title">12 West mill</p>
          <p className="house-cards-subtitle">House ID</p>
          <button className="house-cards-btn">Select This House</button>
        </div>
      
      </div>
  </>)
}

export default MyHouse;