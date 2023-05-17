import React from "react";
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id:'u1',
            name:'Suruchi Kumari',
            image:
            'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
            places:3
        },
        {
            id:'u2',
            name:'Rohan Kumar',
            image:
            'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
            places:3
        }

    ]
    return <UsersList items={USERS}/>;
}

export default Users;