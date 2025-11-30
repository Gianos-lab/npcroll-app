"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}


interface NavTabsProps {
  tabs: string[];
  size?: 'sm' | 'md' | 'lg';
}

export default function NavTabs({ tabs, size = 'md' }: NavTabsProps) {
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <div className="flex flex-wrap items-center gap-4">
      {tabs.map((tab) => (
        <Tab text={tab} selected={selected === tab} setSelected={setSelected} key={tab} size={size} />
      ))}
    </div>
  );
}


const Tab = ({ text, selected, setSelected, size = 'md' }: TabProps & { size?: 'sm' | 'md' | 'lg' }) => {
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl';
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        `relative rounded-md p-2 ${textSize} transition-all`,
        selected ? "text-white font-bold" : "text-slate-300 hover:font-black",
      )}
    >
      <p className="relative z-50 min-w-20">{text}</p>
    </button>
  );
};
