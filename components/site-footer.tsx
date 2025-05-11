import { DiscordLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "mailto:support@coursebite.ai",
        name: "Email Collection",
      },
      {
        href: "/pricing",
        name: "Pricing",
      },
      {
        href: "/faq",
        name: "FAQ",
      },
    ],
  },

  {
    label: "Community",
    items: [
      {
        href: "https://www.facebook.com/people/CourseBite/61572449074950/",
        name: "Facebook",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        href: "https://www.linkedin.com/company/coursebite-education-corporation/?viewAsMember=false",
        name: "LinkedIn",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        href: "mailto:support@coursebite.ai",
        name: "Email",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/terms",
        name: "Terms",
      },

      {
        href: "/privacy",
        name: "Privacy",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "",
    name: "Discord",
    icon: <DiscordLogoIcon className="h-4 w-4" />,
  },
  {
    href: "",
    name: "Twitter",
    icon: <InstagramLogoIcon className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative">
      {/* Local subtle gradient decorations */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl z-0"></div>
      
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2 relative z-10">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
              <img
                src='/logo.svg'
                className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Coursebite
              </span>
            </Link>
            <p className="max-w-xs text-gray-600 dark:text-gray-300">Learning Environment as a Platform</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {footerNavs.map((nav, index) => (
              <div key={nav.label}>
                <h2 className="mb-6 text-sm tracking-tighter font-medium uppercase bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  {nav.label}
                </h2>
                <ul className="gap-2 grid">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="cursor-pointer text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 duration-200 font-[450] text-sm transition-all hover:translate-x-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-t border-gray-100 dark:border-gray-800 py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            {footerSocials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 fill-gray-500 hover:fill-purple-600 dark:hover:fill-purple-400 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/terms" className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Coursebite Education Corporation
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
