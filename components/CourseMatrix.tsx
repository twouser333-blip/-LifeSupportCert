"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Clock, Calendar, GraduationCap } from "lucide-react";

interface Course {
    id: string;
    title: string;
    price: string;
    credits: number;
    validity: string;
    audience: string;
    popular?: boolean;
}

const courses: Course[] = [
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

export function CourseMatrix() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Choose Your Certification</h2>
                    <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        All courses follow the latest AHA & ECC guidelines. Pay only after you pass the exam.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.id} className={`relative flex flex-col p-6 rounded-2xl border ${course.popular ? 'border-[var(--primary)] shadow-lg scale-105 z-10' : 'border-[var(--border)] shadow-sm hover:shadow-md'} transition-all bg-white`}>

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
                                <div className="flex items-center gap-3 text-sm">
                                    <GraduationCap className="w-4 h-4 text-[var(--muted-foreground)]" />
                                    <span>Free Retakes</span>
                                </div>
                            </div>

                            <Link href={`/courses/${course.id}`} className="w-full">
                                <Button className={`w-full ${course.popular ? '' : 'bg-slate-900 hover:bg-slate-800'}`}>
                                    Select Course
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
