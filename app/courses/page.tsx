"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Calendar, GraduationCap } from "lucide-react";

// Redefining local data or importing it would be ideal. 
// For this quick implementation, I will recreate the grid with all items to ensure custom styling if needed,
// or I could export the data from CourseMatrix. 
// To keep it self-contained and flexible (e.g. if we want filters later), I'll define the full list here.

const ALL_COURSES = [
    {
        id: "cpr-aed",
        title: "Online CPR/AED Course",
        price: "$14.95",
        credits: 4.0,
        validity: "2 Years",
        audience: "General Public / Lay Responders"
    },
    {
        id: "bls",
        title: "Healthcare CPR/AED (BLS)",
        price: "$14.95",
        credits: 4.0,
        validity: "2 Years",
        audience: "Doctors, Nurses, EMS",
        popular: true
    },
    {
        id: "first-aid",
        title: "First Aid Certification",
        price: "$14.95",
        credits: 2.0,
        validity: "2 Years",
        audience: "Teachers, Coaches, Parents"
    },
    {
        id: "combo-standard",
        title: "CPR/AED & First Aid Combo",
        price: "$36.95",
        credits: 6.0,
        validity: "2 Years",
        audience: "School & Daycare Staff",
        popular: true
    },
    {
        id: "bbp",
        title: "Bloodborne Pathogens",
        price: "$9.95",
        credits: 2.0,
        validity: "1 Year",
        audience: "OSHA Compliance Workers"
    },
    {
        id: "acls",
        title: "ACLS Certification",
        price: "$119.00",
        credits: 8.0,
        validity: "2 Years",
        audience: "Advanced Emergency Staff"
    },
    {
        id: "pals",
        title: "PALS Certification",
        price: "$119.00",
        credits: 8.0,
        validity: "2 Years",
        audience: "Pediatric Emergency Staff"
    },
    {
        id: "hipaa",
        title: "HIPAA Training Course",
        price: "$12.99",
        credits: 2.0,
        validity: "2 Years",
        audience: "Privacy Officers / Healthcare"
    }
];

export default function AllCoursesPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            {/* Page Header */}
            <div className="pt-32 pb-12 bg-[var(--secondary)] border-b border-[var(--border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-[var(--foreground)]">
                        Complete Course Catalog
                    </h1>
                    <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Browse our extensive list of nationally accepted certifications.
                        All courses include free exam retakes and instant proof of completion.
                    </p>
                </div>
            </div>

            {/* Course Grid */}
            <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ALL_COURSES.map((course) => (
                        <div key={course.id} className={`relative flex flex-col p-6 rounded-2xl border ${course.popular ? 'border-[var(--primary)] shadow-lg' : 'border-[var(--border)] shadow-sm hover:shadow-md'} transition-all bg-white`}>

                            {course.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                                <p className="text-sm text-[var(--muted-foreground)] mb-4 h-10">{course.audience}</p>
                                <div className="flex items-baseline mb-1">
                                    <span className="text-3xl font-extrabold">{course.price}</span>
                                </div>
                                <p className="text-xs text-[var(--muted-foreground)]">Pay after you pass</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                <div className="flex items-center gap-3 text-sm">
                                    <Clock className="w-4 h-4 text-[var(--muted-foreground)]" />
                                    <span>{course.credits} CE Credits</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="w-4 h-4 text-[var(--muted-foreground)]" />
                                    <span>Valid for {course.validity}</span>
                                </div>
                            </div>

                            <Link href={`/courses/${course.id}`} className="w-full">
                                <Button className="w-full">
                                    View Details
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}
