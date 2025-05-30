import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EngagementInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  // Event date: June 8, 2025
  const eventDate = new Date(2025, 5, 8, 15, 0, 0).getTime();

  // Update countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  // Delayed mounting animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Animated Sparkle Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-300/10 via-transparent to-transparent animate-pulse" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="max-w-3xl text-center  rounded-3xl p-8 shadow-2xl  backdrop-blur-sm relative z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Decorative header */}
            <motion.div
              className="absolute top-0 left-0 w-full flex justify-center -translate-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="px-6 py-1 bg-[#ffc065] text-gray-900 rounded-full text-sm font-medium tracking-wider">
                Save The Date
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#ffc065] mt-4 mb-2 tracking-wide dancing-script"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Erlangga & Carissa
            </motion.h1>

            <motion.div
              className="h-1 w-8 bg-[#ffc065] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 50 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />

            <motion.p
              className="text-sm md:text-base tracking-widest mb-6 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Mengundang Bapak/Ibu untuk menghadiri pertunangan kami pada
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-6 flex-wrap text-white text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="font-semibold">Minggu</div>
              </div>
              <div className="text-center">
                <div className="text-[#ffc065] text-5xl font-extrabold">08</div>
                <div className="text-sm tracking-wide">Juni 2025</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">15.00 WIB</div>
              </div>
            </motion.div>

            <motion.p
              className="text-sm md:text-base font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Perum Griya Mustika B5 Pangenrejo
            </motion.p>

            {/* Countdown timer */}
            <motion.div
              className="grid grid-cols-3 gap-4 my-6 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
            >
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-3xl font-bold text-[#ffc065]">{days}</div>
                <div className="text-xs uppercase tracking-wide">Hari</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-3xl font-bold text-[#ffc065]">{hours}</div>
                <div className="text-xs uppercase tracking-wide">Jam</div>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <div className="text-3xl font-bold text-[#ffc065]">
                  {minutes}
                </div>
                <div className="text-xs uppercase tracking-wide">Menit</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image with parallax effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
      >
        <img
          src="/background.png"
          alt="background flowers"
          className="w-full h-full sm:object-cover"
        />
      </motion.div>

      {/* Flower decorations */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-48 z-5 opacity-60 pointer-events-none"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>
    </div>
  );
}
