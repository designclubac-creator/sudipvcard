import React, { useState } from "react";
import {
  Download,
  Share2,
  Linkedin,
  Mail,
  Phone,
  Globe,
  MessageCircle,
  ChevronRight,
  QrCode,
  X,
  Copy,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';
import profileImg from "./assets/profile.jpg";
import bannerImg from "./assets/banner.jpg";
import logoImg from "./assets/Logo.png";
import { downloadVCard, type ProfileData } from './lib/vcards/arpanvcard';
import { cn } from './lib/utils';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const profile = {
    firstName: "Sudip Kumar",
    lastName: "Sen",
    prefix: "Dr.",
    name: "Dr. Sudip Kumar Sen",
    title: "Chief Scientific Officer",
    phone: "+91 8149390937",
    whatsapp: "+91 8149390937",
    email: "sudip.s@aquaconnect.blue",
    website: "aquaconnect.blue/global",
    linkedin: "https://www.linkedin.com/in/dr-sudip-kumar-sen-29242138/",
    sharePath: "sudip_kumar_sen",
    bio: "Chief Scientific Officer at Aquaconnect.",
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}`;

  const handleSaveContact = () => {
    const vcardData: ProfileData = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      prefix: profile.prefix,
      displayName: profile.name,
      organization: "Aquaconnect",
      title: profile.title,
      phone: profile.phone,
      email: profile.email,
      url: profile.website,
      note: profile.bio
    };
    downloadVCard(vcardData);
  };

  const shareOptions = [
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-500' },
    { name: 'Email', icon: Mail, color: 'text-gray-600' },
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-600' },
    { name: 'X', icon: TwitterIcon, color: 'text-black' },
    { name: 'SMS', icon: MessageSquare, color: 'text-blue-400' },
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f5] font-sans selection:bg-[#061634] selection:text-white">
      <div
        className="w-full h-[190px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      <div className="max-w-md mx-auto px-4 -mt-20 sm:-mt-24 pb-24">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white shadow-lg p-2 border border-gray-200"
          >
            <img
              src={profileImg}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>

          <h1 className="mt-6 text-[34px] sm:text-[44px] leading-none font-bold text-slate-900">
            {profile.name}
          </h1>

          <p className="mt-4 text-[12px] sm:text-[14px] tracking-[0.22em] uppercase text-slate-500 font-semibold">
            {profile.title}
          </p>

          <div className="mt-4 flex justify-center">
            <img
              src={logoImg}
              alt="Aquaconnect Global"
              className="h-7 max-w-[220px] w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button 
            onClick={handleSaveContact}
            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-[#061634] text-white py-4 text-lg font-semibold shadow-md transition-all active:scale-[0.98]"
          >
            <Download size={20} />
            Save Contact
          </button>

          <button 
            onClick={() => setIsShareOpen(true)}
            className="w-full flex items-center justify-center gap-3 rounded-2xl bg-white text-slate-900 py-4 text-lg font-semibold border border-gray-200 shadow-sm transition-all active:scale-[0.98]"
          >
            <Share2 size={20} />
            Exchange Contact
          </button>
        </div>

        <div className="mt-8 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center justify-between px-4 py-5 border-b border-gray-100 transition-colors hover:bg-slate-50"
          >
            <div className="flex items-center gap-4 min-w-0 font-sans">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-slate-400" />
              </div>

              <div className="text-left min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Mobile
                </p>
                <p className="text-[18px] font-semibold text-slate-900 mt-1 break-words leading-snug">
                  {profile.phone}
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-300 shrink-0 ml-3" />
          </a>

          <a
            href={`https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-4 py-5 border-b border-gray-100 transition-colors hover:bg-slate-50"
          >
            <div className="flex items-center gap-4 min-w-0 font-sans">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7 text-slate-400" />
              </div>

              <div className="text-left min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  WhatsApp
                </p>
                <p className="text-[18px] font-semibold text-slate-900 mt-1 break-words leading-snug">
                  {profile.whatsapp}
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-300 shrink-0 ml-3" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-between px-4 py-5 border-b border-gray-100 transition-colors hover:bg-slate-50"
          >
            <div className="flex items-center gap-4 min-w-0 font-sans">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-slate-400" />
              </div>

              <div className="text-left min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Mail
                </p>
                <p className="text-[16px] font-semibold text-slate-900 mt-1 break-all leading-snug">
                  {profile.email}
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-300 shrink-0 ml-3" />
          </a>

          <a
            href={`https://${profile.website}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-4 py-5 transition-colors hover:bg-slate-50"
          >
            <div className="flex items-center gap-4 min-w-0 font-sans">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                <Globe className="w-7 h-7 text-slate-400" />
              </div>

              <div className="text-left min-w-0">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                  Website
                </p>
                <p className="text-[16px] font-semibold text-slate-900 mt-1 break-all leading-snug">
                  {profile.website}
                </p>
              </div>
            </div>

            <ChevronRight className="w-5 h-5 text-slate-300 shrink-0 ml-3" />
          </a>
        </div>

        <div className="mt-6 flex justify-start">
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-2xl w-24 h-24 flex items-center justify-center shadow-sm border border-gray-100 transition-all hover:-translate-y-1 active:scale-95"
            >
              <Linkedin className="w-8 h-8 text-slate-900" />
            </a>
          )}
        </div>
      </div>

      {/* Fixed QR Code FAB */}
      <button
        onClick={() => setShowQR(true)}
        className="fixed right-6 bottom-6 z-40 bg-[#061634] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 sm:right-8 sm:bottom-8"
        aria-label="Show My QR"
      >
        <QrCode className="w-7 h-7" />
      </button>

      {/* Share Bottom Sheet Overlay */}
      <AnimatePresence>
        {isShareOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-[40px] bg-white p-8 shadow-2xl md:mx-auto md:max-w-m"
            >
              <div className="flex items-center justify-between pb-8">
                <h3 className="text-2xl font-bold text-slate-900">Forward Contact</h3>
                <button 
                  onClick={() => setIsShareOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {shareOptions.map((option) => (
                  <button 
                    key={option.name}
                    className="flex flex-col items-center gap-2 group transition-transform active:scale-95"
                  >
                    <div className={cn("flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 group-hover:bg-slate-100 transition-colors shadow-sm", option.color)}>
                      <option.icon size={28} />
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{option.name}</span>
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <span className="flex-1 truncate text-xs font-medium text-slate-400">{window.location.host}/{profile.sharePath}</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                    }}
                    className="flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold shadow-sm transition-colors active:bg-slate-100 border border-slate-200 text-slate-900"
                  >
                    <Copy size={14} />
                    Copy
                  </button>
                </div>
              </div>

              <div className="h-8" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQR && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQR(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
            >
              <div className="w-full max-w-sm bg-white rounded-[40px] p-8 shadow-2xl relative text-center pointer-events-auto">
                <button
                  onClick={() => setShowQR(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-colors hover:bg-slate-200"
                  aria-label="Close QR"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>

                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-bold mb-6">
                  Scan My QR
                </p>

                <div className="flex justify-center">
                  <img
                    src={qrImage}
                    alt="QR Code"
                    className="w-full aspect-square rounded-3xl border border-gray-100 shadow-inner"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-bold text-slate-900">{profile.name}</h4>
                  <p className="text-slate-500 font-medium">{profile.title}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function TwitterIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.086 4.126H5.117z"/>
    </svg>
  );
}
