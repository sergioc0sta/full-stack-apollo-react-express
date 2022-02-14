import React from 'react';
import TableStyle from './TableStyle';
import { useQuery } from '@apollo/client';
import getAllUsers from './queries/getAllUsers'

const Table = () => {
    const { data, loading, error } = useQuery(getAllUsers);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return null;
    }

    const users = data?.getAllUsers;

    return (
        <TableStyle>
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Birthday</th>
            </tr>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.surName}</td>
                    <td>{user?.birthday?.slice(0, 10)}</td>
                </tr>
            ))}
        </TableStyle>
    );
};

export default Table;
