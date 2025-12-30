"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-[var(--card)] p-8 rounded-2xl shadow-xl border border-[var(--border)]">
                    <div className="text-center">
                        <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-[var(--primary)]">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--foreground)]">
                            Welcome back
                        </h2>
                        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                            Sign in to access your course dashboard
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[var(--primary)] sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full rounded-b-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[var(--primary)] sm:text-sm sm:leading-6"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--foreground)]">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-[var(--primary)] hover:text-blue-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button className="w-full flex justify-center py-3">Sign in</Button>
                        </div>
                    </form>

                    <div className="text-center text-sm">
                        <span className="text-[var(--muted-foreground)]">Don't have an account? </span>
                        <Link href="/register" className="font-bold text-[var(--primary)] hover:underline">
                            Start Training for Free
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
