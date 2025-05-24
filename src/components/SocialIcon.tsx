import React, { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  label: string; // a11y 用
};

export const SocialIcon = ({ href, children, label }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition"
  >
    {children}
  </a>
); 