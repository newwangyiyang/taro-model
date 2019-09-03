import { INITUSER, UPDATEUSER, DELUSER } from "../constants/user";

export const inituser = (user: object) => ({type: INITUSER, user})

export const updateuser = (user: object) => ({type: UPDATEUSER, user})

export const deluser = () => ({type: DELUSER})