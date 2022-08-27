import React, {useEffect} from 'react';
import {useActions, useAppSelector} from "../hooks/store";
import {useGetUsersQuery} from "../store/users/users.api";

const Home = () => {

    const {value, users} = useAppSelector(state => ({
        value: state.count.value,
        users: state.users.users
    }))

    const {increment, decrement, setUser} = useActions()

    const {data, isLoading, isError} = useGetUsersQuery()

    useEffect(()=>{
        if(data) {
            setUser(data)
        }
    }, [data])

    if(isError) return <div>Error...</div>

    if(isLoading) return <div>Loading...</div>

    return (
        <div>
          Home
            <div className={'flex'}>
                {value}
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <div>
                <ul>
                    {users.map(user => <li>{`${user.id}.${user.name}`}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default Home;