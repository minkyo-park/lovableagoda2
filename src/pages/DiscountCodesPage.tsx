import SeoHead from "@/components/SeoHead";
import CtaButton from "@/components/CtaButton";
import discountHero from "@/assets/discount-codes-hero.jpg";
import cardPromotions from "@/assets/card-promotions.jpg";
import calendarPromo from "@/assets/calendar-promo.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import destinationBangkok from "@/assets/destination-bangkok.jpg";
import destinationBali from "@/assets/destination-bali.jpg";

const AFFILIATE_LINK = "http://app.ac/7qp46L283";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "아고다 할인코드 & 프로모션 상세 총정리 2026",
  "description": "아고다 할인코드 종류별 상세 정보, 카드사 프로모션, 간편결제 할인, 시즌별 이벤트 총정리",
  "url": "https://agd.dongbaektour.co.kr/discount-codes",
  "publisher": { "@type": "Organization", "name": "아고다 할인코드" },
  "datePublished": "2026-06-07",
  "dateModified": "2026-06-07"
};

const DiscountCodesPage = () => {
  return (
    <>
      <SeoHead
        title="할인코드 & 프로모션 총정리 - 아고다 할인코드"
        description="아고다 할인코드 종류별 상세 정보, 카드사 프로모션 10개+, 간편결제(카카오페이 11%) 할인, 시즌별 이벤트까지 총정리."
        path="/discount-codes"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" aria-label="할인코드 히어로">
        <div className="absolute inset-0">
          <img src={discountHero} alt="아고다 할인코드 쿠폰" width={1920} height={800} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-black mb-4">할인코드 & 프로모션 상세</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            아고다에서 사용 가능한 모든 할인코드, 카드사 프로모션, 간편결제 할인, 시즌별 이벤트를 한눈에 확인하세요.
          </p>
        </div>
      </section>

      {/* 할인코드 종류별 상세 */}
      <section className="section-container" aria-label="할인코드 종류별 상세" id="codes">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">할인코드 종류별 상세 정리</h2>

        <div className="space-y-6">
          {/* 코드 A */}
          <article className="discount-card">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">전 세계 기본 할인코드</h3>
                  <span className="info-badge bg-primary text-primary-foreground">5%</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground mb-4">
                  <p><strong>할인코드:</strong> COUDAL</p>
                  <p><strong>대상:</strong> 전 세계 모든 지역 숙소</p>
                  <p><strong>적용 조건:</strong> 기존/신규 회원 모두 가능</p>
                  <p><strong>플랫폼:</strong> PC 웹, 모바일 웹 (앱 불가)</p>
                  <p><strong>예약 기간:</strong> 2026년 12월 31일까지</p>
                  <p><strong>최대 할인:</strong> $30</p>
                  <p><strong>적용 숙소:</strong> '쿠폰 적용 가능' 표시 숙소만</p>
                </div>
                <div className="bg-info/10 border border-info/30 rounded-lg p-3 text-xs text-muted-foreground mb-4">
                  💡 <strong>팁:</strong> 가장 범용적인 코드로, 특정 지역 코드가 없을 때 기본적으로 사용하세요.
                  $600 이상 고가 숙소에서는 12% 코드보다 실질 할인 금액이 클 수 있습니다. (최대 할인 한도 확인!)
                </div>
              </div>
            </div>
            <CtaButton text="전 세계 5% 할인 적용하기 →" className="w-full sm:w-auto" />
          </article>

          {/* 코드 B */}
          <article className="discount-card">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">신규 회원 할인코드</h3>
              <span className="info-badge bg-success text-success-foreground">7%</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground mb-4">
              <p><strong>대상 국가:</strong> 홍콩, 스페인, 독일, 라오스</p>
              <p><strong>적용 조건:</strong> 아고다 첫 예약 (이메일 기준)</p>
              <p><strong>플랫폼:</strong> PC 웹, 모바일 웹 (앱 불가)</p>
              <p><strong>주의:</strong> 기존 예약 이력 있으면 불가</p>
            </div>
            <div className="bg-warning/10 border border-warning/30 rounded-lg p-3 text-xs text-muted-foreground mb-4">
              ⚠️ 이메일 계정 기준으로 검증하므로, 다른 이메일로 신규 가입하면 사용 가능할 수 있으나
              아고다 정책 위반 가능성이 있습니다.
            </div>
            <CtaButton text="신규 회원 7% 할인 받기 →" className="w-full sm:w-auto" />
          </article>

          {/* 코드 C */}
          <article className="discount-card">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">인기 여행지 할인코드</h3>
              <span className="info-badge bg-secondary text-secondary-foreground">8%</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground mb-4">
              <p><strong>대상 국가:</strong> 태국, 인도네시아, 이탈리아, 말레이시아</p>
              <p><strong>적용 조건:</strong> 전 고객 (신규/기존)</p>
              <p><strong>최소 결제:</strong> $100 이상</p>
              <p><strong>플랫폼:</strong> PC 웹, 모바일 웹 (앱 불가)</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <img src={destinationBangkok} alt="태국 방콕 할인" width={400} height={300} loading="lazy" className="rounded-lg w-full h-32 object-cover" />
              <img src={destinationBali} alt="발리 인도네시아 할인" width={400} height={300} loading="lazy" className="rounded-lg w-full h-32 object-cover" />
            </div>
            <CtaButton text="인기 여행지 8% 할인 적용 →" className="w-full sm:w-auto" />
          </article>

          {/* 코드 D */}
          <article className="discount-card">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">인플루언서 할인코드</h3>
              <span className="info-badge bg-destructive text-destructive-foreground">최대 12%</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground mb-4">
              <p><strong>할인코드:</strong> LP12AGD2</p>
              <p><strong>특징:</strong> 기존 할인에 중복 적용 가능</p>
              <p><strong>대상:</strong> 신규/기존 회원 모두</p>
              <p><strong>유효기간:</strong> 6월 30일까지</p>
              <p><strong>플랫폼:</strong> PC/모바일 웹 전용</p>
            </div>
            <div className="bg-success/10 border border-success/30 rounded-lg p-3 text-xs text-muted-foreground mb-4">
              🔥 <strong>핵심 포인트:</strong> 다른 할인코드와 달리 기존 할인에 중복 적용이 가능한 것이 최대 장점입니다!
              카드사 프로모션 + 인플루언서 코드를 동시에 활용하면 최대 할인을 받을 수 있습니다.
            </div>
            <CtaButton text="인플루언서 12% 할인 적용 →" className="w-full sm:w-auto" />
          </article>

          {/* 코드 E, F, G */}
          <article className="discount-card">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">국내숙소 전용 할인코드</h3>
              <span className="info-badge bg-primary text-primary-foreground">5%</span>
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              <p>한국 내 모든 숙소 대상 · 6월 30일까지 · 웹 전용</p>
            </div>
            <CtaButton text="국내숙소 5% 할인 →" className="w-full sm:w-auto" />
          </article>

          <article className="discount-card">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">국내숙소 10% 할인코드</h3>
              <span className="info-badge bg-secondary text-secondary-foreground">10%</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground mb-4">
              <p><strong>할인코드:</strong> LP10AGD2</p>
              <p><strong>대상:</strong> 한국 내 모든 숙소</p>
              <p><strong>최대 할인:</strong> $25</p>
              <p><strong>예약 기간:</strong> 2026.06.01~06.30</p>
              <p><strong>숙박 기간:</strong> ~2027.03.31</p>
              <p><strong>플랫폼:</strong> PC/모바일 웹 전용</p>
            </div>
            <CtaButton text="국내숙소 10% 할인 적용 →" className="w-full sm:w-auto" />
          </article>

          <article className="discount-card">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold">앱 전용 할인코드</h3>
              <span className="info-badge bg-accent text-accent-foreground">최대 8%</span>
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              <p>아고다 앱(APP)에서만 사용 가능 · 사용 기간 제한 없음 · 일부 상품만 적용</p>
              <p className="mt-2">💡 앱에서 '더보기 &gt; Wallet'에 코드 미리 저장 → 예약 시 선택 가능</p>
            </div>
            <CtaButton text="앱에서 할인 받기 →" className="w-full sm:w-auto" />
          </article>
        </div>
      </section>

      {/* 할인코드 비교표 - 추가 정보 */}
      <section className="bg-muted" aria-label="할인코드 비교표">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">할인코드 한눈에 비교</h2>
          <p className="text-muted-foreground text-center mb-8">어떤 코드를 써야 할지 모르겠다면? 아래 표를 확인하세요!</p>

          <div className="table-responsive">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3 text-left">코드 종류</th>
                  <th className="p-3 text-left">할인율</th>
                  <th className="p-3 text-left">대상 지역</th>
                  <th className="p-3 text-left">최소 금액</th>
                  <th className="p-3 text-left">최대 할인</th>
                  <th className="p-3 text-left">중복 적용</th>
                  <th className="p-3 text-left">추천 상황</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["기본 5%", "5%", "전 세계", "없음", "$30", "카드사만", "범용 · 고가 숙소"],
                  ["신규 7%", "7%", "홍콩/스페인 등", "없음", "미공개", "X", "첫 예약"],
                  ["인기지역 8%", "8%", "태국/인니 등", "$100", "미공개", "카드사만", "동남아 여행"],
                  ["인플루언서 12%", "최대 12%", "전 세계", "없음", "$30", "O (중복가능!)", "최대 할인 추구"],
                  ["국내 5%", "5%", "한국", "없음", "미공개", "카드사만", "국내 여행"],
                  ["앱 전용 8%", "최대 8%", "전 세계", "없음", "상이", "X", "앱 이용자"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 border-b border-border whitespace-nowrap">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 할인 금액 시뮬레이션 */}
          <div className="mt-8 bg-card rounded-xl p-6 border border-border">
            <h3 className="font-bold text-lg mb-4">💰 할인 금액 시뮬레이션 (숙박비 기준)</h3>
            <div className="table-responsive">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-3 text-left">숙박비</th>
                    <th className="p-3 text-right">5% 할인</th>
                    <th className="p-3 text-right">7% 할인</th>
                    <th className="p-3 text-right">8% 할인</th>
                    <th className="p-3 text-right">12% 할인</th>
                    <th className="p-3 text-right">15% (공식)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["$100 (약 13만원)", "$5", "$7", "$8", "$12", "$15"],
                    ["$200 (약 26만원)", "$10", "$14", "$16", "$24", "$30"],
                    ["$300 (약 39만원)", "$15", "$21", "$24", "$30 (한도)", "$45"],
                    ["$500 (약 65만원)", "$25", "$35", "$40", "$30 (한도)", "$75"],
                    ["$1,000 (약 130만원)", "$30 (한도)", "$70", "$80", "$30 (한도)", "$150"],
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="p-3 border-b border-border font-medium whitespace-nowrap">{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} className={`p-3 border-b border-border text-right whitespace-nowrap ${cell.includes("한도") ? "text-destructive font-medium" : ""}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              ※ $300 이상 예약 시 5% 기본 코드가 12% 인플루언서 코드보다 실질 할인 금액이 클 수 있습니다. (최대 할인 한도 때문)
            </p>
          </div>
        </div>
      </section>

      {/* 카드사 프로모션 상세 */}
      <section className="section-container" aria-label="카드사 프로모션 상세" id="card-promo">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">카드사 프로모션 상세</h2>
            <p className="text-muted-foreground mb-4">
              아고다는 국내 10개 이상 카드사와 프로모션을 진행하고 있습니다. 각 카드사별 할인 조건, 적용 방법, 주의사항을 확인하세요.
            </p>
            <div className="bg-info/10 border border-info/30 rounded-lg p-4 text-sm text-muted-foreground">
              <h4 className="font-bold mb-2">📌 카드 프로모션 공통 조건</h4>
              <ul className="space-y-1 text-xs">
                <li>• 반드시 카드사 전용 프로모션 페이지를 통해 접속 후 예약</li>
                <li>• 대부분 '선결제(지금 결제하기)' 객실만 적용</li>
                <li>• 카드사 예산 소진 시 조기 종료 — <strong>월초 예약이 유리</strong></li>
                <li>• 간편결제(삼성페이 등) 이용 시 할인 제외되는 카드사 있음</li>
              </ul>
            </div>
          </div>
          <img src={cardPromotions} alt="아고다 제휴 신용카드" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
        </div>

        <div className="space-y-4">
          {[
            { card: "삼성카드", rate: "전 지역 7% / 인니·말레이·이탈리아 10%", period: "~2026.6.30", method: "삼성카드 전용 페이지에서 접속 후 결제", notes: "LINK 혜택 또는 전용 예약 페이지 필수. 삼성페이 이용 시 할인 제외될 수 있음" },
            { card: "신한카드", rate: "전 지역 7% / 인니·말레이·이탈리아 10%", period: "~2026.6.30", method: "신한카드 전용 페이지 접속 → 자동 적용", notes: "선착순, 선결제 상품" },
            { card: "우리카드", rate: "전 지역 7% / 특정 지역 10%", period: "~2026.6.30", method: "전용 페이지 접속 → 핀번호 입력 시 자동", notes: "'선결제', '지금 결제하기' 객실 유형만" },
            { card: "NH농협카드", rate: "전 지역 7% / 말레이·스페인·이탈리아 10%", period: "~2026.6.30", method: "NH농협 전용 페이지 접속 → 선결제", notes: "신용카드, 체크카드 모두 가능. 최대 20%까지" },
            { card: "KB국민카드", rate: "최대 10%", period: "월별 갱신", method: "KB국민카드 전용 페이지 접속 후 결제", notes: "매월 프로모션 조건 갱신" },
            { card: "하나카드", rate: "최대 10%", period: "월별 갱신", method: "하나카드 전용 페이지 접속 후 결제", notes: "제이드클래식 보유 시 공항 라운지 무료 추가 혜택" },
            { card: "토스뱅크 체크카드", rate: "전 세계 7% / 한국·태국·베트남 10%", period: "~2028.8.31", method: "결제 즉시 자동 할인 적용", notes: "체크카드도 높은 할인율! 매우 긴 프로모션 기간" },
            { card: "마스터카드", rate: "최대 15%", period: "월별 갱신", method: "마스터카드 전용 페이지 접속", notes: "마스터카드 브랜드 전체 (발급사 무관)" },
            { card: "Visa카드", rate: "6%", period: "월별 갱신", method: "한국 발급 Visa 카드로 결제", notes: "USD 결제 권장 (원화 시 이중환전 수수료)" },
            { card: "유니온페이(UnionPay)", rate: "15%", period: "월별 갱신", method: "코드 UPI15 입력 + 유니온페이 결제", notes: "카드당 5회, 1회 최대 $100 할인" },
          ].map((item, i) => (
            <article key={i} className="discount-card">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-bold text-lg">{item.card}</h3>
                    <span className="info-badge bg-secondary text-secondary-foreground text-xs">{item.rate}</span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>유효기간:</strong> {item.period}</p>
                    <p><strong>적용 방법:</strong> {item.method}</p>
                    <p><strong>주의:</strong> {item.notes}</p>
                  </div>
                </div>
                <CtaButton text="할인 적용" className="text-sm py-2 px-4 flex-shrink-0 w-full sm:w-auto" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 간편결제 할인 */}
      <section className="bg-muted" aria-label="간편결제 할인">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">간편결제 할인</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="discount-card">
              <h3 className="font-bold text-lg mb-2">카카오페이</h3>
              <span className="info-badge bg-warning text-warning-foreground mb-3">11% 할인</span>
              <p className="text-sm text-muted-foreground mb-1">한도: 최대 100 USD</p>
              <p className="text-sm text-muted-foreground mb-4">결제 시 카카오페이 선택</p>
              <CtaButton text="카카오페이 할인 →" className="w-full text-sm py-2" />
            </article>
            <article className="discount-card">
              <h3 className="font-bold text-lg mb-2">네이버페이</h3>
              <span className="info-badge bg-warning text-warning-foreground mb-3">11% 할인</span>
              <p className="text-sm text-muted-foreground mb-1">국내·해외 11% 할인 · 최대 100 USD</p>
              <p className="text-sm text-muted-foreground mb-4">예약 6.1~6.30 / 투숙 ~8.31 · 전용 페이지 결제</p>
              <CtaButton text="네이버페이 할인 →" className="w-full text-sm py-2" href="https://www.agoda.com/ko-kr/naverpaypromo?cid=1963008&tag=A100692912" />
            </article>
            <article className="discount-card">
              <h3 className="font-bold text-lg mb-2">토스페이</h3>
              <span className="info-badge bg-warning text-warning-foreground mb-3">11% 할인</span>
              <p className="text-sm text-muted-foreground mb-1">국내·해외 11% 할인 · 최대 100 USD</p>
              <p className="text-sm text-muted-foreground mb-4">예약 6.1~6.30 / 투숙 ~8.31 · 전용 페이지 결제</p>
              <CtaButton text="토스페이 할인 →" className="w-full text-sm py-2" href="https://www.agoda.com/ko-kr/tosspaypromo?cid=1963016&tag=A100692912" />
            </article>
            <article className="discount-card">
              <h3 className="font-bold text-lg mb-2">PAYCO / 페이팔</h3>
              <span className="info-badge bg-muted text-muted-foreground mb-3">시즌별 변동</span>
              <p className="text-sm text-muted-foreground mb-1">결제 수단으로 지원</p>
              <p className="text-sm text-muted-foreground mb-4">시즌별 프로모션에 따라 변동</p>
              <CtaButton text="PAYCO로 예약 →" className="w-full text-sm py-2" />
            </article>
          </div>
        </div>
      </section>

      {/* 반복 프로모션 */}
      <section className="section-container" aria-label="반복 프로모션">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">반복·정기 프로모션</h2>
            <p className="text-muted-foreground">매월, 매주, 매일 정기적으로 진행되는 프로모션을 놓치지 마세요!</p>
          </div>
          <img src={calendarPromo} alt="아고다 프로모션 캘린더" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "💰 Payday Sale (월급날)", timing: "매월 마지막 5일간", benefit: "20% 추가 할인", condition: "예약일로부터 90일 이내 체크인" },
            { title: "🦉 Night Owl Sale (심야 할인)", timing: "매일 오후 8시~자정", benefit: "최대 20% 할인", condition: "전 세계 인기 여행지 호텔" },
            { title: "⏰ 정오·자정 타임 할인", timing: "매일 12AM~3AM / 2PM~6PM", benefit: "정오 25%, 자정 30% 할인", condition: "해외 인기 호텔 숙소" },
            { title: "⚡ 수요일 깜짝 특가", timing: "매주 수요일 24시간", benefit: "전 세계 초특가", condition: "예약 후 90일 이내 체크인" },
          ].map((promo, i) => (
            <article key={i} className="discount-card">
              <h3 className="font-bold mb-2">{promo.title}</h3>
              <div className="text-sm text-muted-foreground space-y-1 mb-4">
                <p><strong>시기:</strong> {promo.timing}</p>
                <p><strong>혜택:</strong> {promo.benefit}</p>
                <p><strong>조건:</strong> {promo.condition}</p>
              </div>
              <CtaButton text="프로모션 확인 →" className="w-full text-sm py-2" />
            </article>
          ))}
        </div>
      </section>

      {/* 시즌별 프로모션 */}
      <section className="bg-muted" aria-label="시즌별 프로모션">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">시즌별·이벤트성 프로모션</h2>
          <div className="table-responsive">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3 text-left">프로모션</th>
                  <th className="p-3 text-left">시기</th>
                  <th className="p-3 text-left">내용</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["블랙프라이데이 세일", "11월 말", "전 세계 호텔 대폭 할인 + 추가 할인코드"],
                  ["연말 세일", "12월", "겨울 시즌 특가, 최대 20% 코드"],
                  ["설날/구정 프로모션", "1~2월", "아시아 지역 특가"],
                  ["더블데이 세일 (4.4, 5.5 등)", "해당 날짜 전후", "대상 숙소 15% 추가"],
                  ["여름 세일", "6~8월", "여름 휴가 시즌 특가"],
                  ["아고다 생일 세일", "연 1회", "창립 기념 대규모 할인"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-3 border-b border-border">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 숙소 유형별 */}
      <section className="section-container" aria-label="숙소 유형별">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">숙소 유형별 할인 프로모션</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "🏨 국내숙소 특가", desc: "한국 내 호텔 최대 25% 할인 (상시)" },
            { title: "✈️ 해외 여행 특가", desc: "해외 호텔 최대 30% 추가 할인" },
            { title: "👑 프리미엄 오퍼", desc: "프리미엄 호텔·리조트 + 인기 숙소 특가" },
            { title: "📅 장기 숙박 할인", desc: "장기 투숙 시 별도 할인율 적용" },
            { title: "✈️+🏨 항공+숙소 패키지", desc: "함께 예약 시 최대 30% 이상 절약" },
            { title: "🏡 홈앤빌라", desc: "가족 여행용 넓은 숙소, 카드사 할인 동일" },
          ].map((item, i) => (
            <article key={i} className="discount-card text-center">
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
              <CtaButton text="특가 보기" className="text-sm py-2 px-4" />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">할인코드 적용하고 최저가로 예약하세요</h2>
        <p className="opacity-90 mb-6">프로모션 전용 링크로 접속해야 할인코드 입력란이 활성화됩니다</p>
        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-lg py-4 px-8 inline-block">
          아고다 할인 적용하기 →
        </a>
      </section>
    </>
  );
};

export default DiscountCodesPage;
