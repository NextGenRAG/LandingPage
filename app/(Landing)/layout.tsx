import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default async function LandingLayout({
  children,
}: LandingLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden relative">
        {children}
      </main>
      <div className="relative z-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[120%] bg-pink-500/25 dark:bg-pink-600/30 rounded-full blur-[150px]"></div>
          <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-purple-500/25 dark:bg-purple-600/30 rounded-full blur-[150px]"></div>
        </div>
        <div className="relative z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm">
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
