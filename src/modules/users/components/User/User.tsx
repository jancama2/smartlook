import { EnvelopeClosedIcon, Link2Icon } from '@radix-ui/react-icons';

import { styled } from '../../../../config/stitches';

import type { IUser } from '../../types';

import { useUser } from '../../hooks/useUser';

const UserHeading = styled('h2', {
    marginTop: 0,
    marginBottom: '0.4em',
});

const LinkWrapper = styled('span', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    marginBottom: '0.25rem',
});

export interface UserProps {
    id: IUser['id'];
}

export const User = ({ id }: UserProps) => {
    const user = useUser(id);

    if (user) {
        return (
            <section>
                <UserHeading>{user.name}</UserHeading>
                <address>
                    <LinkWrapper>
                        <Link2Icon />
                        <a href={user.website}>{user.website}</a>
                    </LinkWrapper>
                    <LinkWrapper>
                        <EnvelopeClosedIcon />
                        <a href={`mailto:${user.email}`}>{user.email}</a>
                    </LinkWrapper>
                    {user.address.suite} <br />
                    {user.address.street} <br />
                    {user.address.zipcode}, {user.address.city} <br />
                </address>
            </section>
        );
    }

    return null;
};
