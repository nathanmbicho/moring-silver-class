'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import DialogForm from './components/DialogForm';
import PostCard from './components/PostCard';
import { addPost, editPost } from './store/posts/postsSlice';
import { useAppSelector, useAppDispatch } from './store/hooks';

export default function App() {
    const posts = useAppSelector((state) => state.posts.posts);
    const dispatch = useAppDispatch();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        authorName: '',
        authorRole: '',
    });
    const [editPostId, setEditPostId] = useState<number | null>(null);

    const openForm = () => {
        setFormData({
            title: '',
            description: '',
            category: '',
            authorName: '',
            authorRole: '',
        });
        setEditPostId(null);
        setDialogOpen(true);
    };

    const closeForm = () => {
        setDialogOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (editPostId !== null) {
            dispatch(editPost({ ...formData, id: editPostId }));
        } else {
            dispatch(addPost(formData));
        }
        closeForm();
    };

    const handleEdit = (id: null | number) => {
        const postToEdit = posts.find((post) => post.id === id) ?? {
            title: '',
            description: '',
            category: '',
            authorName: '',
            authorRole: '',
        };
        setFormData(postToEdit);
        setEditPostId(id);
        setDialogOpen(true);
    };

    return (
        <div className="container mx-auto max-w-7xl p-20">
            <Header
                title="Moringa Portfolio blog - WK2"
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
                            key={post.id}
                            post={post}
                            onEdit={handleEdit}
                        />
                    ))}
                </div>
            )}

            <DialogForm
                open={dialogOpen}
                onClose={closeForm}
                onSubmit={handleSubmit}
                formData={formData}
                onChange={handleChange}
            />
        </div>
    );
}