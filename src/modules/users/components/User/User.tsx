import type { IUser } from '../../types';

import { useUser } from '../../hooks/useUser';

export interface UserProps {
    id: IUser['id'];
}

export const User = ({ id }: UserProps) => {
    const user = useUser(id);

    if (user) {
        return (
            <span>
                <strong>{user.name}</strong>
            </span>
        );
    }

    return null;
};
