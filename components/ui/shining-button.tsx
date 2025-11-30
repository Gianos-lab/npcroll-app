import { ArrowRight } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export default function ShiningButton({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-teal-400 bg-transparent px-6 py-2 font-display font-medium text-white transition-all duration-100 [box-shadow:5px_5px_rgb(58_175_169_/_10%)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(58_175_169_/_10%)]"
    >
      <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
      <span className="relative flex items-center gap-2">
        {children}
        <ArrowRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
      </span>
    </button>
  );
}
