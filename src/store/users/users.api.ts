import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/users.models";

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    reducerPath: 'users/api',
    endpoints: build => ({
        getUsers: build.query<IUser[], void>({
                query: () => '/users'
            }
        )
    }),
})

export const {useGetUsersQuery} = usersApi

