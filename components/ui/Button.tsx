import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-700 border border-indigo-600"
      : variant === "secondary"
        ? "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200"
        : "bg-transparent text-slate-900 hover:bg-slate-50 border border-transparent";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
        styles,
        className
      )}
    >
      {children}
      <span aria-hidden className="text-base leading-none">→</span>
    </a>
  );
}
