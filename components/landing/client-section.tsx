export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY STUDENTS AND EDUCATORS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/standford-logo.png?width=128&height=48&name=standford-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/princetone-university-logo.png?width=128&height=48&name=princetone-university-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/mit-logo.png?width=128&height=48&name=mit-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>

              <li>
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/uoc-logo.png?width=128&height=48&name=uoc-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
              <li>
                <img
                  src={`https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/yu-logo.png?width=128&height=48&name=yu-logo.png`}
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
