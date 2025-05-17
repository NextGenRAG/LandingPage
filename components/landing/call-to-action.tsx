"use client";

export default function CallToAction() {
    return (
      <section id="cta" className="relative py-8">
        <div className="px-5 py-14 lg:px-0 relative z-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-y-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-10 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="mx-auto max-w-2xl text-balance text-center text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent md:text-3xl lg:text-4xl">
              Be the first to know about new features, special offers, and more.
            </h3>
            <p className="mx-auto text-balance text-center text-gray-700 dark:text-gray-300 md:text-lg">
              Gain access to the education platform of the future!
            </p>
            <a
              href="https://links.silversnake.ai/widget/form/nmyVk94rRWyljKQ7Xipe"
              className="flex h-10 w-48 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Sign up Now!
            </a>
          </div>
        </div>
      </section>
    );
  }