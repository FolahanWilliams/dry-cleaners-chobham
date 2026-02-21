import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | Dry Cleaners of Chobham",
  description: "Learn about Dry Cleaners of Chobham - your trusted partner for professional garment care in Surrey. Expert service, quality results, community focused.",
};

const reasons = [
  {
    title: "Decades of Expertise",
    description: "Our experienced team brings years of professional knowledge to every garment. We understand fabrics, stains, and the specialist care required for different materials.",
  },
  {
    title: "Community Focused",
    description: "As a local business serving Chobham and surrounding areas, we pride ourselves on building lasting relationships with our customers. Your satisfaction is our priority.",
  },
  {
    title: "Quality Guaranteed",
    description: "We use professional-grade equipment and eco-friendly cleaning solutions to deliver outstanding results while protecting your garments and the environment.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for professional garment care in Chobham
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden scroll-fade-in">
              <Image
                src="https://source.unsplash.com/800x600/?clothing,garment,professional"
                alt="Professional dry cleaning care"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Dry Cleaners of Chobham has been serving the local community for many years,
                  providing expert garment care with a personal touch. Located in the heart of
                  Chobham on High Street, we&apos;ve built our reputation on quality service,
                  attention to detail, and genuine care for our customers.
                </p>
                <p>
                  From everyday dry cleaning to specialist services like wedding dress preservation
                  and delicate alterations, we treat every item that comes through our doors with
                  the same level of professional care and expertise.
                </p>
                <p>
                  Our team understands that your clothes are more than just fabric - they represent
                  important moments, professional success, and personal style. That&apos;s why we&apos;re
                  committed to delivering exceptional results, every single time.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1F4775] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center">
              Why Choose Dry Cleaners of Chobham?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="scroll-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start mb-4">
                    <CheckCircle2 className="h-6 w-6 text-[#4FC3F7] mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-heading font-semibold">{reason.title}</h3>
                  </div>
                  <p className="text-gray-300 ml-9">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B3A5C] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Dry Cleaners of Chobham. All rights reserved.
            </p>
            <p className="text-sm">
              Professional dry cleaning, laundry, and alterations in Chobham, Surrey
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
