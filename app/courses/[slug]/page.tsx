"use client";

import { use } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock Data Database
const COURSE_DATA: Record<string, any> = {
    "cpr-aed": {
        title: "Online CPR/AED Certification",
        subtitle: "For Lay Responders & General Public",
        price: "$14.95",
        description: "This comprehensive course covers Adult, Child, and Infant CPR and AED usage. Designed for teachers, babysitters, and general citizens who want to be prepared.",
        credits: "4.0 CE Credits",
        validity: "2 Years",
        audience: "Teachers, Parents, Coaches, Fitness Instructors",
        curriculum: [
            "Assessing the Situation & Scene Safety",
            "The C-A-B Protocol (Compressions, Airway, Breathing)",
            "Adult CPR Techniques (Hands-Only & Breaths)",
            "Child & Infant CPR Adaptations",
            "Automated External Defibrillator (AED) Usage",
            "Choking Relief (Heimlich Maneuver) for all ages"
        ]
    },
    "bls": {
        title: "Healthcare Provider CPR / BLS",
        subtitle: "Basic Life Support for Medical Professionals",
        price: "$14.95",
        description: "The BLS course is designed for healthcare professionals. It covers high-performance CPR, team dynamics, and advanced airway management techniques conforming to the latest AHA guidelines.",
        credits: "4.0 CE/CME Credits",
        validity: "2 Years",
        audience: "Nurses (RN, LPN), Physicians, EMTs, Dentists, Pharmacists",
        curriculum: [
            "2-Rescuer CPR & Team Dynamics",
            "High-Quality Compressions for Adults, Children, Infants",
            "Bag-Valve-Mask (BVM) Ventilation",
            "Advanced Airway Management",
            "Opioid-Associated Life-Threatening Emergencies",
            "Return of Spontaneous Circulation (ROSC) Care"
        ]
    },
    "first-aid": {
        title: "Standard First Aid Certification",
        subtitle: "Essential Skills for Trauma & Medical Emergencies",
        price: "$14.95",
        description: "Learn to manage common injuries and sudden illnesses until professional help arrives. Topics include bleeding control, burns, poisoning, and shock.",
        credits: "2.0 CE Credits",
        validity: "2 Years",
        audience: "General Public, Workplace Safety Teams",
        curriculum: [
            "Bleeding Control & Tourniquet Usage",
            "Shock Management",
            "Bone, Joint, and Muscle Injuries",
            "Burns (Thermal, Chemical, Electrical)",
            "Sudden Illnesses (Stroke, Seizure, Diabetic Emergencies)",
            "Environmental Emergencies (Heat/Cold)"
        ]
    },
    "combo-standard": {
        title: "CPR/AED & First Aid Combo",
        subtitle: "Complete Emergency Training Package",
        price: "$36.95",
        description: "Our most popular course for non-healthcare professionals. Combines the full CPR/AED curriculum with critical First Aid skills in one streamlined package.",
        credits: "6.0 CE Credits",
        validity: "2 Years",
        audience: "Daycare Providers, School Staff, Construction Safety",
        curriculum: [
            "All CPR/AED Modules (Adult/Child/Infant)",
            "All First Aid Modules (Trauma/Medical)",
            "Integrated Scenario Training",
            "Pediatric Specific Emergencies",
            "Asthma & Anaphylaxis (EpiPen)",
            "Legal Concepts (Good Samaritan Laws)"
        ]
    },
    "bbp": {
        title: "Bloodborne Pathogens",
        subtitle: "Infection Control & Safety Compliance",
        price: "$9.95",
        description: "Essential training for anyone with a reasonable anticipation of contact with blood or other potentially infectious materials (OPIM). Meets OSHA Standard 29 CFR 1910.1030.",
        credits: "2.0 CE Credits",
        validity: "1 Year",
        audience: "Tattoo Artists, Custodians, Healthcare Workers",
        curriculum: [
            "OSHA Bloodborne Pathogens Standard",
            "Hepatitis B, C, and HIV Transmission",
            "Personal Protective Equipment (PPE)",
            "Safe Exposure Control Plans",
            "Post-Exposure Protocols",
            "Proper Disposal of Biohazards"
        ]
    },
    "acls": {
        title: "ACLS Certification",
        subtitle: "Advanced Cardiovascular Life Support",
        price: "$119.00",
        description: "Advanced training for healthcare professionals who direct or participate in the management of cardiopulmonary arrest or other cardiovascular emergencies.",
        credits: "8.0 CE/CME Credits",
        validity: "2 Years",
        audience: "ER Doctors, Critical Care Nurses, Paramedics",
        curriculum: [
            "ACLS Algorithms & Arrhythmia Recognition",
            "Airway Management & Capnography",
            "Electrical Therapy (Defibrillation/Cardioversion)",
            "ACS & Stroke Management",
            "Team Dynamics in Resuscitation",
            "Pharmacology for ACLS"
        ]
    },
    "pals": {
        title: "PALS Certification",
        subtitle: "Pediatric Advanced Life Support",
        price: "$119.00",
        description: "Designed for healthcare providers who respond to emergencies in infants and children. Focuses on the systematic assessment and treatment of pediatric patients.",
        credits: "8.0 CE/CME Credits",
        validity: "2 Years",
        audience: "Pediatricians, PICU Nurses, Emergency response",
        curriculum: [
            "Pediatric Assessment Paradigm (Evaluate-Identify-Intervene)",
            "Respiratory Distress vs Failure",
            "Shock Management in Children",
            "Pediatric Arrhythmias",
            "Post-Resuscitation Care",
            "Coping with Death & Dying"
        ]
    },
    "hipaa": {
        title: "HIPAA Training Course",
        subtitle: "Health Insurance Portability & Accountability",
        price: "$12.99",
        description: "Comprehensive training on the Privacy Rule, Security Rule, and Enforcement Rule. Ensures your team understands how to protect Patient Health Information (PHI).",
        credits: "2.0 CE Credits",
        validity: "2 Years",
        audience: "Medical Office Staff, HR, Privacy Officers",
        curriculum: [
            "Overview of HIPAA & HITECH Act",
            "Privacy Rule Fundamentals",
            "Security Rule: Physical, Technical, Admin Safeguards",
            "Breach Notification Protocols",
            "Patient Rights & Authorization",
            "Business Associate Agreements"
        ]
    }
};

