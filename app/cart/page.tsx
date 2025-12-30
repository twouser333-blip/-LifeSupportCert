"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

                <div className="flex flex-col items-center justify-center py-20 bg-[var(--card)] border border-[var(--border)] rounded-2xl border-dashed">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                        <ShoppingCart className="w-10 h-10 text-[var(--muted-foreground)]" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
                    <p className="text-[var(--muted-foreground)] mb-8">
                        Looks like you haven't added any certifications yet.
                    </p>
                    <Link href="/">
                        <Button size="lg">
                            Browse Courses <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
