import Image from 'next/image';

export default function Dashboard() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-semibold">Dashboard</h1>
                <Image
                    className="dark:invert"
                    src={nextImg}
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        Get started by editing{" "}
                        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                            app/Dashboard/page.js
                        </code>
                        .
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>
            </main>
        </div>
    );
} 