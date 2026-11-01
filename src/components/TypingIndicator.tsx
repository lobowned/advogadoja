interface TypingIndicatorProps {
  variant?: 'dots' | 'wave';
}

const TypingIndicator = ({ variant = 'dots' }: TypingIndicatorProps) => {
  if (variant === 'wave') {
    return (
      <div className="flex items-end gap-[3px] h-5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-[3px] h-5 bg-green-600 rounded-full animate-typing-wave origin-bottom"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 bg-gradient-to-br from-green-500 to-green-600 rounded-full animate-typing-dot shadow-sm"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default TypingIndicator;
