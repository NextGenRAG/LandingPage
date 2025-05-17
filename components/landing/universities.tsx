import Marquee from "../magicui/marquee";

const img_urls = [
  "https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/standford-logo.png?width=128&height=48&name=standford-logo.png",
  "https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/princetone-university-logo.png?width=128&height=48&name=princetone-university-logo.png",
  "https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/mit-logo.png?width=128&height=48&name=mit-logo.png",
  "https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/uoc-logo.png?width=128&height=48&name=uoc-logo.png",
  "https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/uomichigan-logo.png?width=127&height=27&name=uomichigan-logo.png",
  "https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/penn-uop-logo.png?width=128&height=44&name=penn-uop-logo.png",
  "https://www.mindgrasp.ai/hs-fs/hubfs/mindgrasp_hatch/images/homepage/yu-logo.png?width=128&height=48&name=yu-logo.png",
  "https://banner2.cleanpng.com/20180601/kv/avoix6lc9.webp",
];

export function Universities() {
  return (
    <section id="press" className="relative py-12">
      <div className="py-14 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            FEATURED IN
          </h3>
          <div className="relative mt-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl">
            <Marquee className="max-w-full [--duration:40s]">
              {img_urls.map((logo, idx) => (
                <img
                  key={idx}
                  src={`${logo}`}
                  className="h-12 w-44 px-4 transition-all duration-300 hover:scale-110 dark:brightness-0 dark:invert opacity-70 hover:opacity-100"
                  alt={`logo-${idx}`}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-gray-900"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-gray-900"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
