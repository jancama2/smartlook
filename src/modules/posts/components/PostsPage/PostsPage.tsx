import { usePosts } from '../../hooks/usePosts';

import { Post } from '../Post';

export const PostsPage = () => {
    const posts = usePosts();

    if (posts) {
        return (
            <section>
                {posts.map(({ id, ...props }) => (
                    <Post key={id} id={id} {...props} />
                ))}
            </section>
        );
    }

    return null;
};
