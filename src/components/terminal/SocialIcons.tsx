import { Mail, Phone } from "lucide-react";
import { siGithub } from "simple-icons";
import { contacto } from "../../data/cv";

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

function BrandIcon({ path, label }: { path: string; label: string }) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  );
}

function SocialIcons() {
  const [email, phone, , linkedin, github] = contacto.channels;

  const links = [
    { label: email.label, href: email.href, icon: <Mail className="h-5 w-5 shrink-0" strokeWidth={1.75} /> },
    { label: phone.label, href: phone.href, icon: <Phone className="h-5 w-5 shrink-0" strokeWidth={1.75} /> },
    { label: linkedin.label, href: linkedin.href, icon: <BrandIcon path={LINKEDIN_PATH} label="LinkedIn" /> },
    { label: github.label, href: github.href, icon: <BrandIcon path={siGithub.path} label="GitHub" /> },
  ];

  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          title={link.label}
          aria-label={link.label}
          className="text-term-green-dim transition-colors hover:text-term-green"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
