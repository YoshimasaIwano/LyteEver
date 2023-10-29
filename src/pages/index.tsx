// @ts-nocheck
import Link from "next/link";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useSnackbar } from "notistack";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auth = useAuthContext();
  const isConnected = auth?.user !== undefined;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!isConnected) {
      enqueueSnackbar("You are not connected to a wallet.", {
        variant: "warning",
        autoHideDuration: 5000,
      });
    }
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <header>
        <h1 className="text-4xl mb-8 font-bold text-center">
          Welcome to Med Chain
        </h1>
      </header>

      <section className="mb-32 grid gap-8 justify-items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link href="/user">
          <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>User Page</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Navigate to User page.
            </p>
          </button>
        </Link>

        <Link href="/hospital">
          <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>Hospital Page</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Navigate to Hospital page.
            </p>
          </button>
        </Link>
      </section>
    </main>
  );
}
