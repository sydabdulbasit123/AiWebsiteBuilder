import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../libs/Firebase.googleauth";
import axios from "axios";
import { serverUrl } from "../App.jsx";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

const handleGoogleAuth = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const { displayName, photoURL, email } = result.user;

    const { data } = await axios.post(
      `${serverUrl}/api/auth/google`,
      {
        name: displayName,
        email,
        avatar: photoURL,
      },
      { withCredentials: true },
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default function AuthModal({ open, onclose }) {
  return (
    <>
      {open && (
        <div
          onClick={onclose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 text-center shadow-2xl shadow-black/60"
          >
            <button
              onClick={onclose}
              type="button"
              aria-label="Close"
              className="absolute right-4 top-3 rounded p-1 text-sm text-zinc-500 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              ✕
            </button>

            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-zinc-400">
              AI-powered website builder
            </span>

            <h2
              id="auth-title"
              className="mt-4 text-2xl font-semibold tracking-tight text-white"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GenWeb.ai
              </span>
            </h2>

            <button
              onClick={handleGoogleAuth}
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 cursor-pointer"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3 text-[11px] text-zinc-500">
              <span className="h-px flex-1 bg-white/10" />
              Secure Login
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-[11px] leading-relaxed text-zinc-500">
              By continuing, you agree to our{" "}
              <a href="/terms" className="underline hover:text-zinc-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="underline hover:text-zinc-300">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}
