export function ErrorState() {
  return (
    <div className="error-state">
      <p className="error-title">
        The tavern is empty for those filters.
      </p>
      <p className="error-body">
        The goblins couldn&apos;t find anyone with that vibe. Try
        changing <strong>Race</strong> or{" "}
        <strong>Alignment</strong>, or set one of the filters
        back to <strong>Random</strong> and roll again.
      </p>
    </div>
  );
}
