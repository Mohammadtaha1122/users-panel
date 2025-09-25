import { User } from "@/types/user"
import axios from "axios"

export const getData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users/")
    return res.data.users
  } catch (error) {
    console.log("get error:",error)
  }
}
export const addUser = async (user: User) => {
  try {
    const res = await axios.post("https://dummyjson.com/users/add",user)
    return res.data.users
  } catch (error) {
    console.log("post error:",error)
  }
}
export const updateUser = async (id: number, user: User) => {
  try {
    const res = await axios.put(`https://dummyjson.com/users/${id}`,user)
    return res.data.users
  } catch (error) {
    console.log("put error:",error)
  }
}
export const removeUser = async (id: number) => {
  try {
    const res = await axios.delete(`https://dummyjson.com/users/${id}`)
    return res.data.users
  } catch (error) {
    console.log("delete error:",error)
  }
}
