import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AFFILIATE_LINK = "http://app.ac/7qp46L283";

const navItems = [
  { path: "/", label: "홈" },
  { path: "/discount-codes", label: "할인코드 & 프로모션" },
  { path: "/how-to-use", label: "사용방법 & 트러블슈팅" },
  { path: "/tips-guide", label: "꿀팁 & 비교 가이드" },
];

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="주요 내비게이션">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary" aria-label="아고다 할인코드 홈">
          <span className="text-secondary text-2xl">✈</span>
          <span>아고다 할인코드</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-button ml-2 text-sm py-2 px-4 inline-block"
          >
            할인 적용하기
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-button mt-2 text-sm py-3 px-4 block text-center"
          >
            할인 적용하기
          </a>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
