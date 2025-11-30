type RollButtonProps = {
  onClick: () => void;
  disabled: boolean;
  isPackAvailable: boolean;
};

export function RollButton({
  onClick,
  disabled,
  isPackAvailable,
}: RollButtonProps) {
  return (
    <div className="w-full flex justify-center mt-[1.1rem]">
      <button
        className="npc-button"
        type="button"
        onClick={onClick}
        disabled={disabled || !isPackAvailable}
      >
        <span>
          {isPackAvailable ? "ROLL NPC" : "PACK COMING SOON"}
        </span>
        <div className="icon">
          <img src="/roll.svg" alt="Roll d20" />
        </div>
      </button>
    </div>
  );
}
