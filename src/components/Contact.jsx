import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Send } from "lucide-react";
import { profile } from "../data/portfolio";
import { LinkedInIcon } from "./BrandIcons";
import Reveal from "./Reveal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

function Field({ id, label, error, textarea, ...props }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-zinc-300">
        {label} <span className="text-violet" aria-hidden="true">*</span>
      </label>
      <Tag
        id={id}
        name={id}
        required
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-[0.95rem] text-zinc-100 placeholder:text-zinc-500 transition focus:bg-white/[0.05] focus:outline-none focus-visible:border-violet focus-visible:ring-2 focus-visible:ring-violet/40 ${
          error ? "border-rose-400/70" : "border-white/10 hover:border-white/20"
        } ${textarea ? "min-h-36 resize-y" : ""}`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", text: "" });
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = "Please enter your name.";
    if (!values.email.trim()) er.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(values.email.trim())) er.email = "Please enter a valid email, like name@company.com.";
    if (!values.subject.trim()) er.subject = "Please add a subject.";
    if (!values.message.trim()) er.message = "Please write a short message.";
    return er;
  };

  const onCopy = async () => {
    const ok = await copyText(profile.email);
    setCopied(ok);
    setStatus(ok ? { type: "info", text: "Email address copied to clipboard." } : { type: "info", text: `Copy failed — the address is ${profile.email}` });
    if (ok) setTimeout(() => setCopied(false), 2200);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    const first = Object.keys(er)[0];
    if (first) {
      document.getElementById(first)?.focus();
      setStatus({ type: "error", text: "Please fix the highlighted fields." });
      return;
    }

    // Option A: a form service endpoint is configured → send directly.
    if (profile.formEndpoint) {
      setSending(true);
      try {
        const res = await fetch(profile.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...values, _replyto: values.email, _subject: `Portfolio: ${values.subject}` }),
        });
        if (!res.ok) throw new Error();
        setValues({ name: "", email: "", subject: "", message: "" });
        setStatus({ type: "success", text: "Thanks — your message was sent. I'll get back to you soon." });
      } catch {
        setStatus({ type: "error", text: `Something went wrong. Please email me directly at ${profile.email}.` });
      } finally {
        setSending(false);
      }
      return;
    }

    // Option B: no backend → open the visitor's email app with everything filled in.
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setStatus({
      type: "info",
      text: `Your email app should open with the message ready to send. If it doesn't, email me at ${profile.email}.`,
    });
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 bottom-0 h-[460px] w-[460px] rounded-full bg-violet/[0.10] blur-[130px]" />
        <div className="absolute right-0 top-10 h-[360px] w-[360px] rounded-full bg-cyan/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="text-zinc-500">06</span>
              <span className="h-px w-8 bg-zinc-700" aria-hidden="true" />
              Contact
            </p>
            <h2 id="contact-title" className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
              Have an opportunity or project in mind? <em className="accent-text italic">Let's connect.</em>
            </h2>
          </Reveal>

          <Reveal delay={120} className="mt-10 space-y-3">
            <div className="glass flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4 pl-5">
              <a href={`mailto:${profile.email}`} className="group flex min-w-0 items-center gap-3 text-zinc-100">
                <Mail size={18} className="shrink-0 text-violet" aria-hidden="true" />
                <span className="truncate text-[0.95rem] group-hover:text-white">{profile.email}</span>
              </a>
              <button
                type="button"
                onClick={onCopy}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-violet/50 hover:text-white"
              >
                {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center justify-between gap-3 rounded-2xl p-4 pl-5 text-zinc-100 transition hover:border-violet/30"
            >
              <span className="flex items-center gap-3">
                <LinkedInIcon size={17} className="text-violet" />
                <span className="text-[0.95rem]">linkedin.com/in/zaid-sheikhhh</span>
              </span>
              <ArrowUpRight size={18} className="text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <form noValidate onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Name" autoComplete="name" placeholder="Your name" value={values.name} onChange={update} error={errors.name} />
              <Field id="email" label="Email" type="email" autoComplete="email" placeholder="you@company.com" value={values.email} onChange={update} error={errors.email} />
            </div>
            <div className="mt-5">
              <Field id="subject" label="Subject" placeholder="QA role at…" value={values.subject} onChange={update} error={errors.subject} />
            </div>
            <div className="mt-5">
              <Field id="message" label="Message" textarea placeholder="Tell me a bit about the role or project." value={values.message} onChange={update} error={errors.message} />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-50 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-white hover:shadow-[0_10px_40px_-8px_rgba(167,139,250,0.7)] disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <Send size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
            <p
              role="status"
              aria-live="polite"
              className={`mt-4 min-h-5 text-sm ${
                status.type === "error" ? "text-rose-300" : status.type === "success" ? "text-emerald-300" : "text-zinc-400"
              }`}
            >
              {status.text}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
