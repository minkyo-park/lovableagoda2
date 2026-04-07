import { Link } from "react-router-dom";

const AFFILIATE_LINK = "http://app.ac/7qp46L283";

const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">아고다 할인코드</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              아고다(Agoda) 할인코드, 카드사 프로모션, 간편결제 할인 등 모든 할인 정보를 한 곳에 모았습니다.
              예약 전 확인하고 최대 할인을 받으세요.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">바로가기</h3>
            <nav aria-label="푸터 내비게이션">
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/" className="hover:opacity-100 transition-opacity">홈</Link></li>
                <li><Link to="/discount-codes" className="hover:opacity-100 transition-opacity">할인코드 & 프로모션</Link></li>
                <li><Link to="/how-to-use" className="hover:opacity-100 transition-opacity">사용방법 & 트러블슈팅</Link></li>
                <li><Link to="/tips-guide" className="hover:opacity-100 transition-opacity">꿀팁 & 비교 가이드</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">지금 할인 받기</h3>
            <p className="text-sm opacity-80 mb-4">
              아고다 전용 할인 링크를 통해 접속하면 최대 15% 할인을 받을 수 있습니다.
            </p>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-button text-sm py-3 px-6 inline-block"
            >
              아고다 할인 적용하기 →
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
          <p>© 2026 아고다 할인코드. 본 사이트는 아고다 공식 제휴 파트너 사이트입니다.</p>
          <p className="mt-2">
            면책 조항: 할인코드 및 프로모션 정보는 수집 시점 기준이며, 예고 없이 변경·종료될 수 있습니다.
            실제 예약 전 아고다 공식 사이트에서 최종 조건을 반드시 확인하시기 바랍니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
