import { useQuery } from '@tanstack/react-query';

import { entityFetcher } from '../../../utils/entities';

import { IUser } from '../types';

const getUser = entityFetcher<IUser>(({ queryKey }) => `/users/${queryKey[0]}`);

export const useUser = (id: IUser['id']) => {
    const query = useQuery({
        queryKey: [id, 'user'],
        queryFn: getUser,
    });

    return query.data;
};
