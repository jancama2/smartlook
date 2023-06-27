import { Link } from 'wouter';
import { useUser } from '../../../users/hooks/useUser';
import type { IUser } from '../../../users/types';

export interface UserProps {
    id: IUser['id'];
}

export const PostAuthor = ({ id }: UserProps) => {
    const user = useUser(id);

    if (user) {
        return (
            <>
                <strong>
                    <Link to={`/user/${id}`}>{user.name}</Link>
                </strong>
                {' | '}
            </>
        );
    }

    return null;
};
