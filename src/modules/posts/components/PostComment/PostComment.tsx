import { styled } from '../../../../config/stitches';

import type { IComment } from '../../../comments/types';

const Comment = styled('article', {
    '@md': {
        paddingLeft: '1rem',

        borderLeft: '2px solid',
        borderLeftColor: '$grey300',
    },
});

const CommentHeading = styled('h3', {
    marginBottom: '0.5rem',
});

const CommentBody = styled('p', {
    marginTop: 0,
});

const CommentAuthor = styled('strong', {
    fontSize: '0.875em',
});

export const PostComment = ({ name, body, email }: IComment) => (
    <Comment>
        <CommentHeading>{name}</CommentHeading>
        <CommentBody>
            {body} / <CommentAuthor>@{email}</CommentAuthor>
        </CommentBody>
    </Comment>
);
