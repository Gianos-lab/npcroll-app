export function EmptyState() {
  return (
    <div className="empty-state flex-1 flex flex-col items-center justify-center text-center pt-10">
      <img
        src="/roll_white.svg"
        alt="d20"
        className="w-12 h-12 mb-3 opacity-90"
      />
      <p className="empty-title text-[0.95rem]">
        No NPC has been summoned yet.
      </p>
    </div>
  );
}
