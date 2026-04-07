import SeoHead from "@/components/SeoHead";
import CtaButton from "@/components/CtaButton";
import tipsHero from "@/assets/tips-hero.jpg";
import comparisonChart from "@/assets/comparison-chart.jpg";
import vipMembership from "@/assets/vip-membership.jpg";
import savingsConcept from "@/assets/savings-concept.jpg";
import calendarPromo from "@/assets/calendar-promo.jpg";
import cardPromotions from "@/assets/card-promotions.jpg";

const AFFILIATE_LINK = "http://app.ac/7qp46L283";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "아고다 꿀팁 & 비교 가이드 2026 — 할인 극대화 전략",
  "description": "중복 할인 조합법, VIP 등급 가이드, 결제 통화 설정, OTA 비교, 추천 카드 TOP 5, 월별 프로모션 캘린더 총정리",
  "url": "https://agd.dongbaektour.co.kr/tips-guide",
  "publisher": { "@type": "Organization", "name": "아고다 할인코드" },
  "datePublished": "2026-04-07",
  "dateModified": "2026-04-07"
};

const TipsGuidePage = () => {
  return (
    <>
      <SeoHead
        title="아고다 꿀팁 & 비교 가이드 2026 — 할인 극대화 전략 총정리"
        description="아고다 할인 극대화 전략, 중복 할인 조합법, VIP 등급 가이드, 결제 통화 설정, 아고다 vs 부킹닷컴 비교, 추천 카드 TOP 5 총정리."
        path="/tips-guide"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" aria-label="꿀팁 히어로">
        <div className="absolute inset-0">
          <img src={tipsHero} alt="아고다 할인 꿀팁 가이드" width={1920} height={800} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-black mb-4">꿀팁 & 비교 가이드</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            중복 할인 조합법, VIP 등급 활용, 결제 통화 설정, OTA 비교 분석까지 — 이 사이트에서만 볼 수 있는 독보적인 정보입니다.
          </p>
        </div>
      </section>

      {/* 할인 극대화 전략 */}
      <section className="section-container" aria-label="할인 극대화 전략" id="strategy">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">할인 극대화 전략: 중복 할인 조합법</h2>
            <p className="text-muted-foreground mb-6">
              아고다에서는 여러 할인을 동시에 적용하여 최대 할인을 받을 수 있습니다.
            </p>
            <div className="bg-success/10 border border-success/30 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-sm mb-3">🔥 최대 할인 조합 예시</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span>① VIP 회원 할인</span>
                  <span className="font-bold text-success">10~20%</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span>② 카드사 전용 프로모션</span>
                  <span className="font-bold text-success">7~15%</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span>③ 할인코드 입력 (일부 중복 가능)</span>
                  <span className="font-bold text-success">5~12%</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span>④ 캐시백 리워드</span>
                  <span className="font-bold text-success">최대 10%+</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-lg font-black">
                  <span>= 총 체감 할인율</span>
                  <span className="text-secondary">30~50%</span>
                </div>
              </div>
            </div>
          </div>
          <img src={savingsConcept} alt="할인 극대화 전략" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
        </div>

        {/* 중복 할인 가능 여부 */}
        <div className="mt-8">
          <h3 className="font-bold text-xl mb-4">중복 할인 가능 여부 정리</h3>
          <div className="table-responsive">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3 text-left">할인 A</th>
                  <th className="p-3 text-left">할인 B</th>
                  <th className="p-3 text-center">중복 가능</th>
                  <th className="p-3 text-left">비고</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["할인코드", "카드사 프로모션", "✅ 가능", "카드사는 자동, 코드는 별도 입력"],
                  ["할인코드", "VIP 회원 할인", "⚠️ 코드별 다름", "일부 중복 가능"],
                  ["할인코드", "캐시백 리워드", "✅ 가능", ""],
                  ["카드사 프로모션", "VIP 회원 할인", "✅ 가능", ""],
                  ["카드사 프로모션", "캐시백 리워드", "✅ 가능", ""],
                  ["할인코드", "다른 할인코드", "❌ 불가", "1개만 입력 가능"],
                  ["할인코드", "캐시백 사이트(ShopBack)", "❌ 불가", "프로모션 코드 사용 시 캐시백 불가"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 border-b border-border ${j === 2 ? "text-center" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 실전 전략 */}
        <div className="mt-8 bg-muted rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4">🎯 실전 전략 4단계</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "1", title: "카드사 할인 확보", desc: "전용 페이지로 접속하여 기본 카드 할인" },
              { step: "2", title: "할인코드 중복 입력", desc: "코드를 추가 입력하여 이중 할인" },
              { step: "3", title: "캐시백 숙소 선택", desc: "캐시백 리워드 배지 숙소 우선" },
              { step: "4", title: "VIP 등급 활용", desc: "VIP 전용가까지 추가 적용" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-black text-lg mx-auto mb-3">{item.step}</div>
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <CtaButton text="지금 할인 조합 적용하기 →" />
          </div>
        </div>
      </section>

      {/* 결제 통화 설정 */}
      <section className="bg-muted" aria-label="결제 통화 설정">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">결제 통화 설정 — 수수료 절약 핵심</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">⚠️ 원화(KRW) 결제의 함정</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 아고다 자체 환전 수수료 추가 (약 <strong>3~5%</strong>)</li>
                <li>• 카드사 할인 혜택을 상쇄할 수 있음</li>
                <li>• 실제 결제 금액이 USD 대비 비쌈</li>
              </ul>
              <div className="mt-4 bg-card rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">💡 예시 비교</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>숙박비 $200 기준:</p>
                  <p>• KRW 결제: ₩268,000 (환율 1,300원 + 수수료 3.5%)</p>
                  <p>• USD 결제: ₩260,000 (환율 1,300원, 수수료 없음)</p>
                  <p className="font-bold text-destructive">→ 차이: ₩8,000 손해!</p>
                </div>
              </div>
            </div>
            <div className="bg-success/10 border border-success/30 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3">✅ 권장 설정</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• 결제 통화를 <strong>USD(달러)</strong> 또는 <strong>현지 통화</strong>로 설정</li>
                <li>• 해외 원화결제 차단 설정 권장 (카드사 앱에서)</li>
                <li>• 환율 안정 시 '지금 결제하기'가 유리</li>
                <li>• 일부 카드는 원화 결제 수수료 무료 → 확인 필요</li>
              </ul>
              <div className="mt-4 bg-card rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">📌 아고다페이먼트코리아(유)</h4>
                <p className="text-xs text-muted-foreground">2017년 설립. 아고다 결제 시 국내 가맹점 실적에 포함. 단, 일부 해외 가맹점 처리될 수 있음.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP 등급 */}
      <section className="section-container" aria-label="VIP 등급 가이드">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">VIP 등급 시스템 완벽 가이드</h2>
            <div className="table-responsive mt-4">
              <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 text-left">등급</th>
                    <th className="p-3 text-left">조건</th>
                    <th className="p-3 text-left">할인 혜택</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border-b border-border">🥈 Silver</td><td className="p-3 border-b border-border">회원가입 기본</td><td className="p-3 border-b border-border">기본 할인</td></tr>
                  <tr className="bg-muted/50"><td className="p-3 border-b border-border">🥇 Gold</td><td className="p-3 border-b border-border">일정 예약 횟수</td><td className="p-3 border-b border-border">약 10% 추가</td></tr>
                  <tr><td className="p-3 border-b border-border">💎 Platinum</td><td className="p-3 border-b border-border">높은 예약 실적</td><td className="p-3 border-b border-border">약 15~20% 추가</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-muted-foreground space-y-2">
              <h4 className="font-bold text-foreground">VIP 혜택 상세</h4>
              <ul className="space-y-1">
                <li>• 멤버 전용 할인가 (일반가 대비 최대 20%)</li>
                <li>• 일부 숙소 무료 조식, 룸 업그레이드</li>
                <li>• 무료 취소 혜택 확대</li>
                <li>• 시크릿 딜 (앱 전용)</li>
              </ul>
              <h4 className="font-bold text-foreground mt-4">등급 유지/변동</h4>
              <ul className="space-y-1">
                <li>• 6개월마다 조정, 하락 시 3개월 유예기간</li>
                <li>• 법인카드도 본인 계정 체크아웃 시 실적 반영</li>
              </ul>
            </div>
          </div>
          <img src={vipMembership} alt="아고다 VIP 멤버십" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
        </div>
      </section>

      {/* 캐시 vs 캐시백 */}
      <section className="bg-muted" aria-label="캐시 비교">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">아고다 캐시 vs 캐시백 리워드 비교</h2>
          <div className="table-responsive">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3 text-left">구분</th>
                  <th className="p-3 text-left">아고다 캐시</th>
                  <th className="p-3 text-left">캐시백 리워드</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["성격", "사이트 내 포인트", "실제 현금 환급"],
                  ["사용처", "아고다 다음 예약 시 차감", "등록한 카드/계좌로 입금"],
                  ["적립 시점", "체크아웃 후 7일 자동", "체크아웃 후 최대 60일 후 신청"],
                  ["신청 필요", "자동", "수동 신청 필수 (60일 이내)"],
                  ["입금 소요", "즉시 사용 가능", "신청 후 7~14일"],
                  ["미신청 시", "3~6개월 유효", "만료 소멸"],
                  ["결제/수령 카드", "-", "달라도 가능"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3 border-b border-border ${j === 0 ? "font-medium" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 bg-card rounded-xl border border-border p-6">
            <h3 className="font-bold mb-3">캐시백 리워드 신청 방법</h3>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
              {[
                "앱 설치 → 로그인",
                "'더보기' → '캐시백 리워드'",
                "'캐시백 요청하기' 클릭",
                "은행/카드 정보 입력",
                "7~14일 이내 입금!",
              ].map((step, i) => (
                <div key={i}>
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm mx-auto mb-2">{i + 1}</div>
                  <p className="text-xs text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 최적 사용 시나리오 */}
      <section className="section-container" aria-label="사용 시나리오">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">할인코드 최적 사용 시나리오</h2>
        <div className="space-y-4">
          {[
            { title: "시나리오 1: 저가 숙소 (10만원 이하)", recommend: "정액 할인 또는 최소 사용금액 없는 코드", reason: "정률할인(5%, 8%)은 낮은 금액에서 효과 미미" },
            { title: "시나리오 2: 고가 숙소 ($600 이상)", recommend: "5% 할인코드 (한도 높은 코드)", reason: "12% 코드는 최대 $30 한도 → 5%가 실질 할인 더 클 수 있음" },
            { title: "시나리오 3: 동남아 여행", recommend: "8% 인기지역 코드 + 마스터카드 15% / 토스뱅크 10%", reason: "캐시백 리워드 숙소 우선 선택으로 추가 절약" },
            { title: "시나리오 4: 첫 아고다 예약", recommend: "7% 신규 회원 코드 (대상국 한정)", reason: "비대상국이면 5% 기본 코드" },
            { title: "시나리오 5: 체인 호텔 (메리어트, 힐튼)", recommend: "캐시백 사이트(ShopBack) 경유 4~6%", reason: "할인코드 적용 불가 → 캐시백으로 대체" },
          ].map((scenario, i) => (
            <article key={i} className="discount-card">
              <h3 className="font-bold mb-2">{scenario.title}</h3>
              <p className="text-sm text-muted-foreground mb-1"><strong>추천:</strong> {scenario.recommend}</p>
              <p className="text-xs text-muted-foreground mb-4"><strong>이유:</strong> {scenario.reason}</p>
              <CtaButton text="할인 적용하기" className="text-sm py-2 px-4" />
            </article>
          ))}
        </div>
      </section>

      {/* OTA 비교 */}
      <section className="bg-muted" aria-label="OTA 비교">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">아고다 vs 타 OTA 비교</h2>
              <p className="text-muted-foreground">아고다가 다른 예약 사이트보다 어떤 점에서 유리한지 한눈에 비교하세요.</p>
            </div>
            <img src={comparisonChart} alt="OTA 비교 차트" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
          </div>
          <div className="table-responsive">
            <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3 text-left">비교 항목</th>
                  <th className="p-3 text-center">아고다</th>
                  <th className="p-3 text-center">부킹닷컴</th>
                  <th className="p-3 text-center">호텔스닷컴</th>
                  <th className="p-3 text-center">트립닷컴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["할인코드 제공", "⭐ 다양", "제한적", "O", "O"],
                  ["카드사 프로모션", "⭐ 10개+", "일부", "일부", "일부"],
                  ["간편결제 할인", "⭐ 카카오페이 11%", "X", "X", "일부"],
                  ["VIP 등급 할인", "최대 20%", "Genius 20%", "10박=1박", "VIP 할인"],
                  ["캐시백", "⭐ 현금 환급", "X", "무료숙박", "O"],
                  ["앱 전용 할인", "O (2~3%)", "O", "O", "O"],
                  ["최저가 보장제", "O", "O", "O", "O"],
                  ["원화 결제", "⭐ 국내 가맹점", "해외 결제", "해외 결제", "국내 가맹점"],
                  ["동남아 강점", "⭐⭐⭐", "유럽 강점", "균형", "중국/동남아"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                    <td className="p-3 border-b border-border font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className={`p-3 border-b border-border text-center ${cell.includes("⭐") ? "font-bold text-secondary" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            ※ 아고다는 특히 동남아 숙소, 카드사 프로모션, 간편결제 할인에서 압도적 우위를 보입니다.
          </p>
        </div>
      </section>

      {/* 추천 카드 TOP 5 */}
      <section className="section-container" aria-label="추천 카드">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">아고다 추천 할인 카드 TOP 5</h2>
            <p className="text-muted-foreground">아고다 프로모션 외에도 전 가맹점 할인 혜택을 주는 카드를 활용하면 추가 절약이 가능합니다.</p>
          </div>
          <img src={cardPromotions} alt="추천 할인 카드" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
        </div>
        <div className="space-y-4">
          {[
            { rank: "1", card: "토스뱅크 체크카드", benefit: "7~10% 아고다 전용 할인", feature: "2028년까지 장기 프로모션, 체크카드도 가능" },
            { rank: "2", card: "NH농협 별다줄 카드", benefit: "온라인 전 가맹점 7% 할인", feature: "전월실적 30만원 이상, 통합할인한도 공유" },
            { rank: "3", card: "롯데 LOCA LIKIT 1.2", benefit: "온라인 가맹점 1.5% 할인", feature: "전월실적·할인한도 없음, 연회비 저렴" },
            { rank: "4", card: "하나카드 제이드클래식", benefit: "아고다 프로모션 + 공항 라운지", feature: "연 3회 공항 라운지 무료" },
            { rank: "5", card: "신한카드", benefit: "아고다 전용 7~10%", feature: "선착순 자동적용, 대중적" },
          ].map((item) => (
            <article key={item.rank} className="discount-card flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-black text-lg">
                {item.rank}
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{item.card}</h3>
                <p className="text-sm text-muted-foreground">{item.benefit}</p>
                <p className="text-xs text-muted-foreground">{item.feature}</p>
              </div>
              <CtaButton text="할인 적용" className="text-sm py-2 px-4 flex-shrink-0 w-full sm:w-auto" />
            </article>
          ))}
        </div>
      </section>

      {/* 핵심 팁 모음 */}
      <section className="bg-muted" aria-label="핵심 팁">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">아고다 이용 핵심 팁 10선</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "입력란이 안 보이면? → 프로모션 전용 링크 + 쿠키 삭제",
              "가짜 쿠폰 주의 — 공식 파트너 사이트에서 확인",
              "월초 예약이 유리 — 카드사 예산이 월초에 여유",
              "앱 > 웹 — 앱 전용 2~3% 추가 + 시크릿 딜",
              "'쿠폰 적용 가능' 필터 활용으로 시간 절약",
              "세금 포함 가격으로 변경하면 정확한 비교 가능",
              "취소 가능 상품 → 환율 유리 시점에 미리 결제 전략",
              "리워드 자동적립 설정 확인 — 꺼져 있으면 적립 안 됨",
              "게스트 예약 금지 — VIP 실적·리워드 적립 불가",
              "주말 예약 보너스 — 토·일 예약 시 25% 할인 프로모션",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <p className="text-sm text-muted-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 월별 프로모션 캘린더 */}
      <section className="section-container" aria-label="월별 캘린더">
        <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">월별 프로모션 캘린더</h2>
            <p className="text-muted-foreground">아고다 프로모션은 연간 패턴이 있습니다. 여행 계획 시 참고하세요!</p>
          </div>
          <img src={calendarPromo} alt="프로모션 캘린더" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
        </div>
        <div className="table-responsive">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-3 text-left">월</th>
                <th className="p-3 text-left">주요 프로모션</th>
                <th className="p-3 text-left">비고</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1월", "신년 세일, Payday Sale", "겨울 여행 특가"],
                ["2월", "설날/구정, 발렌타인", "아시아 지역 강화"],
                ["3월", "봄맞이, 벚꽃 특가", "일본·제주 집중"],
                ["4월", "더블데이(4.4), 칸톤페어", "중국·동남아 강화"],
                ["5월", "더블데이(5.5), 어린이날", "가족 여행"],
                ["6월", "여름 얼리버드, 장기숙박", "여름 시즌 시작"],
                ["7월", "여름 특가, 생일 세일", "대규모 할인"],
                ["8월", "여름 마지막 특가", "할인 경쟁"],
                ["9월", "추석, 가을 특가", "9.9 세일"],
                ["10월", "칸톤 페어, 할로윈", "10.10 더블데이"],
                ["11월", "블랙프라이데이, 11.11", "⭐ 연중 최대 할인"],
                ["12월", "연말, 크리스마스, 12.12", "겨울+연말 보너스"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "" : "bg-muted/50"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`p-3 border-b border-border ${j === 0 ? "font-bold" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr className="bg-secondary/10">
                <td className="p-3 font-bold" colSpan={3}>
                  📅 추가: 매주 수요일 깜짝 특가 | 매일 심야 특가(20~24시) | 매월 말 Payday Sale(마지막 5일)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">꿀팁을 모두 확인하셨나요?</h2>
        <p className="opacity-90 mb-6">지금 바로 프로모션 전용 링크로 최대 할인을 적용하세요!</p>
        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-lg py-4 px-8 inline-block">
          아고다 최대 할인 적용하기 →
        </a>
      </section>
    </>
  );
};

export default TipsGuidePage;
