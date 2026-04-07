const AFFILIATE_LINK = "http://app.ac/7qp46L283";

interface CtaButtonProps {
  text?: string;
  variant?: "primary" | "outline" | "copy";
  code?: string;
  className?: string;
}

const CtaButton = ({ text = "할인 적용하기", variant = "primary", code, className = "" }: CtaButtonProps) => {
  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      alert(`할인코드 "${code}"가 복사되었습니다!`);
    }
  };

  if (variant === "copy" && code) {
    return (
      <div className={`flex flex-col sm:flex-row gap-2 ${className}`}>
        <button
          onClick={handleCopy}
          className="bg-muted text-foreground font-mono px-4 py-3 rounded-lg border border-border text-sm flex items-center justify-center gap-2 hover:bg-muted/80 transition-colors"
        >
          <span className="truncate">{code}</span>
          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="cta-button text-sm text-center"
        >
          할인 적용하기 →
        </a>
      </div>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`cta-button-outline text-center inline-block ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`cta-button text-center inline-block ${className}`}
    >
      {text}
    </a>
  );
};

export default CtaButton;
