"use client";

import { Button } from "./ui/button";
import { CheckCircle2, ShieldCheck, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-[var(--accent)] to-transparent opacity-50 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--primary)] text-sm font-medium">
                            <ShieldCheck className="w-4 h-4" />
                            Nationally Accepted & OSHA Compliant
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                            Get Certified Online. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-400">
                                Pay Only After You Pass.
                            </span>
                        </h1>

                        <p className="text-lg text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                            Join over 1 million students who trust our AHA-trained instructors for their life support needs.
                            Instant certification, official wallet card, and 100% risk-free.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-blue-500/20">
                                Start Training for Free
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                View All Courses
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-[var(--muted-foreground)] pt-4">
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Instant PDF Card</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Valid 2 Years</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Money-Back Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual/Image Placeholder */}
                    <div className="relative hidden lg:block">
                        {/* We will simulate a high-quality image container or card mockup here */}
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-[var(--border)] p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center justify-between mb-6 border-b pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">LC</div>
                                    <div>
                                        <div className="font-bold text-[var(--foreground)]">LifeSupport Certification</div>
                                        <div className="text-xs text-[var(--muted-foreground)]">ID: 9483-2921-22</div>
                                    </div>
                                </div>
                                <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                                    Active
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                            </div>

                            <div className="mt-8 flex justify-between items-end">
                                <div>
                                    <div className="text-xs text-[var(--muted-foreground)]">Valid Through</div>
                                    <div className="font-semibold">Dec 2027</div>
                                </div>
                                <Download className="w-6 h-6 text-[var(--primary)]" />
                            </div>
                        </div>

                        {/* Background blobs */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                    </div>
                </div>
            </div>
        </section>
    );
}
