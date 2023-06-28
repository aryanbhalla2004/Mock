import React, {createContext, useEffect, useState} from 'react';
import { Auth, Hub, Storage } from "aws-amplify";
import {CognitoUser} from "@aws-amplify/auth";
import { Session } from 'inspector';
import { API } from 'aws-amplify';
const DatabaseContext = createContext<any>(null);

const DbProvider = ({children}: any) => {
  const [user, setUser] = useState<CognitoUser>();

  const pushDataUser = async (where:any, what:any) => {
    const response = await API.graphql({query: where, variables: {input: what}, authMode: "AMAZON_COGNITO_USER_POOLS" });
  }
  const pushDataUserReturn = async (where:any, what:any) => {
    const response = await API.graphql({query: where, variables: {input: what}, authMode: "AMAZON_COGNITO_USER_POOLS" });
    return await response;
  }
  const pushDataUserAPI = async (where:any, what:any) => {
    const response = await API.graphql({query: where, variables: {input: what}, authMode: "API_KEY" });
  }
 
  const pullDataFilter = async (where: any, object:any) => {
    return await API.graphql({query: where, variables: object, authMode: "AMAZON_COGNITO_USER_POOLS"});
  }
  const pullObj = async (where:any, id:string) => {
    return await API.graphql({query: where,variables: { id: id },  authMode: "AMAZON_COGNITO_USER_POOLS"});
}
  const fetchData = async (where:string) => {
    return await API.graphql({query: where, authMode: "AMAZON_COGNITO_USER_POOLS"});
  };
  const listDataByID = async (where:string, id:string, type:string) => {
    return await API.graphql({query: where, variables: { [type]: id }, authMode: "AMAZON_COGNITO_USER_POOLS"});
  };
  
  const updateAttribute = async (key:any, value:any) => {
    return Auth.currentAuthenticatedUser().then(item => {
      Auth.updateUserAttributes(item, {
        [key]: value
      });
    })
   
  }

  const uploadFile = async (key:string, file:File, levelPr:any) => { 
    try {
       const itm = await Storage.put(key, file, {
         level: levelPr,
         contentType: file.type,
       });

       //Storage.put()
       //const url = `https://www.${awsExp.aws_user_files_s3_bucket}.s3.${awsExp.aws_user_files_s3_bucket_region}.amazonaws.com/${levelPr}/${key}`;
      return key;
    } catch (err) {
      throw err;
    }
  };

  return (
    <DatabaseContext.Provider value={{updateAttribute, pullDataFilter, pushDataUser, uploadFile, fetchData, pullObj, pushDataUserAPI,listDataByID, pushDataUserReturn}}>
      {children}
    </DatabaseContext.Provider>
  )
}

export {DbProvider, DatabaseContext}