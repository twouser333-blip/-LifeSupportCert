"use client";

import { Star, Quote } from "lucide-react";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Kirk Estus",
        role: "Registered Nurse",
        content: "The lifetime renewal feature is a game changer. I've used other platforms before, but the quality of the visual instruction here is superior. Plus, being able to pay only after passing took all the stress away.",
        rating: 5
    },
    {
        id: "2",
        name: "Gillian McNab",
        role: "Teacher",
        content: "I didn't have time to spend a whole day in a classroom. This course was flexible, easy to follow, and exactly what I needed for my teaching credential. The videos made the techniques really stick.",
        rating: 5
    },
    {
        id: "3",
        name: "Walter Alexander",
        role: "EMT",
        content: "The online certification with the virtual instructor felt very personal. It wasn't just reading text; it was an interactive experience that actually prepared me for the field.",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section className="py-20 bg-[var(--secondary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Professionals</h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        See why thousands of healthcare providers and safety professionals choose us for their certification.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-[var(--card)] p-8 rounded-2xl shadow-sm border border-[var(--border)] relative">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--accent)] opacity-50" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-[var(--foreground)] mb-6 italic">"{t.content}"</p>
                            <div>
                                <div className="font-bold">{t.name}</div>
                                <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
