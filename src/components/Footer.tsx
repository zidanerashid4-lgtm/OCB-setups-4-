import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#E8DCC4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-4xl text-[#D4AF37] tracking-tight italic mb-2">
                Mumus Events
              </h3>
              <div className="w-24 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
            <p className="text-[#a89f8c] leading-relaxed font-light">
              Curating timeless celebrations with elegance, sophistication, and unparalleled attention to detail.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-[#D4AF37] text-sm tracking-widest uppercase mb-6 font-light">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@mumusevents.com"
                className="flex items-center gap-3 text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" strokeWidth={1} />
                <span className="font-light">hello@mumusevents.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Phone className="w-5 h-5" strokeWidth={1} />
                <span className="font-light">+1 (234) 567-8900</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-[#D4AF37] text-sm tracking-widest uppercase mb-6 font-light">
              Follow Us
            </h4>
            <div className="flex gap-6">
              <a
                href="#"
                className="p-3 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
              </a>
              <a
                href="#"
                className="p-3 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a89f8c] text-sm font-light">
              © {new Date().getFullYear()} Mumus Events — Crafted With Elegance.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300 font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300 font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
