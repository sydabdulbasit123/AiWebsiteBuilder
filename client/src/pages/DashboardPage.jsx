import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 text-sm font-medium text-white/90 transition hover:text-white cursor-pointer
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <ArrowLeft size={18} />
          Dashboard
        </button>

        <button
          onClick={() => navigate("/generate")}
          className="rounded-md bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          + New Website
        </button>
      </header>

      {/* Welcome */}
      <main className="mx-auto max-w-3xl px-6 pt-10">
        <p className="text-xs text-neutral-400">Welcome Back</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">
          {userData.name}
        </h1>

        {/* Websites list goes here */}
        <section className="mt-10" aria-label="Your websites">
          <div className="rounded-lg border border-dashed border-neutral-800 px-6 py-16 text-center">
            <p className="text-sm text-neutral-400">
              You haven't created any websites yet.
            </p>
            <button
              onClick={() => navigate("/generate")}
              className="mt-4 rounded-md bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-neutral-200"
            >
              Create your first website
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
