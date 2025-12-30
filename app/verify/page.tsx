"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Search, ShieldCheck } from "lucide-react";

export default function VerifyPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center space-y-8">

                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6">
                        <ShieldCheck className="w-8 h-8" />
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight">Verify Certification Status</h1>

                    <p className="text-[var(--muted-foreground)]">
                        Enter the unique Certificate ID found on the student's wallet card or digital certificate to verify its authenticity and status.
                    </p>

                    <div className="bg-[var(--card)] p-8 rounded-2xl shadow-lg border border-[var(--border)] mt-8">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="cert-id" className="sr-only">Certificate ID</label>
                            <input
                                type="text"
                                id="cert-id"
                                placeholder="Enter Certificate ID (e.g. 1928-4829-192)"
                                className="w-full h-14 px-4 rounded-lg bg-[var(--secondary)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-lg text-center tracking-widest"
                            />
                            <Button size="lg" className="h-14 w-full text-lg">
                                <Search className="w-5 h-5 mr-2" />
                                Verify Now
                            </Button>
                        </div>

                        <p className="mt-6 text-xs text-[var(--muted-foreground)]">
                            Verification confirms that the student has successfully passed the exam in accordance with AHA and ECC guidelines.
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
