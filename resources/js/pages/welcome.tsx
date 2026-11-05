import { Head, Link, usePage } from "@inertiajs/react";
import { dashboard, login } from "@/routes";
import IconPos from "../assets/icons/logo_albay.jpeg";

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome - ALBAY POS" />

            {/* Latar belakang terang yang bersih */}
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFC] p-6 text-[#1b1b18] sm:p-8">
                <main className="flex w-full max-w-2xl flex-col items-center justify-center">
                    {/* Kontainer Logo */}
                    <div className="w-full max-w-[500px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-700 hover:scale-[1.02]">
                        <img
                            src={IconPos}
                            alt="Logo ALBAY POS"
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    {/* Teks Created By */}
                    <div className="mt-8 text-center">
                        <p className="text-sm font-medium tracking-widest text-[#706f6c] uppercase">
                            Created By{" "}
                            <span className="font-bold text-[#1b1b18]">
                                Anhari
                            </span>
                        </p>
                        <p className="mt-1.5 text-xs text-gray-400">
                            Version 1.0 &copy; 2026 All rights reserved.
                        </p>
                    </div>

                    {/* Tombol Login Tengah */}
                    <div className="mt-10">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-flex items-center justify-center rounded-full bg-[#1b1b18] px-10 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#3E3E3A] hover:shadow-xl"
                            >
                                Buka Dashboard
                            </Link>
                        ) : (
                            <Link
                                href={login()}
                                className="inline-flex items-center justify-center rounded-full bg-[#1b1b18] px-10 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#3E3E3A] hover:shadow-xl"
                            >
                                Masuk ke Aplikasi
                            </Link>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}
