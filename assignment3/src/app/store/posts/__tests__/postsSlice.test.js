import postsReducer, { addPost, editPost } from '../postsSlice';

describe('posts reducer', () => {
    const initialState = {
        posts: [],
    };

    it('should handle initial state', () => {
        expect(postsReducer(undefined, { type: 'unknown' })).toEqual({
            posts: expect.any(Array),
        });
    });

    it('should handle adding a new blof post', () => {
        const newPost = {
            title: 'New Test Post',
            description: 'Its Test Description',
            category: 'Testing',
            authorName: 'Author Nate',
            authorRole: 'Tester',
        };

        const action = addPost(newPost);
        const state = postsReducer(initialState, action);

        expect(state.posts).toHaveLength(1);
        expect(state.posts[0]).toEqual({
            ...newPost,
            id: expect.any(Number),
            createdAt: expect.any(String),
        });
    });

    it('should handle editing a blog post', () => {
        const initialStateWithPost = {
            posts: [{
                id: 1,
                title: 'How to become a dev at 2024',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                category: 'Last Year',
                authorName: 'Kasongo',
                authorRole: 'Tester',
                createdAt: '2024-01-01',
            }],
        };

        const updatedPost = {
            id: 1,
            title: 'How to become a dev at 2025',
            description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            category: 'New Year',
            authorName: 'Mobali na ngai',
            authorRole: 'Senior Tester',
            createdAt: '2025-01-01',
        };

        const action = editPost(updatedPost);
        const state = postsReducer(initialStateWithPost, action);

        expect(state.posts[0]).toEqual(updatedPost);
    });
});