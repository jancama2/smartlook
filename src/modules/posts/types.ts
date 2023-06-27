import { IUser } from '../users/types';

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: IUser['id'];
}
