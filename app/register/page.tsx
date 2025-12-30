"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus, Check } from "lucide-react";

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="flex min-h-[calc(100vh-64px)] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Value Prop */}
                    <div className="hidden lg:block space-y-8">
                        <h1 className="text-4xl font-extrabold tracking-tight">
                            Create Your Free Account
                        </h1>
                        <p className="text-xl text-[var(--muted-foreground)]">
                            Join over 1 million students and get certified today. No credit card required to start.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Pay ONLY after you pass",
                                "Unlimited exam retakes",
                                "Instant PDF card download",
                                "Nationally accepted certification"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full max-w-md mx-auto bg-[var(--card)] p-8 rounded-2xl shadow-xl border border-[var(--border)]">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold">Start Training Now</h2>
                            <p className="text-sm text-[var(--muted-foreground)]">It takes less than a minute.</p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">First Name</label>
                                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Jane" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Last Name</label>
                                    <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email Address</label>
                                <input type="email" className="w-full px-3 py-2 border rounded-md" placeholder="jane@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Create Password</label>
                                <input type="password" className="w-full px-3 py-2 border rounded-md" placeholder="••••••••" />
                            </div>

                            <Button className="w-full py-6 text-lg" size="lg">
                                Create Account & Start Course
                            </Button>

                            <p className="text-xs text-center text-[var(--muted-foreground)] mt-4">
                                By clicking the button above, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
