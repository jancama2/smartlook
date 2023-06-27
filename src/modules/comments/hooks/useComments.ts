import { useQuery } from '@tanstack/react-query';

import { entityFetcher } from '../../../utils/entities';

import { IPost } from '../../posts/types';

import { IComment } from '../types';

const getComments = entityFetcher<IComment[]>(({ queryKey }) => `/posts/${queryKey[0]}/comments`);

export const useComments = (id: IPost['id']) => {
    const query = useQuery({ queryKey: [id, 'Comments'], queryFn: getComments });

    return query.data;
};
