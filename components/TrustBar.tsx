"use client";

import { Check } from "lucide-react";

const compliances = [
    "AHA Guidelines 2025",
    "OSHA Compliant",
    "ECC Guidelines",
    "ILCOR Standards",
    "National Board Accepted",
    "99% Employer Acceptance",
    "Joint Commission Compliant",
    "Dental Board Approved"
];

export function TrustBar() {
    return (
        <div className="bg-[var(--secondary)] border-y border-[var(--border)] py-6 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-[var(--muted-foreground)] mb-4 uppercase tracking-wider">
                    Trusted by Organizations Worldwide
                </p>

                {/* Simple Marquee simulation for now, or just a grid */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {compliances.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[var(--foreground)] font-medium text-sm">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
