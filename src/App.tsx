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
    <div className="min-h-dvh bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
      {/* Animated Sparkle Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-yellow-300/10 via-transparent to-transparent animate-pulse" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="max-w-3xl text-center  rounded-3xl p-4 shadow-2xl  backdrop-blur-[4px] relative z-20"
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
              className="flex justify-center items-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.svg
                width="200"
                height="20"
                viewBox="0 0 200 20"
                fill="none"
              >
                {/* Left elegant scrollwork */}
                <motion.path
                  d="M15 10C25 5 35 15 45 10C55 5 60 15 70 10H85"
                  stroke="#ffc065"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                />

                {/* Center ornament */}
                <motion.path
                  d="M95 5L100 15L105 5"
                  stroke="#ffc065"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                />

                {/* Right elegant scrollwork */}
                <motion.path
                  d="M115 10H130C140 5 150 15 160 10C170 5 180 15 185 10"
                  stroke="#ffc065"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                />

                {/* Decorative elements */}
                <motion.circle
                  cx="100"
                  cy="10"
                  r="1.5"
                  fill="#ffc065"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                />
                <motion.circle
                  cx="45"
                  cy="10"
                  r="1"
                  fill="#ffc065"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.2 }}
                />
                <motion.circle
                  cx="160"
                  cy="10"
                  r="1"
                  fill="#ffc065"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.2 }}
                />
              </motion.svg>
            </motion.div>

            <motion.p
              className="text-sm md:text-base tracking-widest mb-6 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Mengundang Bapak/Ibu untuk menghadiri pertunangan kami pada
            </motion.p>

            {/* Date and time section */}
            <motion.div
              className="flex items-center justify-center gap-6 flex-wrap text-white text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="w-26 max-w-xl">
                {/* Top decorative line */}
                <motion.div
                  className="w-full mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  <motion.div
                    className="h-[2px] bg-[#ffc065]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
                <div className="text-center my-1">
                  <div className="font-semibold">MINGGU</div>
                </div>
                {/* Bottom decorative line */}
                <motion.div
                  className="w-full mx-auto "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                >
                  <motion.div
                    className="h-[2px] bg-[#ffc065]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
              </div>

              <div className="text-center flex flex-col items-center justify-center">
                <div className="text-sm tracking-wide font-semibold">JUNI</div>
                <div className="text-[#ffc065] text-5xl font-semibold self-center justify-items-center">
                  08
                </div>
                <div className="text-sm tracking-wide font-semibold mt-1">
                  2025
                </div>
              </div>

              <div className="w-26 max-w-xl">
                {/* Top decorative line */}
                <motion.div
                  className="w-full mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  <motion.div
                    className="h-[2px] bg-[#ffc065]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
                <div className="text-center my-1">
                  <div className="font-semibold">15.00 WIB</div>
                </div>
                {/* Bottom decorative line */}
                <motion.div
                  className="w-full mx-auto "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                >
                  <motion.div
                    className="h-[2px] bg-[#ffc065]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              className="text-sm md:text-base font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Perum Griya Mustika B5 Pangenrejo
            </motion.p>

            {/* Google Maps */}
            <motion.div
              className="w-full max-w-md mx-auto mb-8 overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.7 }}
            >
              <motion.div
                className="bg-gray-800/80 p-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.5 }}
              >
                <a
                  href="https://maps.app.goo.gl/Lj9Nh2DqPZ5zAFc46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffc065] hover:text-[#ffd48a] text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a5 5 0 0 0-5 5c0 5 5 11 5 11s5-6 5-11a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  Lihat di Google Maps
                </a>
              </motion.div>
            </motion.div>

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
