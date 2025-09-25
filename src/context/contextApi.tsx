'use client'

import { getData } from "@/service/serviceData";
import { User } from "@/types/user";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface UserContextType {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export const userContext = createContext<UserContextType | undefined>(undefined)

const UserProvider = ({children}:{children:ReactNode}) => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(()=> {
    const fetchData = async() =>{
      const res = await getData()
      setUsers(res)
    }
    fetchData()
  },[])
  return (
    <userContext.Provider value={{users,setUsers}}>
      {children}
    </userContext.Provider>    
  );
}

export default UserProvider;