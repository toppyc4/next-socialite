"use client";
import React, { ElementType } from "react";
import Link from "next/link";

export type Props = {
  type?: "submit" | "button";
  label?: string;
  onClick?: () => void;
  newTab?: boolean;
  href?: string;
  className?: string;
  el?: "button" | "link" | "a";
  disabled?: boolean;
  invert?: boolean;
  children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  el: elFormProps = "link",
  type = "button",
  onClick,
  label,
  href,
  className,
  newTab,
  disabled,
  invert,
  children,
}) => {
  let el = elFormProps;

  const newTabProps = newTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  const content = (
    <div>
      <span>{label}</span>
      {children}
    </div>
  );
  if (onClick || type === "submit") el = "button";

  if (el === "link") {
    return (
      <Link href={href || ""} className={className} {...newTabProps}>
        {content}
      </Link>
    );
  }
  const Element: ElementType = el;
  return (
    <Element
      href={href}
      className={className}
      type={type}
      {...newTabProps}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </Element>
  );
};
