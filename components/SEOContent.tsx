"use client";

import { Shield, BookOpen, Globe } from "lucide-react";

export function SEOContent() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
                            Why Choose Our ECC & OSHA Compliant Training?
                        </h2>
                        <p className="text-[var(--muted-foreground)] leading-relaxed">
                            Our training programs are rigorously designed to meet the highest standards of emergency cardiovascular care.
                            We strictly adhere to the guidelines set forth by the **American Heart Association (AHA)** and the **International Liaison Committee on Resuscitation (ILCOR)**.
                            Whether you are a healthcare professional requiring BLS or a teacher needing First Aid, our curriculum ensures you are prepared for real-world emergencies.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="flex gap-4">
                            <Shield className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">Nationally Accepted</h3>
                                <p className="text-sm text-[var(--muted-foreground)]">
                                    Our certifications are recognized across all 50 states and are accepted by 99% of employers, including hospitals, government agencies, and schools.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Globe className="w-8 h-8 text-[var(--primary)] flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-lg mb-2">2020-2025 Guidelines</h3>
                                <p className="text-sm text-[var(--muted-foreground)]">
                                    We constantly update our curriculum to match the latest scientific recommendations from the ECC, ensuring you learn the most current life-saving techniques.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
