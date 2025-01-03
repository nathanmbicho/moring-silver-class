'use client'

import Image from "next/image";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Home() {

    const [open, setOpen] = useState(false)


    const posts = [
        {
            id: 1,
            title: 'Boost your conversion rate',
            description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            datetime: 'Jan 19, 2023  11:15 AM',
            category: 'Marketing',
            author: {
                name: 'Ken Foster',
                role: 'Co-Founder / CTO',
            },
        },
        {
            id: 2,
            title: 'How to use fetch to get api data',
            description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            datetime: 'Mar 16, 2020 02:20 PM',
            category: 'Education',
            author: {
                name: 'Mark Calton',
                role: 'Senior Lecturer',
            },
        },
    ]

    const getGeneratedImage = (authorName: string) => {
        return "https://ui-avatars.com/api/?name="+authorName+"&size=128&bold=true&background=random";

    }

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        datetime: '',
        author: {
            first_name: '',
            last_name: '',
            role: '',
        }
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const keys = name.split('.');

        setFormData((prev) => {
            const updated = {...prev};
            let current = updated;

            for (let i = 0; i < keys.length - 1; i++) {
                current = current[keys[i]];
            }
            current[keys[keys.length - 1]] = value;

            return updated;
        });
    }

    const handleAddNewBlogSubmit = () => {
        console.log(formData)
    }

  return (
      <><Dialog open={open} onClose={setOpen} className="relative z-10">
          <DialogBackdrop
              transition
              className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"/>

          <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <DialogPanel
                          transition
                          className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                      >
                          <TransitionChild>
                              <div
                                  className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                                  <button
                                      type="button"
                                      onClick={() => setOpen(false)}
                                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                  >
                                      <span className="absolute -inset-2.5"/>
                                      <span className="sr-only">Close panel</span>
                                      <XMarkIcon aria-hidden="true" className="size-6"/>
                                  </button>
                              </div>
                          </TransitionChild>
                          <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                              <div className="px-4 sm:px-6">
                                  <DialogTitle className="text-base font-semibold text-gray-900">Add New Blog Post</DialogTitle>
                              </div>
                              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                  <form autoComplete="off" onSubmit={handleAddNewBlogSubmit}>
                                      <div className="border-b border-gray-900/10 pb-12">
                                          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                              <div className="col-span-full">
                                                  <label htmlFor="blog-title"
                                                         className="block text-sm/6 font-medium text-gray-900">
                                                      Blog Title
                                                  </label>
                                                  <div className="mt-2">
                                                      <input
                                                          id="blog-title"
                                                          name="blog.title"
                                                          value={formData.title}
                                                          onChange={handleInputChange}
                                                          type="text"
                                                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                      />
                                                  </div>
                                              </div>

                                              <div className="col-span-full">
                                                  <label htmlFor="blog-description"
                                                         className="block text-sm/6 font-medium text-gray-900">
                                                      Description
                                                  </label>
                                                  <div className="mt-2">
                                                      <textarea
                                                          id="blog-description"
                                                          name="blog.description"
                                                          value={formData.description}
                                                          onChange={handleInputChange}
                                                          rows={5}
                                                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                      ></textarea>
                                                  </div>
                                              </div>

                                              <div className="col-span-full">
                                                  <label htmlFor="blog-category"
                                                         className="block text-sm/6 font-medium text-gray-900">
                                                      Categories
                                                  </label>
                                                  <div className="mt-2 grid grid-cols-1">
                                                      <select
                                                          id="blog-category"
                                                          name="blog.category"
                                                          value={formData.category}
                                                          onChange={handleInputChange}
                                                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                      >
                                                          <option>Education</option>
                                                          <option>Marketing</option>
                                                          <option>Technology</option>
                                                          <option>Business</option>
                                                          <option>Self Improvement</option>
                                                          <option>Career Tips</option>
                                                      </select>
                                                      <ChevronDownIcon
                                                          aria-hidden="true"
                                                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                                      />
                                                  </div>
                                              </div>


                                              <div className="">
                                                  <label htmlFor="author-first-name"
                                                         className="block text-sm/6 font-medium text-gray-900">
                                                      Author First name
                                                  </label>
                                                  <div className="mt-2">
                                                      <input
                                                          id="author-first-name"
                                                          name="author.first-name"
                                                          value={formData.author.first_name}
                                                          onChange={handleInputChange}
                                                          type="text"
                                                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                      />
                                                  </div>
                                              </div>

                                              <div className="">
                                                  <label htmlFor="author-last-name"
                                                         className="block text-sm/6 font-medium text-gray-900">
                                                      Author Last name
                                                  </label>
                                                  <div className="mt-2">
                                                      <input
                                                          id="author.last-name"
                                                          name="author.last_name"
                                                          value={formData.author.last_name}
                                                          onChange={handleInputChange}
                                                          type="text"
                                                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                      />
                                                  </div>
                                              </div>

                                              <div className="col-span-full">
                                                  <label htmlFor="author-role"
                                                         className="block text-sm/6 font-medium text-gray-900">
                                                      Author Role
                                                  </label>
                                                  <div className="mt-2">
                                                      <input
                                                          id="author-role"
                                                          name="author.role"
                                                          value={formData.author.role}
                                                          onChange={handleInputChange}
                                                          type="text"
                                                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                      />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="mt-6 flex items-center justify-end gap-x-6">
                                          <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={() => setOpen(false)}>
                                              Cancel
                                          </button>
                                          <button
                                              type="submit"
                                              className="rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                          >
                                              Save
                                          </button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </DialogPanel>
                  </div>
              </div>
          </div>
      </Dialog>
          <div className="min-h-screen p-20">
              <main className="">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-5">
                      <div className="flex justify-between items-baseline">
                          <div className="mx-auto max-w-2xl lg:mx-0">
                          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Moringa
                                  Mini-Apps blog</h2>
                              <p className="mt-2 text-lg/8 text-gray-600">Learn how to create mini-apps in Moringa.</p>
                          </div>
                          <div>
                              <button className="bg-emerald-500 text-white px-6 py-3 font-bold rounded"
                                      type="button"
                                      onClick={() => setOpen(true)}>+ Add New Blog
                              </button>
                          </div>
                      </div>
                      <div
                          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                          {posts.map((post) => (
                              <article key={post.id}
                                       className="flex max-w-xl flex-col items-start justify-between bg-gray-50 border border-gray-100 rounded-md p-5">
                                  <div className="w-full flex justify-between items-center gap-x-4 text-xs">
                                      <span className="text-gray-500">
                                          Posted On: {post.datetime}
                                      </span>
                                      <span
                                          className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-600 bg-gray-200">
                                          {post.category}
                                      </span>
                                  </div>
                                  <div className="group relative">
                                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                          {post.title}
                                      </h3>
                                      <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 text-justify">{post.description}</p>
                                  </div>
                                  <div className="w-full flex justify-between items-baseline">
                                      <div>
                                          <div className="relative mt-8 flex items-center gap-x-4">
                                              <Image alt="" src={getGeneratedImage(post.author.name)}
                                                     className="rounded-full bg-gray-50" width="40" height="40"/>
                                              <div className="text-sm/6">
                                                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                                                  <p className="text-gray-600">{post.author.role}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="font-medium space-x-2">
                                          <button
                                              className="text-indigo-600 rounded bg-indigo-100 hover:text-white hover:bg-indigo-500 px-3">edit
                                          </button>
                                          <button
                                              className="text-red-600 rounded bg-red-100 hover:text-white hover:bg-red-500 px-3">delete
                                          </button>
                                      </div>
                                  </div>
                              </article>
                          ))}
                      </div>
                  </div>
              </main>
          </div>
      </>
  );
}
