import { cn } from "@/src/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "white" | "dark";
}

export default function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-white rounded-lg p-2",
        className,
      )}
    >
      <img
        src="/logo_pizolub.png"
        alt="Pizolub Logo"
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
