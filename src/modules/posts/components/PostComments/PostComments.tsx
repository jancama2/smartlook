import { styled } from '../../../../config/stitches';

import { useComments } from '../../../comments/hooks/useComments';

import type { IPost } from '../../types';

const CommentsWrapper = styled('section', {
    marginLeft: '1rem',
});

const Comment = styled('article', {
    paddingLeft: '1rem',

    borderLeft: '2px solid lightgrey',
});

const CommentHeading = styled('h4', {
    marginBottom: '0.5rem',
});

const CommentBody = styled('p', {
    marginTop: 0,
});

const CommentAuthor = styled('strong', {
    fontSize: '0.875rem',
});

export interface PostCommentsProps {
    postId: IPost['id'];
}

export const PostComments = ({ postId }: PostCommentsProps) => {
    const comments = useComments(postId);

    if (comments) {
        return (
            <CommentsWrapper>
                {comments.map(({ id, name, body, email }) => (
                    <Comment key={id}>
                        <CommentHeading>{name}</CommentHeading>
                        <CommentBody>
                            {body} / <CommentAuthor>@{email}</CommentAuthor>
                        </CommentBody>
                    </Comment>
                ))}
            </CommentsWrapper>
        );
    }

    return null;
};
