import React, { useState, useRef } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  // --- STATE ---
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone_number: '',
    topic: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // --- SPOTLIGHT LOGIC ---
  const formRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // --- FORM HANDLERS ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      await axios.post(`${apiUrl}/email/`, form);
      setSuccess(true);
      setForm({ name: '', email: '', phone_number: '', topic: '', message: '' });
    } catch (err: any) {
      setError('فشل إرسال الرسالة. يرجى التأكد من الاتصال والمحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow">
        
        {/* --- 1. HERO HEADER (Custom Red #af2734) --- */}
        <div className="relative bg-gradient-to-br from-[#af2734] to-[#8E202B] text-white pt-24 pb-32 overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
          />
          
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-sm">تواصل معنا</h1>
            <p className="text-red-50 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              نحن هنا للإجابة على استفساراتكم. سواء كنتم تبحثون عن تفاصيل المنتجات، 
              أو ترغبون في شراكة تجارية، فريق إزار جاهز لخدمتكم.
            </p>
          </div>
        </div>
        
        {/* --- 2. MAIN CONTENT GRID --- */}
        <div className="container mx-auto px-4 -mt-20 pb-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* --- LEFT COLUMN: INFO CARDS --- */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                  <span className="w-1 h-8 bg-[#af2734] rounded-full"></span>
                  معلومات الاتصال
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <InfoItem 
                    icon={<MapPin className="text-[#af2734]" />}
                    title="العنوان"
                  >
                    <p>المركز الرئيسي: تركيا – إسطنبول</p>
                    <p>فرع اليمن:  حضرموت، تريم ،معهد التفوق </p>
                  </InfoItem>

                  {/* Email */}
                  <InfoItem 
                    icon={<Mail className="text-[#af2734]" />}
                    title="البريد الإلكتروني"
                  >
                    <a href="mailto:İzartekstil@gmail.com" className="hover:text-[#af2734] transition-colors">
                      İzartekstil@gmail.com
                    </a>
                  </InfoItem>

                  {/* Phones */}
                  <InfoItem 
                    icon={<Phone className="text-[#af2734]" />}
                    title="أرقام الهاتف"
                  >
                    <div className="space-y-4 mt-2">
                       {/* Yemen */}
                       <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <FlagYemen />
                          <div className="text-sm font-mono text-slate-600">
                            <div dir="ltr">+967 73 323 6808</div>
                            <div dir="ltr">+967 77 703 5633</div>
                          </div>
                       </div>
                       {/* Turkey */}
                       <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <FlagTurkey />
                          <div className="text-sm font-mono text-slate-600">
                            <div dir="ltr">+90 539 500 10 24</div>
                            <div dir="ltr">+90 (537) 227 12 00</div>
                          </div>
                       </div>
                    </div>
                  </InfoItem>

                  {/* Working Hours */}
                  <InfoItem 
                    icon={<Clock className="text-[#af2734]" />}
                    title="ساعات العمل"
                  >
                    <p>الأحد - الخميس: 8:00 ص - 1:00 م</p>
                    <p className="text-slate-400 text-sm">الجمعة - السبت: مغلق</p>
                  </InfoItem>
                </div>
                
                {/* Social Row */}
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">تابعنا على</h3>
                  <div className="flex gap-4">
                    <SocialButton icon={<Facebook />} href="https://www.facebook.com/profile.php?id=100088882298228&mibextid=LQQJ4d" />
                    <SocialButton icon={<Instagram />} href="https://instagram.com/izar0_1?igshid=YWJhMjlhZTc=" />
                    <SocialButton icon={<MessageCircle />} href="https://t.me/izar0_1" />
                  </div>
                </div>
              </div>

            </div>
              
            {/* --- RIGHT COLUMN: SPOTLIGHT FORM --- */}
            <div className="lg:col-span-7">
              <div 
                ref={formRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setOpacity(1)}
                onMouseLeave={() => setOpacity(0)}
                className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden h-full"
              >
                {/* Spotlight Gradient (Using RGB of #af2734 which is 175, 39, 52) */}
                <div 
                  className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                  style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(175,39,52,0.06), transparent 40%)`,
                  }}
                />

                <div className="relative p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">أرسل لنا رسالة</h2>
                    <p className="text-slate-500">سنقوم بالرد عليك في أقرب وقت ممكن</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">الاسم الكامل</label>
                        <Input 
                          id="name" 
                          placeholder="مثال: محمد أحمد" 
                          className="bg-slate-50 border-slate-200 h-12 focus:bg-white focus:border-[#af2734] focus:ring-[#af2734]/20"
                          required 
                          value={form.name} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone_number" className="text-sm font-semibold text-slate-700">رقم الهاتف</label>
                        <Input 
                          id="phone_number" 
                          placeholder="+967..." 
                          className="bg-slate-50 border-slate-200 h-12 focus:bg-white focus:border-[#af2734] focus:ring-[#af2734]/20"
                          value={form.phone_number} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">البريد الإلكتروني</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        className="bg-slate-50 border-slate-200 h-12 focus:bg-white focus:border-[#af2734] focus:ring-[#af2734]/20"
                        required 
                        value={form.email} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="topic" className="text-sm font-semibold text-slate-700">الموضوع</label>
                      <Input 
                        id="topic" 
                        placeholder="بخصوص ماذا تتواصل معنا؟" 
                        className="bg-slate-50 border-slate-200 h-12 focus:bg-white focus:border-[#af2734] focus:ring-[#af2734]/20"
                        required 
                        value={form.topic} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700">الرسالة</label>
                      <Textarea 
                        id="message" 
                        placeholder="اكتب تفاصيل رسالتك هنا..." 
                        className="bg-slate-50 border-slate-200 min-h-[160px] resize-none focus:bg-white focus:border-[#af2734] focus:ring-[#af2734]/20" 
                        required 
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Alerts */}
                    {success && (
                      <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                        <CheckCircle2 size={20} />
                        <span>تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.</span>
                      </div>
                    )}
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                        <AlertCircle size={20} />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* --- PRIMARY ACTION BUTTON (#af2734) --- */}
                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-[#af2734] hover:bg-[#8E202B] text-white rounded-xl text-lg shadow-lg shadow-[#af2734]/20 transition-all duration-300 hover:scale-[1.01]"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          جاري الإرسال...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          إرسال الرسالة
                          <Send size={18} className="rotate-180" />
                        </div>
                      )}
                    </Button> 
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// --- SUB-COMPONENTS ---

const InfoItem = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-[#af2734]/10 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
      <div className="text-slate-500 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-[#af2734] hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

// Flag Components
const FlagYemen = () => (
  <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 shadow-sm ring-1 ring-slate-200">
     <svg viewBox="0 0 32 32" className="w-full h-full object-cover">
       <rect y="0" width="32" height="11" fill="#CE1126"/>
       <rect y="11" width="32" height="10" fill="#FFFFFF"/>
       <rect y="21" width="32" height="11" fill="#000000"/>
    </svg>
  </div>
);

const FlagTurkey = () => (
  <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 shadow-sm ring-1 ring-slate-200">
     <svg viewBox="0 0 32 32" className="w-full h-full object-cover">
       <rect width="32" height="32" fill="#E30A17"/>
       <circle cx="15" cy="16" r="7" fill="#ffffff"/>
       <circle cx="17" cy="16" r="5.5" fill="#E30A17"/>
       <polygon points="21,16 23,12 24,18 20,18 25,15" fill="#ffffff" transform="rotate(-15 22 16) scale(0.6) translate(10 10)"/>
    </svg>
  </div>
);

export default Contact;