import { useState, useEffect } from 'react';
import { firestore } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc, getDocs, serverTimestamp } from 'firebase/firestore';
import { Post, PostFormData } from '../types';

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Fetch posts from Firestore
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const querySnapshot = await getDocs(collection(firestore, "posts"));
            const postsData: Post[] = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt:new Date( Object(doc.data().createdAt).seconds * 1000).toString(),
            })) as Post[];

            setPosts(postsData); // Set posts to local state
        } catch (error) {
            console.error("Error fetching posts: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle adding a new post
    const addPost = async (newPostData: PostFormData) => {
        const { id, ...postDataWithoutId } = newPostData; // removing undefined id when creating
        const newPost = {
            ...postDataWithoutId,
            createdAt: serverTimestamp(),
        };
        console.log(id)
        try {
            setIsLoading(true);
            // adding new post to Firestore
            const docRef = await addDoc(collection(firestore, "posts"), newPost);
            await fetchPosts(); // reload the posts
            console.log("Post added successfully:", docRef.id);
        } catch (error) {
            console.error("Error adding post: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Handle editing a post
    const editPost = async (id: string, updatedPostData: PostFormData) => {
        const postRef = doc(firestore, 'posts', id);
        //remove createdAt from updating
        const { createdAt, ...updatePostDataWithoutCreatedAt } = updatedPostData;
        const updatedPost = { ...updatePostDataWithoutCreatedAt, updatedAt: serverTimestamp() };

        console.log(createdAt)
        try {
            await updateDoc(postRef, updatedPost);

            setPosts(posts.map(post =>
                post.id === id ? { ...post, ...updatedPost } : post
            ));
            console.log('Post updated successfully');
        } catch (error) {
            console.error('Error updating post: ', error);
        }
    };

    return {
        posts,
        isLoading,
        addPost,
        editPost,
    };
};

export default usePosts;
