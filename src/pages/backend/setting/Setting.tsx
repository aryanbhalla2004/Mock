import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../style.css";
import logo from "../../assets/logo-green.png";
import { AccountContext } from '../../../setup/contexts/AuthContext';
import { DatabaseContext } from '../../../setup/contexts/dbContext';
import { useForm } from "react-hook-form";
import {createUser, createWorkorder, createHouse, updateUser, updateEmployee} from "../../../graphql/mutations"
import {getUser as getUsr, getEmployee, getHouse, getWorkorder, listHouses, listWorkorders, listEmployees} from "../../../graphql/queries"
import { get } from 'http';


const Setting = () => {

  const { register, handleSubmit,formState,reset, formState: { isSubmitSuccessful } } = useForm({defaultValues: {
    accountName: "",
    accountNum: "",
    branchNum: "",
    email: "",
    fin: "",
    type: "",
    newPassword: "",
    confirmPassword: "",
    oldPassword: ""
  }});


  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  const [editDeats, setEditDeats] = React.useState(0);
  const {getUser, getSession} = useContext(AccountContext);
  const {pushDataUser, pullObj,listDataByID, pushDataUserReturn, pullDataFilter, fetchData} = useContext(DatabaseContext);
  const [emp, setEmp] = React.useState({} as any);
  useEffect(() => {
    pull();

  },[]);


  const pull = async () => {
    const employee = await pullObj(getEmployee,getUser().username);
    
    console.log(employee);
    setEmp(employee.data.getEmployee);
  }

  const editInfo = async (e:any) => {
    console.log(e);
    if(e.email === ""){
      e.type = "bank transfer";
      e.email = null;
    
    } else {
      e.type = "interac";
      e.accountNum = null;
      e.branchNum = null;
      e.fin = null;
      e.accountName = null;
    }
    
    const data = {id:"99d8085d-d6b7-42f4-9dbc-f2d3b4c08f5d", payment: e, _version:emp._version };

    console.log(data);
    const itm = await pushDataUser(updateEmployee,data);
    console.log(itm);
   
  }

  const changePass = async (e:any) => {
    if(e.newPassword !== e.confirmPassword) return;

    getSession().then((user:any) => {
      user.changePassword(e.oldPassword, e.newPassword, (err:any, result:any) => {
        if(err) console.log(err);
        console.log(result);
      })
    })
  }

  return (
    <>
    <p>{getUser().username}</p>
    <p>Set preffered payment type</p>
   { emp?.payment?.type === "interac" ?  <button onClick={() => setEditDeats(1)}> Change to Direct Deposit</button> : <button onClick={() => setEditDeats(2) }> Change to Interac</button>}
    
   { !(emp?.payment?.type === "interac") ?  <button onClick={() => setEditDeats(3)}>Edit Interac Email</button> : <button onClick={() => setEditDeats(4)}>Edit Direct Deposit Details</button>}
   <button onClick={() => setEditDeats(5)}>Change Password</button>
    {editDeats === 1 && <div>
      <p>Change to Direct Deposit</p>
      <form onSubmit={handleSubmit(editInfo)}>
      <input {...register("accountNum")} type="number"  placeholder='XXXXXXXXXXXX'/>  
      <input {...register("fin")} type="number" placeholder='XXX'/> 
      <input {...register("branchNum")} type="number" placeholder='XXXXX'/>     
      <input  {...register("accountName")} type="text" placeholder='James Smith'/>
      <button type="submit">Sumbit</button>
      </form>
      </div>}
    {editDeats === 2 && <div>
      <p>Change to Interac </p>
      <form onSubmit={handleSubmit(editInfo)}>
        <input {...register("email")} type="email" placeholder='example@mail.com'/>
        <button type="submit">Sumbit</button>
      </form>
      </div>}
    {editDeats === 3 && <div><p>Change Interac Information</p>
      <form onSubmit={handleSubmit(editInfo)}>
        <input {...register("email")}  type="email" placeholder='example@mail.com'/>
        <button type="submit">Sumbit</button>
      </form>
      </div>}
    {editDeats === 4 && <div>
      <p>Change to Direct Deposit Information</p>
      <form onSubmit={handleSubmit(editInfo)}>
      <input {...register("accountNum")} type="number"  placeholder='XXXXXXXXXXXX'/>  
      <input {...register("fin")} type="number" placeholder='XXX'/> 
      <input {...register("branchNum")} type="number" placeholder='XXXXX'/>     
      <input  {...register("accountName")} type="text" placeholder='James Smith'/>
      <button type="submit">Sumbit</button>
      </form>
      </div>}

      {editDeats === 5 && <div> <p>Change Password</p>
      <form onSubmit={handleSubmit(changePass)}>
        <input {...register("oldPassword")} type="password" placeholder='Old Password'/>
        <input {...register("newPassword")} type="password" placeholder='Password'/>
        <input {...register("confirmPassword")} type="password" placeholder='Confirm Password'/>
        <button type="submit">Sumbit</button>
      </form>
      </div>
      }
    
    </>
  )
}
export default Setting;
