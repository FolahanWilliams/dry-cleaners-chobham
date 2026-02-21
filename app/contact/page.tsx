import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Dry Cleaners of Chobham",
  description: "Visit Dry Cleaners of Chobham at 38 High Street, Chobham, Surrey GU24 8AA. Call 01276 855001. Open Monday-Friday 9am-5:30pm, Saturday 9am-1pm.",
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visit us in Chobham or get in touch to discuss your garment care needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-[#1F4775] border-white/10">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#4FC3F7] rounded-full mb-4">
                  <Phone className="h-7 w-7 text-[#1B3A5C]" />
                </div>
                <CardTitle className="text-2xl font-heading">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:01276855001"
                  className="text-xl font-semibold text-[#4FC3F7] hover:underline"
                >
                  01276 855001
                </a>
                <p className="text-gray-300 mt-2">
                  Call us for pricing, collection & delivery, or any questions about our services
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1F4775] border-white/10">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#4FC3F7] rounded-full mb-4">
                  <MapPin className="h-7 w-7 text-[#1B3A5C]" />
                </div>
                <CardTitle className="text-2xl font-heading">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-1">38 High Street</p>
                <p className="text-gray-300">Chobham, Woking</p>
                <p className="text-gray-300">Surrey, GU24 8AA</p>
                <p className="text-gray-300 mt-2">United Kingdom</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1F4775] border-white/10 mb-12">
            <CardHeader>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#4FC3F7] rounded-full mb-4">
                <Clock className="h-7 w-7 text-[#1B3A5C]" />
              </div>
              <CardTitle className="text-2xl font-heading">Opening Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-gray-300">9:00 AM - 5:30 PM</span>
                </div>
                <Separator className="bg-white/10" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-gray-300">9:00 AM - 1:00 PM</span>
                </div>
                <Separator className="bg-white/10" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-gray-300">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden h-96 md:h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=38+High+Street+Chobham+Woking+Surrey+GU24+8AA&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dry Cleaners of Chobham Location"
            />
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
