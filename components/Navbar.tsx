"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, FileCheck } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white font-bold">
                            +
                        </div>
                        <span className="font-bold text-xl tracking-tight text-[var(--foreground)]">
                            LifeSupport<span className="text-[var(--primary)]">Cert</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/courses" className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                            All Courses
                        </Link>
                        <Link href="/groups" className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                            Group Discount
                        </Link>
                        <Link href="/verify" className="flex items-center gap-1 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                            <FileCheck className="w-4 h-4" />
                            Verify Certificate
                        </Link>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="gap-2">
                                <User className="w-4 h-4" />
                                Login
                            </Button>
                        </Link>
                        <Link href="/cart">
                            <Button size="sm" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                                <ShoppingCart className="w-4 h-4" />
                                Cart (0)
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-[var(--foreground)] hover:text-[var(--primary)]">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
