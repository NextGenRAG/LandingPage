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
        <div className="relative z-10 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-t border-purple-100 dark:border-purple-900/20">
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
