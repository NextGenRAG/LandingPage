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
      <div className="relative z-20 bg-white dark:bg-gray-950">
        <SiteFooter />
      </div>
    </>
  );
}
