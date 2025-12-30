"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
    {
        id: 1,
        title: "AHA 2025 CPR Update: Key Changes You Need to Know",
        excerpt: "The American Heart Association has released new guidelines for CPR and ECC. Here is a breakdown of the critical changes for healthcare providers and lay responders.",
        category: "Clinical Updates",
        author: "Dr. Sarah Mitchell",
        date: "Dec 15, 2025"
    },
    {
        id: 2,
        title: "What is Hypoxia? Symptoms and Stages",
        excerpt: "Understanding the four stages of hypoxia is crucial for effective emergency response. Learn to identify the early signs of oxygen deprivation.",
        category: "Pathophysiology",
        author: "James Wilson, RN",
        date: "Nov 28, 2025"
    },
    {
        id: 3,
        title: "Choking First Aid: Action Steps for Infants and Children",
        excerpt: "Choking is a leading cause of injury in children. Review the back slap and chest thrust maneuvers that can save a life in seconds.",
        category: "Common Emergencies",
        author: "Pediatric Safety Team",
        date: "Nov 10, 2025"
    },
    {
        id: 4,
        title: "World Heart Day: 5 Prevention Habits",
        excerpt: "Cardiovascular disease remains the top killer globally. Adopt these 5 simple habits to improve your heart health today.",
        category: "Health & Wellness",
        author: "Editorial Staff",
        date: "Oct 29, 2025"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">Resource Center & Blog</h1>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Stay updated with the latest life-saving techniques, medical guidelines, and health tips from our experts.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post) => (
                        <article key={post.id} className="flex flex-col bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-48 bg-slate-100 relative">
                                {/* Placeholder for Blog Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-[var(--muted-foreground)] mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[var(--primary)] cursor-pointer">
                                    {post.title}
                                </h2>
                                <p className="text-[var(--muted-foreground)] text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Button variant="link" className="px-0 text-[var(--primary)] font-bold">
                                        Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

        </main>
    );
}
