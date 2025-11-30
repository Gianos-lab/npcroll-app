
interface FeedbackButtonProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function FeedbackButton({ size = 'md' }: FeedbackButtonProps) {
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-2xl' : 'text-base';
  const height = size === 'sm' ? 'h-9' : size === 'lg' ? 'h-12' : 'h-10';
  const minWidth = size === 'sm' ? 'min-w-[140px]' : size === 'lg' ? 'min-w-[180px]' : 'min-w-[140px]';
  return (
    <a
      href="/feedback"
      className={`group relative ${minWidth} overflow-hidden rounded-md bg-[#3AAFA9] px-4 font-semibold transition-colors duration-300 hover:bg-[#2B7A78] flex items-center justify-center font-display ${height}`}
    >
      <span className={`text-[#17252A] px-2 ${textSize}`}>Feedback</span>
    </a>
  );
}
