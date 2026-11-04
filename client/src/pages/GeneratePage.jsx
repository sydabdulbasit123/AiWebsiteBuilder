import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { serverUrl } from "../App.jsx";
import axios from "axios";

export default function GeneratePage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    try {
      // TODO: call your backend here
      const { data } = await axios.post(
        `${serverUrl}/api/website/generate`,
        { prompt },
        { withCredentials: true },
      );
      console.log("Website generated:", data);
      // navigate(`/editor/${data.websiteId}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="text-white/90 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-semibold">Genweb.ai</span>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Build Websites with
            <span className="block text-neutral-300">Real AI Power</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-xs text-neutral-500">
            This process may take several minutes. genweb.ai focuses on quality,
            not shortcuts.
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-14 max-w-2xl">
          <label htmlFor="prompt" className="text-sm font-semibold">
            Describe your website
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your website in detail..."
            rows={6}
            className="mt-3 w-full resize-none rounded-lg border border-neutral-900 bg-neutral-950 p-4 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-700 focus:outline-none"
          />

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || loading}
              className="rounded-md bg-white px-8 py-2.5 text-xs font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {loading ? "Generating..." : "Generate Website"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
