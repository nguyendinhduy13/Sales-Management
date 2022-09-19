import { fetchUser } from "../ultils/FetchLocalStorage";

const userInfo=fetchUser()


export const initialState={
        user:userInfo,
}