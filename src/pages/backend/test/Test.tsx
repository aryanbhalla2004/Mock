<<<<<<< HEAD
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../style.css";
import logo from "../../assets/logo-green.png";
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import {createUser, createWorkorder, createHouse, updateUser} from "../../../graphql/mutations"
import {getUser as getUsr, getEmployee, getHouse, getWorkorder, listHouses, listWorkorders, listEmployees} from "../../../graphql/queries"
import { Employee } from '../../../models';
import { get } from 'http';
interface objs{
  user:any,
  emp:any,
  hou:any,
  work:any
}
const Test = () => {
  const [itms, setItms] = React.useState({} as objs);
  const {getUser, isAuthenticated} = useContext(AccountContext);
  const {pushDataUser, pullObj,listDataByID, pushDataUserReturn, pullDataFilter, fetchData} = useContext(DatabaseContext);
  
  const creUser = async () => {
    if(!isAuthenticated) return;
    const user = {
      name: "ARYAN TEST",
      subscriptionWorkorder: 4,
      id: getUser().username
    }
    console.log(user);
    const itm = await pushDataUserReturn(createUser,user);
    // setItms((prevState) => ({
    //   ...prevState,
    //   user: itm.data.getUser
    // }));
  }
  const creHou = async () => {
    const itm = itms.emp.address;
    console.log(itm);
    delete itm.__typename;
    const house = {
      userID: itms.user.id,
      address: itm
    }
    console.log(house);
    const itm1 = await pushDataUserReturn(createHouse,house);
    console.log(itm1);

    setItms((prevState) => ({
      ...prevState,
      hou:itm1.data.updateUser
    }));
  }

  
  const pullHousesWithFilter = async () => {
    const variables = {
      filter: {
        employeeID: {
          attributeExists: false,
        },
      }
    };

    try {
      let response = await pullDataFilter(listHouses, variables);
      console.log(response);
    } catch(response){
      console.log(response);
    }
  }

  const createWork = async () => {
    
    const work = {
      money: 10201002,
      userID: itms.user.id,
      usercompletion:false,
      workercompletion:false,
      workorderHouseId:itms.hou[0].id

    }
    console.log(work);
   const itm = pushDataUserReturn(createWorkorder,work);
  }

  const pull = async () => {
    const itm = await pullObj(getUsr, getUser().username);
    const employee = await pullObj(getEmployee,getUser().username);
    
    console.log(itm, employee);
    console.log(employee.data.getEmployee.address);
    setItms((prevState) => ({
      ...prevState,
      user:itm.data.getUser, emp:employee.data.getEmployee
    }));
  }
  
  const pullHou = async () => {
    const itm = await listDataByID(listHouses, itms.user.id, "userID");
    
    console.log(itm.data.listHouses.items);
     setItms((prevState) => ({
       ...prevState,
       hou: itm.data.listHouses.items
    }));

  }



  const pullWork = async () => {
    const itm = await pullObj(listWorkorders, itms.user.id);

    console.log(itm.data.listWorkorders);
    setItms((prevState) => ({
      ...prevState,
      work:itm.data.listWorkorders
    }));
  }

  // const pullWork = async () => {

  // }

  const pullMyProfile = async () => {
    const userID = getUser().username;
     console.log(userID);
    const itm = await fetchData(listEmployees);
    const EmployeeProfile = itm.data.listEmployees.items[0];
    const EmployeeFullObject = await pullObj(getEmployee, EmployeeProfile.id);
    console.log(EmployeeFullObject);
  }


  const sendeEmail = async () => {
    const user = getUser();
    console.log(user.signInUserSession.accessToken.jwtToken);
    const itm = await fetch("https://886bxynv5b.execute-api.ca-central-1.amazonaws.com/test",
      {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': user.signInUserSession.idToken.jwtToken,
        },
        body: JSON.stringify({
          senderName: "aryansaini1005@gmail.com",//from
          senderEmail: "aryansaini1005@gmail.com",//to
          message: "HI aryan fuck u whore",
          base64Data: "",
          date: new Date(),
          fileName: "TEST_FILE_NAME",
        }),
        
      });

      console.log(JSON.stringify({date:new Date()}));
    }
    
  console.log(getUser());
  return (
    <>
    <button onClick={creUser}>CREATE USER</button>
    <button onClick={pull}>Pull</button>
    <button onClick={creHou}>Create House</button>
    <button onClick={pullHou}>Pull House</button>
    <button onClick={createWork}>Create WorkOrder</button>
    <button onClick={pullWork}>Pull WorkOrder</button>
    <button onClick={pullHousesWithFilter}>Pull with fikter</button>
    <button onClick={sendeEmail}>Send Email</button>
    <button onClick={pullMyProfile}>Employee Profile</button>
    <div>
      <p>USER: {itms?.user?.name}</p>

    </div>
    <div>
      <p>EMPLOYEE: {itms?.emp?.firstName}</p>
    </div>
    <div>
      {itms?.hou && itms?.hou?.map((item:any) => (<><p>{item.id}</p></>))}
    </div>
    <div>
      <p>Work: {itms?.work?.money}</p>
    </div>
    
    
    </>
  )
}
export default Test;
||||||| c4450da
=======
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../style.css";
import logo from "../../assets/logo-green.png";
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import {createUser, createWorkorder, createHouse, updateUser} from "../../../graphql/mutations"
import {getUser as getUsr, getEmployee, getHouse, getWorkorder, listHouses, listWorkorders} from "../../../graphql/queries"
import { Employee } from '../../../models';
import { get } from 'http';
interface objs{
  user:any,
  emp:any,
  hou:any,
  work:any
}
const Test = () => {
  const [itms, setItms] = React.useState({} as objs);
  const {getUser, isAuthenticated} = useContext(AccountContext);
  const {pushDataUser, pullObj,listDataByID, pushDataUserReturn, pullDataFilter} = useContext(DatabaseContext);
  
  const creUser = async () => {
    if(!isAuthenticated) return;
    const user = {
      name: "ARYAN TEST",
      subscriptionWorkorder: 4,
      id: getUser().username
    }
    console.log(user);
    const itm = await pushDataUserReturn(createUser,user);
    // setItms((prevState) => ({
    //   ...prevState,
    //   user: itm.data.getUser
    // }));
  }
  const creHou = async () => {
    const itm = itms.emp.address;
    console.log(itm);
    delete itm.__typename;
    const house = {
      userID: itms.user.id,
      address: itm
    }
    console.log(house);
    const itm1 = await pushDataUserReturn(createHouse,house);
    console.log(itm1);

    setItms((prevState) => ({
      ...prevState,
      hou:itm1.data.updateUser
    }));
  }

  
  const pullHousesWithFilter = async () => {
    const variables = {
      filter: {
        employeeID: {
          attributeExists: false,
        },
      }
    };

    try {
      let response = await pullDataFilter(listHouses, variables);
      console.log(response);
    } catch(response){
      console.log(response);
    }
  }

  const createWork = async () => {
    
    const work = {
      money: 10201002,
      userID: itms.user.id,
      usercompletion:false,
      workercompletion:false,
      workorderHouseId:itms.hou[0].id

    }
    console.log(work);
   const itm = pushDataUserReturn(createWorkorder,work);
  }

  const pull = async () => {
    const itm = await pullObj(getUsr, getUser().username);
    const employee = await pullObj(getEmployee,getUser().username);
    
    console.log(itm, employee);
    console.log(employee.data.getEmployee.address);
    setItms((prevState) => ({
      ...prevState,
      user:itm.data.getUser, emp:employee.data.getEmployee
    }));
  }
  
  const pullHou = async () => {
    const itm = await listDataByID(listHouses, itms.user.id, "userID");
    
    console.log(itm.data.listHouses.items);
     setItms((prevState) => ({
       ...prevState,
       hou: itm.data.listHouses.items
    }));

  }



  const pullWork = async () => {
    const itm = await pullObj(listWorkorders, itms.user.id);

    console.log(itm.data.listWorkorders);
    setItms((prevState) => ({
      ...prevState,
      work:itm.data.listWorkorders
    }));
  }


  const sendeEmail = async () => {
    const user = getUser();
    console.log(user.signInUserSession.accessToken.jwtToken);
    const itm = await fetch("https://886bxynv5b.execute-api.ca-central-1.amazonaws.com/test",
      {
        mode: "cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': user.signInUserSession.idToken.jwtToken,
        },
        body: JSON.stringify({
          senderName: "aryansaini1005@gmail.com",//from
          senderEmail: "aryansaini1005@gmail.com",//to
          message: "HI aryan fuck u whore",
          base64Data: "",
          date: new Date(),
          fileName: "TEST_FILE_NAME",
        }),
        
      });

      console.log(JSON.stringify({date:new Date()}));
    }
    
  console.log(getUser());
  return (
    <>
    <button onClick={creUser}>CREATE USER</button>
    <button onClick={pull}>Pull</button>
    <button onClick={creHou}>Create House</button>
    <button onClick={pullHou}>Pull House</button>
    <button onClick={createWork}>Create WorkOrder</button>
    <button onClick={pullWork}>Pull WorkOrder</button>
    <button onClick={pullHousesWithFilter}>Pull with fikter</button>
    <button onClick={sendeEmail}>Send Email</button>
    <div>
      <p>USER: {itms?.user?.name}</p>

    </div>
    <div>
      <p>EMPLOYEE: {itms?.emp?.firstName}</p>
    </div>
    <div>
      {itms?.hou && itms?.hou?.map((item:any) => (<><p>{item.id}</p></>))}
    </div>
    <div>
      <p>Work: {itms?.work?.money}</p>
    </div>
    
    
    </>
  )
}
export default Test;
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
