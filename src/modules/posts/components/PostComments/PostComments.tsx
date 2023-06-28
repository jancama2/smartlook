import { styled } from '../../../../config/stitches';

import { useComments } from '../../../comments/hooks/useComments';

import type { IPost } from '../../types';

import { PostComment } from '../PostComment';

const CommentsWrapper = styled('section', {
    marginLeft: '1rem',
});

export interface PostCommentsProps {
    postId: IPost['id'];
}

export const PostComments = ({ postId }: PostCommentsProps) => {
    const comments = useComments(postId);

    if (comments) {
        return (
            <CommentsWrapper>
                {comments.map(({ id, ...comment }) => (
                    <PostComment key={id} id={id} {...comment} />
                ))}
            </CommentsWrapper>
        );
    }

    return null;
};
