import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, ArrowRight, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    // CHANGED: bg-slate-950 -> bg-[#160405] (This is a very deep, rich black-red that matches your brand)
    <footer className="relative bg-[#160405] text-white overflow-hidden pt-20 pb-10 rounded-t-2xl">
      
      {/* --- SPOTLIGHT BACKGROUND (Updated to your specific #af2734) --- */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" 
        style={{ backgroundColor: 'rgba(175, 39, 52, 0.15)' }} // #af2734 at 15% opacity
      />
      <div 
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none" 
        style={{ backgroundColor: 'rgba(175, 39, 52, 0.08)' }} // #af2734 at 8% opacity
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- NEWSLETTER SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-b border-white/10 pb-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">انضم إلى عائلة إزار</h2>
            <p className="text-white/60">اشترك في نشرتنا البريدية للحصول على أحدث العروض والتصاميم.</p>
          </div>
          <div className="relative">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني..." 
              // Updated focus border to your red
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 pl-16 text-white focus:outline-none focus:border-[#af2734] transition-colors placeholder:text-white/40"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#af2734] hover:bg-[#8E202B] text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-105">
              <Send size={18} className="ml-0.5" />
            </button>
          </div>
        </div>

        {/* --- MAIN COLUMNS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. Brand Info */}
          <div className="space-y-6">
            <div>
              {/* Updated dot color */}
              <h3 className="text-2xl font-black text-white mb-4">IZAR<span className="text-[#af2734]">.</span></h3>
              <p className="text-white/60 leading-relaxed text-sm">
                ننسج الفخامة في كل خيط. شركة إزار للصناعة والتجارة الخارجية تقدم مفهوماً جديداً للأناقة والجودة العالية.
              </p>
            </div>
            <div className="flex gap-3">
              <SocialBtn icon={<Facebook size={20} />} href="https://www.facebook.com/profile.php?id=100088882298228&mibextid=LQQJ4d" />
              <SocialBtn icon={<Instagram size={20} />} href="https://instagram.com/izar0_1?igshid=YWJhMjlhZTc=" />
              <SocialBtn icon={<MessageCircle size={20} />} href="https://t.me/izar0_1" />
            </div>
          </div>
          
          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">روابط سريعة</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="الرئيسية" />
              <FooterLink to="/products" text="المنتجات" />
              <FooterLink to="/about" text="قصتنا" />
              <FooterLink to="/contact" text="تواصل معنا" />
            </ul>
          </div>

           {/* 3. Support */}
           <div>
            <h3 className="text-lg font-bold mb-6 text-white">الدعم والمساعدة</h3>
            <ul className="space-y-3">
              <FooterLink to="/privacy-policy" text="سياسة الخصوصية" />
              <FooterLink to="/terms" text="الشروط والأحكام" />
              <FooterLink to="/shipping" text="الشحن والتوصيل" />
              <FooterLink to="/faq" text="الأسئلة الشائعة" />
            </ul>
          </div>
          
          {/* 4. Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">معلومات التواصل</h3>
            <ul className="space-y-6">
              
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="text-[#af2734] mt-1 flex-shrink-0" size={20} />
                <span className="text-sm text-white/60 leading-relaxed">
                  المركز الرئيسي: تركيا – إسطنبول<br/>
                  فرع اليمن:  حضرموت، تريم ،معهد التفوق 
                </span>
              </li>
              
              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="text-[#af2734] flex-shrink-0" size={20} />
                <a href="mailto:İzartekstil@gmail.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  İzartekstil@gmail.com
                </a>
              </li>
              
              {/* Phones */}
              <li className="flex items-start gap-3">
                <Phone className="text-[#af2734] mt-1 flex-shrink-0" size={20} />
                
                <div className="flex flex-col gap-3 w-full">
                  
                  {/* Yemen Group */}
                  <div className="flex items-start gap-3">
                     <div className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-white/10">
                        <svg viewBox="0 0 32 32" className="w-full h-full object-cover">
                           <rect y="0" width="32" height="11" fill="#CE1126"/>
                           <rect y="11" width="32" height="10" fill="#FFFFFF"/>
                           <rect y="21" width="32" height="11" fill="#000000"/>
                        </svg>
                     </div>
                     <div className="flex flex-col text-sm text-white/60 font-mono">
                        <a href="tel:+967733236808" className="hover:text-white transition-colors" dir="ltr">+967 73 323 6808</a>
                        <a href="tel:+967777035633" className="hover:text-white transition-colors" dir="ltr">+967 77 703 5633</a>
                     </div>
                  </div>

                  {/* Turkey Group */}
                  <div className="flex items-start gap-3">
                     <div className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-white/10">
                        <svg viewBox="0 0 32 32" className="w-full h-full object-cover">
                           <rect width="32" height="32" fill="#E30A17"/>
                           <circle cx="15" cy="16" r="7" fill="#ffffff"/>
                           <circle cx="17" cy="16" r="5.5" fill="#E30A17"/>
                           <polygon points="21,16 23,12 24,18 20,18 25,15" fill="#ffffff" transform="rotate(-15 22 16) scale(0.6) translate(10 10)"/>
                        </svg>
                     </div>
                     <div className="flex flex-col text-sm text-white/60 font-mono">
                        <a href="tel:+905395001024" className="hover:text-white transition-colors" dir="ltr">+90 539 500 10 24</a>
                        <a href="tel:+905372271200" className="hover:text-white transition-colors" dir="ltr">+90 537 227 12 00</a>
                     </div>
                  </div>

                </div>
              </li>

            </ul>
          </div>
        </div>
        
        {/* --- COPYRIGHT --- */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 gap-4">
          <p>&copy; {new Date().getFullYear()} شركة إزار للصناعة والتجارة الخارجية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <span>ازار ننسج الاصالة</span>
            <div className="h-4 w-px bg-white/20" />
            <span>IZAR Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- HELPER COMPONENTS ---
const FooterLink = ({ to, text }: { to: string, text: string }) => (
  <li>
    <Link to={to} className="group flex items-center text-white/60 hover:text-white transition-colors duration-300">
      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#af2734]">
        <ArrowRight size={14} className="ml-1 rotate-180" />
      </span>
      <span>{text}</span>
    </Link>
  </li>
);

const SocialBtn = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:bg-[#af2734] hover:text-white hover:border-[#af2734] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#af2734]/20"
  >
    {icon}
  </a>
);

export default Footer;