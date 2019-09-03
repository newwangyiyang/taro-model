import { IStoreAction } from "@/utils/utils";
import { INITUSER, UPDATEUSER, DELUSER } from "../constants/user";

export interface UserStoreIF {
    name: string
    age: number | string
    sex: number | string
}
const INIT_STATE: UserStoreIF = {
    name: '',
    age: '',
    sex: 1
}
const user = (state = INIT_STATE, action: IStoreAction<UserStoreIF>) => {
    action.payload
    switch(action.type) {
        case INITUSER:
            return action.payload
        case UPDATEUSER:
            return action.payload
        case DELUSER:
            return {...INIT_STATE}
        default:
            return state
    }
}

export default user