import React from 'react';
import { TableStyle, DivStyle } from './TableStyle';
import { useQuery } from '@apollo/client';
import getAllUsers from './queries/getAllUsers';
import { useTranslation } from 'next-i18next';

const Table = () => {
    const { data, loading, error } = useQuery(getAllUsers);
    const { t } = useTranslation();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return null;
    }

    const users = data?.getAllUsers;

    return (
        <DivStyle>
            <TableStyle>
                <tr>
                    <th>{t('name')}</th>
                    <th>{t('country')}</th>
                    <th>{t('birthday')}</th>
                </tr>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.surName}</td>
                        <td>{user?.birthday?.slice(0, 10)}</td>
                    </tr>
                ))}
            </TableStyle>
        </DivStyle>
    );
};

export default Table;
