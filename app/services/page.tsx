import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Shirt, Sparkles, Scissors, Home as HomeIcon, Heart, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Our Services | Dry Cleaners of Chobham",
  description: "Professional dry cleaning, laundry, alterations, shirt service, curtains, and wedding dress preservation in Chobham, Surrey. Call 01276 855001 for pricing.",
};

const services = [
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Expert cleaning for delicate fabrics, suits, dresses, and fine garments. Our professional team ensures your clothes receive the care they deserve.",
  },
  {
    icon: RefreshCw,
    title: "Laundry Service",
    description: "Comprehensive wash, dry, and fold service for your everyday clothing needs. Fresh, clean, and neatly presented.",
  },
  {
    icon: Scissors,
    title: "Alterations",
    description: "Professional tailoring and alterations to achieve the perfect fit. From simple hems to complex adjustments, our skilled team delivers quality workmanship.",
  },
  {
    icon: Shirt,
    title: "Shirt Service",
    description: "Specialist shirt cleaning and pressing service. Your business shirts returned crisp, clean, and ready to wear.",
  },
  {
    icon: HomeIcon,
    title: "Curtains & Soft Furnishings",
    description: "Expert cleaning for curtains, drapes, and soft furnishings. Careful handling to maintain fabric quality and appearance.",
  },
  {
    icon: Heart,
    title: "Wedding Dress Preservation",
    description: "Specialist cleaning and preservation for your precious wedding gown. Protected and preserved to last a lifetime.",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional garment care tailored to your needs. From everyday cleaning to specialist preservation,
              we deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="bg-[#1F4775] border-white/10 hover:border-[#4FC3F7]/50 transition-all hover:scale-105"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#4FC3F7] rounded-full mb-4">
                      <Icon className="h-7 w-7 text-[#1B3A5C]" />
                    </div>
                    <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-[#1F4775] border border-white/10 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-4">Need a Quote?</h2>
              <p className="text-gray-300 mb-6">
                Call us today for pricing information and to discuss your specific requirements.
                We&apos;re here to help with all your garment care needs.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#4FC3F7] hover:bg-[#4FC3F7]/90 text-[#1B3A5C] font-semibold text-lg px-8"
              >
                <a href="tel:01276855001">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Pricing
                </a>
              </Button>
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
