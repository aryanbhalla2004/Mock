import React, {createContext, useEffect, useState} from 'react';
import { Auth } from "aws-amplify";
// import { useDispatch } from 'react-redux';
import { CognitoUser } from "@aws-amplify/auth";
// import { login as rLogin} from '../../setup/auth/userSlice';
// import { logout as rLogout } from '../../setup/auth/userSlice';
const AccountContext = createContext<any>(null);

// //? Used for creating new password
// interface userIdentity {
//   username: string,
//   code: string,
//   password: string
// }

// //? Used when the user register
// interface userSignUp {
//   email: string,
//   password: string,
//   fName: string,
//   lName: string,
//   accountType: string,
//   bName: string, 
//   bEmail: string,
//   bAddress: string
// }

const AccountProvider = ({children}: any) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getSession();
//   });

//   const getSession = async () => {
//     try {
//       const authenticatedUser = await Auth.currentAuthenticatedUser();
//       if(authenticatedUser) {
//         dispatch(rLogin({...authenticatedUser}));
//       }
//       return authenticatedUser;
//     } catch (err) {
//       throw err;
//     }
//   }
  
  const login = async (email: string, password: string) => {
    try {
      const user = await Auth.signIn(email, password);
      return user;
    } catch (err) {
      throw err;
    }
  }

  const logout = async (isGlobal: boolean) => {
    Auth.signOut({global: isGlobal});
    //dispatch(rLogout());
  }

  const forgotPassword = async (email: string) => {
    try {
      const response = await Auth.forgotPassword(email);
      return response;
    } catch(err) {
      throw(err);
    }
  }

  // const createNewPassword = async (userIdentification: userIdentity) => {
  //   const {username, code, password} = userIdentification;
  //   try {
  //     const response = await Auth.forgotPasswordSubmit(username, code, password);
  //     return response;
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  const completeUserPassword = async (tempUser: CognitoUser, password: string, attributes: any) => {
    console.log(attributes)
    try {
      const response = await Auth.completeNewPassword(tempUser, password, {
        given_name: "N/A",
        family_name: 'N/A',
      });
      return response;
    } catch(err) {
      throw err;
    }
  }

  const verifyMFACode = async (email: string, code: string) => {
    try {
      const response = await Auth.confirmSignUp(email, code);
      return response;
    } catch (err) {
      throw (err);
    }
  }

  const sendMFACode = async (email: string) => {
    try {
      const response = await Auth.resendSignUp(email);
      return response;
    } catch (err) {
      throw err;
    }
  }

  const register = async (registration: any) => {
    const {email, password, fName, lName} = registration;
    let attributes:any = {
      given_name: fName,
      family_name: lName,
      'custom:account_type': "Employee",
    }


    try {
      const response = await Auth.signUp({
        username: email,
        password: password,
        attributes
      });
      return response;
    } catch (err) {
      throw err;
    }
  }

  const fetchDevices = async () => {
    try {
      const result = await Auth.fetchDevices();
      return result
    } catch (err) {
      console.log('Error fetching devices', err);
    }
  }

  return (
    <AccountContext.Provider value={{login, forgotPassword, verifyMFACode, register, completeUserPassword, sendMFACode, logout, fetchDevices}}>
      {children}
    </AccountContext.Provider>
  )
}

export { AccountProvider, AccountContext}
