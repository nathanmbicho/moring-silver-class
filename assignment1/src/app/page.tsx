"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import DialogForm from './components/DialogForm';
import PostCard from './components/PostCard';

export default function App() {
    const [posts, setPosts] = useState([
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
    ]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        authorName: '',
        authorRole: '',
    });

    const [editPostId, setEditPostId] = useState<string | number | null>(null);

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
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === editPostId ? { ...post, ...formData } : post
                )
            );
        } else {
            setPosts([
                ...posts,
                {
                    id: Date.now(),
                    ...formData,
                    datetime: new Date().toLocaleString(),
                },
            ]);
        }
        closeForm();
    };

    const handleEdit = (id: string | number) => {
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
        <div className="container mx-auto max-w-7xl                                                                                                                                                                                                                                                                                                                                     p-20">
            <Header
                title="Moringa Portfolio blog"
                description="Share with us your exiting projects you are working on."
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
