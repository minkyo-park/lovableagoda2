import { Link } from "react-router-dom";
import SeoHead from "@/components/SeoHead";
import CtaButton from "@/components/CtaButton";
import heroHome from "@/assets/hero-home.jpg";
import cardPromotions from "@/assets/card-promotions.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import destinationBangkok from "@/assets/destination-bangkok.jpg";
import destinationBali from "@/assets/destination-bali.jpg";
import destinationTokyo from "@/assets/destination-tokyo.jpg";
import savingsConcept from "@/assets/savings-concept.jpg";

const AFFILIATE_LINK = "http://app.ac/7qp46L283";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "아고다 할인코드",
  "url": "https://agd.dongbaektour.co.kr",
  "description": "아고다 할인코드, 카드사 프로모션, 사용법, 꿀팁 총정리",
  "publisher": {
    "@type": "Organization",
    "name": "아고다 할인코드",
    "url": "https://agd.dongbaektour.co.kr"
  }
};

const HomePage = () => {
  return (
    <>
      <SeoHead
        title="아고다 할인코드 2026 — 최대 15% 할인 쿠폰 & 카드 프로모션 총정리"
        description="2026년 4월 최신 아고다 할인코드, 카드사 프로모션, 카카오페이 할인 총정리. 최대 15% 할인 쿠폰 사용법부터 꿀팁까지 한눈에 확인하세요."
        path="/"
        schema={homeSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" aria-label="메인 배너">
        <div className="absolute inset-0">
          <img src={heroHome} alt="아고다 할인코드로 저렴한 호텔 예약" width={1920} height={800} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-primary-foreground">
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            아고다 할인코드 2026<br />
            <span className="text-secondary">최대 15% 할인</span> 총정리
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
            할인코드, 카드사 프로모션, 월별 특가 이벤트, 간편결제 할인까지 —
            예약 전 이 사이트만 확인하면 최대 할인을 놓치지 않습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <CtaButton text="지금 할인 적용하기 →" />
            <Link to="/discount-codes" className="cta-button-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-center">
              할인코드 전체 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 아고다란? */}
      <section className="section-container" aria-label="아고다 소개">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">아고다(Agoda)란?</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Agoda.com은 세계 1위 온라인 여행사 그룹인 <strong>Booking Holdings</strong> 소속으로,
              유럽에는 Booking.com, 아시아에는 Agoda.com이 대표 브랜드입니다.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span>싱가포르, 방콕, 서울, 도쿄 등 주요 도시에 지사 운영</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span>한국 법인: 아고다페이먼트코리아(유) — 원화 결제 시 국내 가맹점 실적</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span>카카오페이, 네이버페이, PAYCO 등 다양한 간편결제 지원</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span>온라인 여행사 중 가장 많은 신용카드 프로모션 지원</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-success mt-1">✓</span>
                <span>최저가 보장제 운영</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={mobileBooking} alt="아고다 모바일 및 웹 예약 화면" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* 주요 할인코드 요약 */}
      <section className="bg-muted" aria-label="할인코드 요약">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">현재 사용 가능한 주요 할인코드</h2>
          <p className="text-muted-foreground text-center mb-8">2026년 4월 기준 · 매월 업데이트</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "전 세계 기본", rate: "5%", target: "전 세계 모든 숙소", note: "기존/신규 모두 가능" },
              { title: "신규 회원 전용", rate: "7%", target: "홍콩, 스페인, 독일, 라오스", note: "첫 예약 고객만" },
              { title: "인기 여행지", rate: "8%", target: "태국, 인도네시아, 이탈리아", note: "$100 이상 결제 시" },
              { title: "인플루언서 코드", rate: "최대 12%", target: "전 세계", note: "중복 적용 가능, ~4/30" },
              { title: "국내숙소 전용", rate: "5%", target: "한국 내 모든 숙소", note: "~4/30, 웹 전용" },
              { title: "공식 할인코드", rate: "최대 15%", target: "일부 지정 호텔", note: "대상 숙소 제한적" },
            ].map((item, i) => (
              <article key={i} className="discount-card">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <span className="info-badge bg-secondary text-secondary-foreground">{item.rate}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">대상: {item.target}</p>
                <p className="text-xs text-muted-foreground mb-4">{item.note}</p>
                <CtaButton text="할인 적용하기" className="w-full text-sm py-2" />
              </article>
            ))}
          </div>

          <div className="mt-8 p-4 bg-warning/10 border border-warning/30 rounded-lg">
            <h3 className="font-bold text-sm mb-2">⚠️ 핵심 주의사항</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• 할인코드는 <strong>프로모션 전용 링크</strong>를 통해 접속해야만 입력란이 활성화됩니다</li>
              <li>• 일반 검색으로 접속 시 '유효하지 않은 코드' 오류가 발생할 수 있습니다</li>
              <li>• 대부분의 할인코드는 PC 웹/모바일 웹에서만 적용 (앱 적용 불가 경우 다수)</li>
              <li>• 할인코드는 한 번에 하나만 적용 가능합니다</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 카드사 프로모션 */}
      <section className="section-container" aria-label="카드사 프로모션">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <img src={cardPromotions} alt="아고다 카드사 프로모션 신용카드" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">카드사 프로모션 요약</h2>
            <p className="text-muted-foreground mb-4">
              삼성카드, 신한카드, KB국민카드 등 10개 이상 카드사와 제휴한 아고다만의 특별 할인 프로모션을 확인하세요.
            </p>
          </div>
        </div>
        <div className="table-responsive">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-3 text-left rounded-tl-lg">카드사</th>
                <th className="p-3 text-left">기본 할인</th>
                <th className="p-3 text-left">특정 지역</th>
                <th className="p-3 text-left">유효기간</th>
                <th className="p-3 text-left rounded-tr-lg">비고</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["삼성카드", "최대 7%", "인니/말레이/이탈리아 10%", "~4/30", "LINK 혜택"],
                ["신한카드", "7%", "인니/말레이/이탈리아 10%", "~6/30", "선착순 자동적용"],
                ["우리카드", "7%", "특정 지역 10%", "~6/30", "핀번호 입력"],
                ["NH농협", "7%", "말레이/스페인/이탈리아 10%", "~6/30", "신용/체크 모두"],
                ["KB국민", "최대 10%", "특정 지역 추가", "월별 갱신", "전용 페이지"],
                ["토스뱅크", "7%", "한국/태국/베트남 10%", "~28/8/31", "장기 이벤트"],
                ["마스터카드", "최대 15%", "-", "월별 갱신", "전 카드 브랜드"],
                ["카카오페이", "11%", "전 세계 숙소", "월별 갱신", "최대 $100"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                  {row.map((cell, j) => (
                    <td key={j} className="p-3 border-b border-border">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-6">
          <Link to="/discount-codes" className="cta-button inline-block">카드사 프로모션 상세 보기 →</Link>
        </div>
      </section>

      {/* 인기 여행지 */}
      <section className="bg-muted" aria-label="인기 여행지">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">인기 여행지 할인 특가</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: destinationBangkok, name: "방콕, 태국", desc: "8% 할인코드 + 카드사 최대 15% 추가", alt: "방콕 태국 여행지" },
              { img: destinationBali, name: "발리, 인도네시아", desc: "8% 할인코드 + 삼성/신한카드 10%", alt: "발리 인도네시아 여행지" },
              { img: destinationTokyo, name: "도쿄, 일본", desc: "5% 기본 할인 + 심야 특가 최대 20%", alt: "도쿄 일본 여행지" },
            ].map((dest, i) => (
              <article key={i} className="rounded-xl overflow-hidden card-hover bg-card">
                <img src={dest.img} alt={dest.alt} width={800} height={600} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{dest.desc}</p>
                  <CtaButton text="특가 확인하기" className="w-full text-sm py-2" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 진행중 프로모션 */}
      <section className="section-container" aria-label="진행 중인 프로모션">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">현재 진행 중인 프로모션</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "더블데이 세일", desc: "프로모션 대상 숙소 15% 추가 할인", period: "~4월 11일", badge: "HOT" },
            { name: "타이페이 나이스 스테이", desc: "대만 타이페이 숙소 최대 23% 할인", period: "~4월 30일", badge: "NEW" },
            { name: "엘리트 이스케이프", desc: "두바이, 방콕, 푸켓 럭셔리 숙소 최대 40% 할인", period: "~6월 30일", badge: "럭셔리" },
            { name: "국내숙소 프로모션", desc: "국내 호텔 최대 25% 할인", period: "상시", badge: "상시" },
          ].map((promo, i) => (
            <article key={i} className="discount-card flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold">{promo.name}</h3>
                  <span className="info-badge bg-primary/10 text-primary text-xs">{promo.badge}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{promo.desc}</p>
                <p className="text-xs text-muted-foreground">기간: {promo.period}</p>
              </div>
              <CtaButton text="할인 보기" className="text-sm py-2 px-4 flex-shrink-0 w-full sm:w-auto" />
            </article>
          ))}
        </div>
      </section>

      {/* 절약 팁 CTA */}
      <section className="relative overflow-hidden" aria-label="절약 팁">
        <div className="absolute inset-0">
          <img src={savingsConcept} alt="아고다 할인으로 여행 경비 절약" width={800} height={600} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative section-container text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">최대 할인을 받는 방법이 궁금하신가요?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            VIP 할인 + 카드사 프로모션 + 할인코드 + 캐시백 리워드를 조합하면 체감 30~50% 할인도 가능합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/tips-guide" className="cta-button inline-block">꿀팁 가이드 보기 →</Link>
            <Link to="/how-to-use" className="cta-button-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-center inline-block">사용방법 보기</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container" aria-label="자주 묻는 질문">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">자주 묻는 질문 (FAQ)</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "아고다 할인코드는 누구나 사용할 수 있나요?", a: "네, 대부분의 할인코드는 기존 회원과 신규 회원 모두 사용할 수 있습니다. 단, 신규 회원 전용 코드(7%)는 아고다에서 첫 예약하는 고객만 사용 가능합니다." },
            { q: "할인코드 입력란이 보이지 않아요.", a: "반드시 프로모션 전용 링크를 통해 아고다에 접속해야 합니다. 일반 검색으로 접속하면 코드 입력란이 비활성화됩니다. 브라우저 쿠키를 삭제한 후 전용 링크로 재접속해 보세요." },
            { q: "할인코드와 카드사 프로모션은 중복 적용되나요?", a: "네! 카드사 프로모션은 결제 시 자동 적용되고, 할인코드는 별도로 입력하므로 중복 할인이 가능합니다. VIP 회원 할인까지 합치면 체감 30% 이상 할인도 가능합니다." },
            { q: "앱에서 할인코드를 사용할 수 있나요?", a: "대부분의 할인코드는 PC 웹 또는 모바일 웹 전용입니다. 앱 전용 코드가 별도로 있으며, 앱에서는 '더보기 > Wallet'에서 코드를 미리 저장해두면 예약 시 선택 가능합니다." },
            { q: "할인코드는 모든 숙소에 적용되나요?", a: "아닙니다. 메리어트, 힐튼 등 글로벌 체인 호텔은 대부분 적용 불가하며, '쿠폰 적용 가능' 표시가 있는 숙소에만 적용됩니다. 검색 시 필터를 활용하세요." },
            { q: "원화(KRW) 결제와 달러(USD) 결제 중 어떤 게 유리한가요?", a: "USD 또는 현지 통화 결제가 유리합니다. 원화 결제 시 아고다 자체 환전 수수료(약 3~5%)가 추가되어, 카드사 할인 혜택을 상쇄할 수 있습니다." },
          ].map((faq, i) => (
            <details key={i} className="faq-item group">
              <summary className="cursor-pointer font-semibold text-sm list-none flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground text-center py-12 px-4" aria-label="최종 CTA">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">지금 바로 아고다 할인을 받으세요!</h2>
        <p className="opacity-90 mb-6">아래 버튼을 클릭하면 프로모션 전용 링크로 접속됩니다</p>
        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-lg py-4 px-8 inline-block">
          할인 적용하고 예약하기 →
        </a>
      </section>
    </>
  );
};

export default HomePage;
