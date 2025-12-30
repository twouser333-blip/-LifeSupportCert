import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CourseMatrix } from "@/components/CourseMatrix";
import { Testimonials } from "@/components/Testimonials";
import { SEOContent } from "@/components/SEOContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <TrustBar />
      <CourseMatrix />
      <Testimonials />
      <SEOContent />

      {/* Footer Placeholder for now */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 LifeSupportCert. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
