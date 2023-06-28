import { styled } from '../../../../config/stitches';

import type { IPost } from '../../types';

import { useTogglePostComments } from '../../hooks/useTogglePostComments';

import { PostAuthor } from '../PostAuthor';
import { PostCommentsCount } from '../PostCommentsCount';
import { PostComments } from '../PostComments';

const PostWrapper = styled('article', {
    borderBottom: '1px solid black',
});

const PostMenu = styled('menu', {
    paddingLeft: 0,
});

export const Post = ({ id, title, body, userId }: IPost) => {
    const { show, toggle } = useTogglePostComments(id);

    return (
        <PostWrapper>
            <h2>{title}</h2>
            <p>{body}</p>
            <PostMenu>
                <PostAuthor id={userId} />
                <PostCommentsCount postId={id} onClick={toggle} />
            </PostMenu>
            {show ? <PostComments postId={id} /> : null}
        </PostWrapper>
    );
};
