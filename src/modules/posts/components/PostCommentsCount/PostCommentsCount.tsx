import { Button } from '../../../../components/Button';

import { useComments } from '../../../comments/hooks/useComments';

import type { IPost } from '../../types';

export interface PostCommentsCountProps {
    postId: IPost['id'];
    onClick: () => void;
}

export const PostCommentsCount = ({ postId, onClick }: PostCommentsCountProps) => {
    const comments = useComments(postId);

    const count = comments?.length ?? 0;

    return (
        <Button type="button" disabled={count === 0} onClick={onClick}>
            Comments: {count}
        </Button>
    );
};
