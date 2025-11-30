type LoadingStateProps = {
  message: string;
};

export function LoadingState({ message }: LoadingStateProps) {
  return (
    <div className="loading-state">
      <img
        src="/roll_white.svg"
        alt=""
        className="loading-die"
      />
      <p className="loading-text">{message}</p>
    </div>
  );
}
