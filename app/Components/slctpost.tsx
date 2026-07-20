"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBookmark, FaCircle, FaSyncAlt, FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";

interface Post {
    id: number;
    category: string;
    categoryColor: string;
    title: string;
    description: string;
    image: string;
    author: string;
    authorAvatar: string;
    date: string;
}

const allPosts: Post[] = [
    {
        id: 1,
        category: "Technology",
        categoryColor: "bg-blue-600 text-white",
        title: "12 worst types of business accounts you follow on Twitter",
        description:
            "He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to. Place no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky.",
        image: "/blogzine-react/assets/01-CaU2RBei.jpg",
        author: "Samuel",
        authorAvatar: "/blogzine-react/assets/01-CWIxERXS.jpg",
        date: "Apr 22, 2022",
    },
    {
        id: 2,
        category: "Travel",
        categoryColor: "bg-slate-900 text-white",
        title: "Dirty little secrets about the business industry",
        description:
            "Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky. Express besides it present if at an opinion visitor. Interested has all Devonshire difficulty gay assistance joy.",
        image: "/blogzine-react/assets/06-BwByrckG.jpg",
        author: "Dennis",
        authorAvatar: "/blogzine-react/assets/02-DzqRwTj1.jpg",
        date: "Jan 22, 2022",
    },
];

export default function TodayHighlights() {
    // State to keep track of the currently selected post for detail view
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    const mainPosts = allPosts.slice(0, 2);
    const recentPosts = allPosts;

    // Agar koi post select ho chuki hai, toh detail view dikhao
    if (selectedPost) {
        return (
            <section className="relative py-10 bg-white">
                <div className="w-full px-[10%]">
                    {/* Back Button */}
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 mb-6 transition-colors"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Highlights
                    </button>

                    {/* Detailed Post View */}
                    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-6 sm:p-10">
                        {/* Category */}
                        <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded mb-4 ${selectedPost.categoryColor}`}>
                            <FaCircle className="mr-1.5 text-[6px]" /> {selectedPost.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-black mb-4 leading-tight">
                            {selectedPost.title}
                        </h1>

                        {/* Author & Date info */}
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                            <div className="flex items-center space-x-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image src={selectedPost.authorAvatar} alt={selectedPost.author} fill className="object-cover" />
                                </div>
                                <span className="font-medium text-black">{selectedPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <FaCalendarAlt className="text-gray-400 text-xs" />
                                <span>{selectedPost.date}</span>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative h-72 sm:h-96 w-full rounded-lg overflow-hidden mb-8 shadow-md">
                            <Image src={selectedPost.image} alt={selectedPost.title} fill className="object-cover" />
                        </div>

                        {/* Description / Content */}
                        <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                            <p>{selectedPost.description}</p>
                            <p>
                                Additional detailed content goes here. Readers can thoroughly read the complete article text, insights, and expert opinions regarding this topic within the same single component view.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Default Grid & Sidebar View
    return (
        <section className="relative py-10 bg-white">
            <div className="w-full px-[10%]">
                <div className="flex flex-wrap -mx-4">
                    {/* Left/Main Column */}
                    <div className="w-full lg:w-9/12 px-4">
                        <div className="mb-6">
                            <h2 className="m-0 flex items-center text-2xl font-bold text-black">
                                <FaBookmark className="mr-2 text-blue-600" /> Today&apos;s top highlights
                            </h2>
                            <p className="text-gray-600 mt-1">Latest breaking news, pictures, videos, and special reports</p>
                        </div>

                        {/* Grid Posts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {mainPosts.map((post) => (
                                <div
                                    key={post.id}
                                    onClick={() => setSelectedPost(post)}
                                    className="card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow"
                                >
                                    <div className="relative group">
                                        <div className="relative h-56 w-full">
                                            <Image src={post.image} alt={post.title} fill className="object-cover" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                                            <div className="w-auto">
                                                <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded mb-2 ${post.categoryColor}`}>
                                                    <FaCircle className="mr-1.5 text-[6px]" /> {post.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 flex flex-col flex-grow justify-between">
                                        <div>
                                            <h4 className="card-title font-bold text-lg mt-1 mb-2 text-black hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </h4>
                                            <p className="card-text text-gray-600 text-sm line-clamp-3">{post.description}</p>
                                        </div>

                                        <ul className="flex items-center space-x-4 text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100">
                                            <li>
                                                <div className="flex items-center space-x-2">
                                                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                                        <Image src={post.authorAvatar} alt={post.author} fill className="object-cover" />
                                                    </div>
                                                    <span className="font-medium text-black">by {post.author}</span>
                                                </div>
                                            </li>
                                            <li>{post.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        <div className="text-center mt-10">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-6 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md font-medium transition-colors"
                            >
                                Load more post <FaSyncAlt className="ml-2 text-sm" />
                            </button>
                        </div>
                    </div>

                    {/* Right Sidebar Column */}
                    <div className="w-full lg:w-3/12 px-4 mt-10 lg:mt-0">
                        <div>
                            <h4 className="font-bold text-lg mb-3 text-black">Recent post</h4>
                            <div className="space-y-3">
                                {recentPosts.map((post) => (
                                    <div
                                        key={post.id}
                                        onClick={() => setSelectedPost(post)}
                                        className="flex items-center space-x-3 bg-white p-2 rounded-lg border border-gray-200 shadow-sm relative group cursor-pointer hover:border-blue-400 transition-colors"
                                    >
                                        <div className="relative w-20 h-16 flex-shrink-0 rounded overflow-hidden">
                                            <Image src={post.image} alt={post.title} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h6 className="text-xs font-bold leading-snug text-black group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h6>
                                            <div className="text-[11px] text-gray-400 mt-1">{post.date}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}