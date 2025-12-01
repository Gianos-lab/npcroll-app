"use client";

import * as React from "react";

interface TouchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onPress?: () => void;
  children: React.ReactNode;
}

/**
 * A button component that works reliably on touch devices (iPad/iOS).
 * Uses native event listeners instead of React's synthetic events.
 */
export function TouchButton({ onPress, children, className, disabled, ...props }: TouchButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const button = buttonRef.current;
    if (!button || !onPress) return;

    const handleClick = (e: Event) => {
      if (disabled) return;
      e.preventDefault();
      onPress();
    };

    // Use native event listeners
    button.addEventListener('click', handleClick);
    button.addEventListener('touchend', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
      button.removeEventListener('touchend', handleClick);
    };
  }, [onPress, disabled]);

  return (
    <button
      ref={buttonRef}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
