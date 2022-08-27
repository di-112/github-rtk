import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootStore} from "../store";
import {countSlice} from "../store/count/count.slice";
import {bindActionCreators} from "@reduxjs/toolkit";
import {usersSlice} from "../store/users/users.slice";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector

const actions = {
    ...countSlice.actions,
    ...usersSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actions, dispatch)
}
