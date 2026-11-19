import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

const btn =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:-translate-y-0.5 hover:border-violet/50 hover:bg-violet/10 hover:text-white";

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-2.5" aria-label="Social profiles">
      <li>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={btn}>
          <LinkedInIcon size={16} />
          <span className="sr-only">LinkedIn (opens in a new tab)</span>
        </a>
      </li>
      {profile.github && (
        <li>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={btn}>
            <GitHubIcon size={17} />
            <span className="sr-only">GitHub (opens in a new tab)</span>
          </a>
        </li>
      )}
      <li>
        <a href={`mailto:${profile.email}`} className={btn}>
          <Mail size={16} aria-hidden="true" />
          <span className="sr-only">Email {profile.email}</span>
        </a>
      </li>
    </ul>
  );
}
