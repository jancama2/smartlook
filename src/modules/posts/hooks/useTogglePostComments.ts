import { atom, useAtom } from 'jotai';

import { IPost } from '../types';

const togglePostComments = atom<IPost['id'] | null>(null);

export const useTogglePostComments = (id: IPost['id']) => {
    const [activeId, setActiveId] = useAtom(togglePostComments);

    return {
        show: activeId === id,
        toggle: () => {
            setActiveId(activeId === id ? null : id);
        },
    };
};
