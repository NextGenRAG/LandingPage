export default function ClientSection() {
  return (
    <section
      id="clients"
      className="relative py-12 mx-auto max-w-[80rem] px-6 md:px-8"
    >
      {/* Background gradient decorations - made more prominent */}
      <div className="absolute -top-40 -left-40 w-[120%] h-[120%] bg-purple-500/20 dark:bg-purple-600/25 rounded-full blur-[150px]"></div>
      <div className="absolute -bottom-40 -right-40 w-[120%] h-[120%] bg-pink-500/20 dark:bg-pink-600/25 rounded-full blur-[150px]"></div>
      
      <div className="py-14 relative z-10">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            TRUSTED BY STUDENTS AND EDUCATORS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li className="transition-all duration-300 hover:scale-110">
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/standford-logo.png?width=128&height=48&name=standford-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100"
                  alt="Stanford University"
                />
              </li>
              <li className="transition-all duration-300 hover:scale-110">
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/princetone-university-logo.png?width=128&height=48&name=princetone-university-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100"
                  alt="Princeton University"
                />
              </li>
              <li className="transition-all duration-300 hover:scale-110">
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/mit-logo.png?width=128&height=48&name=mit-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100"
                  alt="MIT"
                />
              </li>

              <li className="transition-all duration-300 hover:scale-110">
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/uoc-logo.png?width=128&height=48&name=uoc-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100"
                  alt="University of California"
                />
              </li>
              <li className="transition-all duration-300 hover:scale-110">
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/yu-logo.png?width=128&height=48&name=yu-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert opacity-70 hover:opacity-100"
                  alt="Yale University"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
