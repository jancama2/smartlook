import { IPost } from '../posts/types';

export interface IComment {
    id: number;
    name: string;
    body: string;
    email: string;
    postId: IPost['id'];
}
