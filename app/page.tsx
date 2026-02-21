import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, MapPin, Sparkles, Shield, Award } from "lucide-react";

export const metadata = {
  title: "Dry Cleaners of Chobham | Trusted Care for Your Finest Clothes",
  description: "Professional dry cleaning, laundry, and alterations in Chobham, Surrey. Expert garment care with attention to detail. Call 01276 855001.",
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DryCleaningOrLaundry",
            name: "Dry Cleaners of Chobham",
            telephone: "01276 855001",
            address: {
              "@type": "PostalAddress",
              streetAddress: "38 High Street",
              addressLocality: "Chobham",
              postalCode: "GU24 8AA",
              addressCountry: "GB",
            },
          }),
        }}
      />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://source.unsplash.com/1920x1080/?dry-cleaning,clothes,professional"
          alt="Professional dry cleaning services"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
            Trusted Care for Your Finest Clothes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Expert dry cleaning and alterations in the heart of Chobham
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#4FC3F7] hover:bg-[#4FC3F7]/90 text-[#1B3A5C] font-semibold text-lg px-8 py-6 shimmer"
            >
              <a href="tel:01276855001">
                <Phone className="mr-2 h-5 w-5" />
                Call to Book
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1B3A5C] font-semibold text-lg px-8 py-6"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1F4775]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4FC3F7] rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-[#1B3A5C]" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-300">
                Professional care for delicate fabrics and fine garments
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4FC3F7] rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#1B3A5C]" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Trusted Service</h3>
              <p className="text-gray-300">
                Decades of experience serving the Chobham community
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4FC3F7] rounded-full mb-4">
                <Award className="h-8 w-8 text-[#1B3A5C]" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Expert Alterations</h3>
              <p className="text-gray-300">
                Skilled tailoring to ensure the perfect fit
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#1F4775] border-white/10">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#4FC3F7] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &ldquo;Outstanding service! They took such great care with my wedding dress.
                  The attention to detail is exceptional and the staff are always friendly.&rdquo;
                </p>
                <p className="font-semibold text-[#4FC3F7]">Sarah M.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1F4775] border-white/10">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#4FC3F7] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &ldquo;I&apos;ve been using this dry cleaner for years. They never disappoint.
                  My business suits always look immaculate and the turnaround time is excellent.&rdquo;
                </p>
                <p className="font-semibold text-[#4FC3F7]">James P.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1F4775] border-white/10">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#4FC3F7] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &ldquo;Fantastic alterations service! They shortened my trousers perfectly
                  and the finish was flawless. Highly recommend for all dry cleaning needs.&rdquo;
                </p>
                <p className="font-semibold text-[#4FC3F7]">Emily R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1F4775]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Visit Us Today</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#4FC3F7] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">38 High Street</p>
                    <p className="text-gray-300">Chobham, Woking, Surrey, GU24 8AA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#4FC3F7] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:01276855001"
                      className="font-semibold hover:text-[#4FC3F7] transition-colors"
                    >
                      01276 855001
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#4FC3F7] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Opening Hours</p>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:30 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://source.unsplash.com/800x600/?laundry,shop,store"
                alt="Dry cleaning shop interior"
                fill
                className="object-cover"
              />
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
