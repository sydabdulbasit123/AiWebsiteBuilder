import { motion } from "motion/react";
import { useState } from "react";
import AuthModal from "../components/GoogleAuthForm.jsx";
import { useSelector } from "react-redux";
import { Coins } from "lucide-react";

const features = [
  {
    title: "AI Generated Code",
    desc: "GenWeb.ai builds real websites — clean code, animations, responsiveness and scalable structure.",
  },
  {
    title: "Fully Responsive Layouts",
    desc: "GenWeb.ai builds real websites — clean code, animations, responsiveness and scalable structure.",
  },
  {
    title: "Production Ready Output",
    desc: "GenWeb.ai builds real websites — clean code, animations, responsiveness and scalable structure.",
  },
];

function Navbar({ OnGetStarted, userData, onprofileclick, openprofile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 border-b border-white/10">
        <div className="text-sm font-semibold tracking-tight text-white">
          GenWeb.ai
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:inline rounded-md px-3 py-1.5 text-xs text-zinc-400 transition hover:text-white">
            Pricing
          </div>

          {userData && (
            <div className="hidden md:flex cursor-pointer rounded-md border border-white/15 px-3 py-1.5 text-xs text-white transition hover:bg-white/10 flex items-center gap-2">
              <Coins size={14} className="text-yellow-600" />
              <span>Credits</span>
              <span>{userData.credits}</span>
              <span className="text-xs">+</span>
            </div>
          )}

          {!userData ? (
            <button
              type="button"
              onClick={OnGetStarted}
              className="cursor-pointer rounded-md border border-white/15 px-3 py-1.5 text-xs text-white transition hover:bg-white/10 active:scale-95"
            >
              Get Started
            </button>
          ) : (
            <div className="relative">
              <button
                type="button"
                onClick={onprofileclick}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-xs text-white transition hover:bg-white/10 active:scale-95"
              >
                <img
                  className="h-5 w-5 rounded-full object-cover"
                  src={
                    userData.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.name ?? "User")}`
                  }
                  alt="profile"
                />
              </button>

              {openprofile && (
                <div className="absolute right-0 top-full z-50 mt-2 flex min-w-56 flex-col gap-2 rounded-md border border-white/15 bg-zinc-900 p-3 text-xs shadow-lg">
                  <span className="font-medium text-sm text-white truncate">
                    {userData.name}
                  </span>
                  <span className="text-sm text-zinc-400 truncate">{userData.email}</span>

                  <div className="flex md:hidden cursor-pointer rounded-md border border-white/15 px-3 py-1.5 text-xs text-white transition hover:bg-white/10 flex items-center gap-1 w-fit mt-1">
                    <Coins size={14} className="text-yellow-600" />
                    <span>Credits</span>
                    <span>{userData.credits}</span>
                    <span className="text-xs">+</span>
                  </div>

                  <div className="flex md:hidden rounded-md justify-center py-2 text-xs text-zinc-400 transition hover:text-white">
                    Pricing
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </motion.div>
  );
}

function Hero({ OnGetStarted }) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
      <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
        Build Stunning Websites
        <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
          with AI
        </span>
      </h1>

      <p className="mt-6 max-w-md text-xs leading-relaxed text-zinc-400 sm:text-sm">
        Describe your idea and let AI generate a modern, responsive,
        production-ready website.
      </p>

      <button
        onClick={OnGetStarted}
        className="mt-8 rounded-lg bg-white px-6 py-2.5 text-xs font-semibold text-black shadow-lg shadow-white/5 transition hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-110 cursor-pointer"
      >
        Get Started
      </button>
    </section>
  );
}

function Features() {
  return (
    <section className="mx-auto mt-24 grid w-full max-w-4xl gap-4 px-6 pb-24 sm:grid-cols-3">
      {features.map((f, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          key={i}
          className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
        >
          <h3 className="text-sm font-semibold text-white">{f.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">{f.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [openprofile, setOpenprofile] = useState(false);

  const { userData } = useSelector((state) => state.user);

  return (
    <>
      <div className="min-h-screen bg-black font-sans text-white antialiased">
        <Navbar
          OnGetStarted={() => {
            setOpen(true);
          }}
          userData={userData}
          openprofile={openprofile}
          onprofileclick={() => {
            setOpenprofile((prev) => !prev);
          }}
        />
        <main>
          <Hero
            OnGetStarted={() => {
              setOpen(true);
            }}
            userData={userData}
          />
          <Features />
        </main>
      </div>
      <AuthModal
        open={open}
        onclose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
