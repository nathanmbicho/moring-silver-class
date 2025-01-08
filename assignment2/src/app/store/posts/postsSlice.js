import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [
        {
            id: 1,
            title: 'Moringa Mini-Apps',
            description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            category: 'Technology',
            authorName: 'Mark Calton',
            authorRole: 'Tech Master',
            datetime: '2025-01-01 04:00 PM',
        },
        {
            id: 2,
            title: 'Exploring the World of AI',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            category: 'Technology',
            authorName: 'Nathan Mbicho',
            authorRole: 'Tech Blogger',
            datetime: '2025-01-03 10:00 AM',
        },
        {
            id: 3,
            title: 'How to become a dev at 2025',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            category: 'Learning',
            authorName: 'Kasongo Yeye',
            authorRole: 'Youtuber',
            datetime: '2024-12-23 8:30 PM',
        },
    ],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push({
                ...action.payload,
                id: Date.now(),
                datetime: new Date().toLocaleString(),
            });
        },
        editPost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
    },
});

export const { addPost, editPost } = postsSlice.actions;
export default postsSlice.reducer;