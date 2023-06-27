import { useQuery } from '@tanstack/react-query';

import { entityFetcher } from '../../../utils/entities';

import { IPost } from '../types';

const getPosts = entityFetcher<IPost[]>('/posts');

export const usePosts = () => {
    const query = useQuery({ queryKey: ['posts'], queryFn: getPosts });

    return query.data;
};
