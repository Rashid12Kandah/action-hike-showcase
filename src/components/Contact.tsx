import { Instagram, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary/5 rotate-45"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-primary/10 rotate-45"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground">
              Start Your <span className="text-primary">Adventure</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Ready to explore? Get in touch and let's plan your next outdoor adventure together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Card */}
            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(253,214,185,0.1)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">WhatsApp</h3>
              <p className="text-foreground/70 mb-4">Quick booking and instant responses</p>
              <Button variant="hero" asChild className="w-full">
                <a
                  href="https://wa.me/WHATSAPP_NUMBER_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message Us
                </a>
              </Button>
            </div>

            {/* Instagram Card */}
            <div className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(253,214,185,0.1)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Instagram</h3>
              <p className="text-foreground/70 mb-4">Follow our adventures and get inspired</p>
              <Button variant="outline" asChild className="w-full">
                <a
                  href="https://www.instagram.com/actionhike.jo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @actionhike.jo
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">Based in Jordan</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground/80">Contact via WhatsApp or Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
