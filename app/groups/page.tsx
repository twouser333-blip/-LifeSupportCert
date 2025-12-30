"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, BarChart, Download, CheckCircle2 } from "lucide-react";

export default function GroupPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-[var(--primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 rounded-l-full transform translate-x-1/4"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Simplify Compliance Training for Your Team
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Manage certifications for your entire workforce with our powerful Employer Dashboard.
                            Volume discounts, instant reporting, and 100% online flexibility.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-white text-[var(--primary)] hover:bg-blue-50 h-14 px-8 text-lg font-bold">
                                Create Corporate Account
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-lg">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4">Why Organizations Choose Us</h2>
                        <p className="text-[var(--muted-foreground)]">Streamline your safety training with tools designed for administrators.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-[var(--primary)]">
                                <BarChart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">Real-Time Tracking</h3>
                            <p className="text-[var(--muted-foreground)]">
                                Monitor progress, view exam results, and see who is certified in real-time from your dedicated dashboard.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-[var(--primary)]">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">Bulk Discounts</h3>
                            <p className="text-[var(--muted-foreground)]">
                                Save up to 40% when you purchase credits in bulk. Credits never expire and can be assigned to anyone.
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-[var(--primary)]">
                                <Download className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold">Instant Certificates</h3>
                            <p className="text-[var(--muted-foreground)]">
                                Download all employee certificates in one click for OSHA audits or internal compliance reviews.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Tiers for Groups */}
            <section className="py-20 bg-[var(--secondary)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Group Discount Rates</h2>

                    <div className="bg-white rounded-2xl shadow-sm border border-[var(--border)] overflow-hidden max-w-4xl mx-auto">
                        <div className="grid grid-cols-3 bg-slate-50 p-4 font-bold text-sm uppercase tracking-wider text-[var(--muted-foreground)] border-b border-[var(--border)]">
                            <div className="text-center">Group Size</div>
                            <div className="text-center">Discount</div>
                            <div className="text-center">Price Per Student</div>
                        </div>

                        {[
                            { size: "5-9 Learners", discount: "10% OFF", price: "$13.45" },
                            { size: "10-19 Learners", discount: "20% OFF", price: "$11.95" },
                            { size: "20-49 Learners", discount: "30% OFF", price: "$10.45" },
                            { size: "50+ Learners", discount: "Custom Quote", price: "Contact Us" },
                        ].map((tier, idx) => (
                            <div key={idx} className="grid grid-cols-3 p-6 border-b border-[var(--border)] last:border-0 items-center hover:bg-blue-50/50 transition-colors">
                                <div className="text-center font-medium">{tier.size}</div>
                                <div className="text-center text-green-600 font-bold">{tier.discount}</div>
                                <div className="text-center font-bold text-[var(--primary)]">{tier.price}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" className="h-12 px-8">Get Started with a Group Account</Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
