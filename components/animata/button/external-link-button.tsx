import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface ButtonTitleProps {
  /**
   * Button title
   */
  text?: string;
  /**
   * Link target for the button
   */
  href?: string;
}

export default function ExternalLinkButton({ text = "Open Link", href = "/feedback" }: ButtonTitleProps) {
  return (
    <a href={href} className="text-md group inline-flex items-center justify-center gap-1 rounded-md bg-[#3AAFA9] px-6 py-3 text-[#17252A] hover:bg-[#2B7A78] hover:cursor-pointer font-display tracking-wider">
      <span className="leading-none">{text}</span>
      <ArrowTopRightIcon
        height={20}
        width={20}
        className="opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:opacity-100"
      />
    </a>
  );
}
