'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import DialogForm from '../components/DialogForm';
import PostCard from '../components/PostCard';
import usePosts from '../store/posts/postsSlice';
import {Post} from "@/app/store/types";

export default function App() {
    const { editPost, addPost, posts, isLoading } = usePosts();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const openForm = (post: Post | null) => {
        setSelectedPost(post); // open form with post data
        setDialogOpen(true);
    };

    const closeForm = () => {
        setDialogOpen(false);
        setSelectedPost(null); // reset the selectedPost when closing
    };


    // Loading - waiting for firebase data to load
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto max-w-7xl py-10 px-20">
            <Header
                title="Moringa Portfolio blog - WK3"
                description="Share with us your exciting projects you are working on."
                onAddNew={openForm}
            />

            {posts.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                    No available blogs
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {posts.map((post) => (
                        <PostCard
                            key={Object(post).id}
                            post={post}
                            onEdit={() => openForm(post)}
                        />
                    ))}
                </div>
            )}

            <DialogForm
                open={dialogOpen}
                onClose={closeForm}
                selectedPost={selectedPost}
                onSubmit={(updatedPostData: Post) => {
                    if (selectedPost && selectedPost.id) {
                        editPost(selectedPost.id, updatedPostData);
                    } else {
                        addPost(updatedPostData);
                    }
                    closeForm();
                }}
            />
        </div>
    );
}