export default function CoursePage(props: { params: Promise<{ slug: string }> }) {
    const params = use(props.params);
    const course = COURSE_DATA[params.slug];

    if (!course) {
        // In a real app we'd trigger notFound(), but for this demo let's fallback or allow debugging
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Course Not Found</h1>
                    <Link href="/"><Button className="mt-4">Go Home</Button></Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <Navbar />

            {/* Course Hero */}
            <div className="pt-32 pb-16 bg-[var(--secondary)] border-b border-[var(--border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                            <Award className="w-4 h-4" />
                            Nationally Accepted
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[var(--foreground)]">
                            {course.title}
                        </h1>
                        <p className="text-xl text-[var(--muted-foreground)] mb-8">
                            {course.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Clock className="w-5 h-5 text-[var(--primary)]" />
                                {course.credits}
                            </div>
                            <div className="hidden sm:block text-gray-300">|</div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <FileText className="w-5 h-5 text-[var(--primary)]" />
                                Valid for {course.validity}
                            </div>
                            <div className="hidden sm:block text-gray-300">|</div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-[var(--primary)]" />
                                Unlimited Exam Retakes
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                                Start Course - {course.price}
                            </Button>
                            <div className="text-sm font-medium text-[var(--muted-foreground)]">
                                Pay ONLY after you pass.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Details & Curriculum */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                            <p className="text-[var(--muted-foreground)] leading-relaxed text-lg">
                                {course.description}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
                            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 shadow-sm">
                                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {course.curriculum.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-[var(--foreground)] font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar (Sticky) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 shadow-lg">
                            <h3 className="font-bold text-lg mb-4">Certification Features</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">1</div>
                                    <span>Instant Digital Card (PDF)</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">2</div>
                                    <span>Free Hard Copy Mailed</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">3</div>
                                    <span>Compatible with Mobile</span>
                                </li>
                            </ul>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-center">
                                <div className="font-bold text-2xl mb-1">{course.price}</div>
                                <div className="text-xs text-slate-500 mb-4">No hidden fees.</div>
                                <Button className="w-full">Get Certified Now</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}
