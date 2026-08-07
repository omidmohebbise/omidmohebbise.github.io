'use client';

import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from './Header.module.css';

const stats = [
  { num: '13+', label: 'Years Experience' },
  { num: '6+',  label: 'Companies' },
  { num: '3',   label: 'Countries' },
];

const socials = [
  { href: 'https://www.linkedin.com/in/omidmohebbise', label: 'LinkedIn', icon: <Linkedin size={17} /> },
  { href: 'mailto:omidmohebbise@gmail.com',            label: 'Email',    icon: <Mail     size={17} /> },
  { href: 'https://www.github.com/omidmohebbise',      label: 'GitHub',   icon: <Github   size={17} /> },
  { href: 'https://x.com/omid_mohebbi_se',             label: 'Twitter',  icon: <Twitter  size={17} /> },
];

export default function Header() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* ── Left column ─────────────────────────── */}
          <div className="col-12 col-md-8">
            <h1 className={styles.name}>Omid Mohebbi</h1>
            <p className={styles.title}>
              Senior Software Engineer &amp; Solution Architect
            </p>
            <p className={styles.tagline}>
              Building event-driven microservices and cloud-native systems
              for fintech and enterprise — a decade across the Netherlands,
              Norway, and beyond.
            </p>

            <div className={styles.actions}>
              <a
                href="mailto:omidmohebbise@gmail.com"
                className={styles.btnPrimary}
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/omidmohebbise"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnGhost}
              >
                View LinkedIn
              </a>
            </div>

            <div className={styles.socialRow}>
              {socials.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column — stats card ────────────── */}
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className={styles.statsCard}>
              {stats.map(({ num, label }, i) => (
                <div key={label}>
                  <div className={styles.stat}>
                    <span className={styles.statNum}>{num}</span>
                    <span className={styles.statLabel}>{label}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className={styles.statDivider} />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
