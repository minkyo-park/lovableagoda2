import SeoHead from "@/components/SeoHead";
import CtaButton from "@/components/CtaButton";
import howtoHero from "@/assets/howto-hero.jpg";
import mobileBooking from "@/assets/mobile-booking.jpg";
import troubleshooting from "@/assets/troubleshooting.jpg";
import savingsConcept from "@/assets/savings-concept.jpg";
import discountHero from "@/assets/discount-codes-hero.jpg";
import cardPromotions from "@/assets/card-promotions.jpg";

const AFFILIATE_LINK = "http://app.ac/7qp46L283";

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "아고다 카드할인 사용방법",
  "description": "아고다 카드할인 사용법, 카드사 프로모션 적용법, 트러블슈팅 가이드",
  "url": "https://agd.dongbaektour.co.kr/how-to-use",
  "step": [
    { "@type": "HowToStep", "name": "할인코드 확인 및 복사", "text": "사용할 할인코드를 확인하고 복사합니다" },
    { "@type": "HowToStep", "name": "프로모션 전용 링크로 접속", "text": "반드시 프로모션 전용 링크를 통해 아고다에 접속합니다" },
    { "@type": "HowToStep", "name": "숙소 검색 및 선택", "text": "원하는 여행지, 날짜, 인원을 입력하고 숙소를 검색합니다" },
    { "@type": "HowToStep", "name": "할인코드 입력 및 결제", "text": "결제 페이지에서 할인코드를 입력하고 할인 적용 후 결제합니다" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "할인코드 입력란이 보이지 않아요", "acceptedAnswer": { "@type": "Answer", "text": "프로모션 전용 링크를 통해 접속해야 합니다. 브라우저 쿠키를 삭제한 후 전용 링크로 재접속하세요." }},
    { "@type": "Question", "name": "앱에서 할인코드를 입력할 수 없어요", "acceptedAnswer": { "@type": "Answer", "text": "대부분의 할인코드는 PC 웹/모바일 웹 전용입니다. 앱 전용 코드는 별도입니다." }},
    { "@type": "Question", "name": "할인코드가 유효하지 않다고 나와요", "acceptedAnswer": { "@type": "Answer", "text": "유효기간 만료, 사용 횟수 초과, 일반 접속(전용 링크 미사용) 등이 원인일 수 있습니다." }},
  ]
};

const HowToUsePage = () => {
  return (
    <>
      <SeoHead
        title="사용방법 & 트러블슈팅 가이드 - 아고다 카드할인"
        description="아고다 카드할인 사용법 단계별 가이드, 카드사 프로모션 적용법, 할인 안 될 때 9가지 해결법, 예약 변경/취소 안내 총정리."
        path="/how-to-use"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden" aria-label="사용방법 히어로">
        <div className="absolute inset-0">
          <img src={howtoHero} alt="아고다 할인코드 사용방법 가이드" width={1920} height={800} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 text-primary-foreground">
          <h1 className="text-3xl md:text-4xl font-black mb-4">사용방법 & 트러블슈팅</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            할인코드 적용 방법부터 안 될 때 해결법까지, 처음 이용하시는 분도 쉽게 따라할 수 있는 완전 가이드입니다.
          </p>
        </div>
      </section>

      {/* PC 웹 사용법 */}
      <section className="section-container" aria-label="PC 웹 사용법">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">할인코드 사용 방법 (단계별 가이드)</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">💻 PC 웹 사용법</h3>
            <ol className="space-y-4">
              {[
                { step: "1", title: "할인코드 확인 및 복사", desc: "사용할 할인코드를 확인하고 복사합니다 (Ctrl+C)" },
                { step: "2", title: "프로모션 전용 링크로 접속", desc: "반드시 아래 프로모션 전용 링크를 통해 아고다에 접속하세요" },
                { step: "3", title: "숙소 검색 및 선택", desc: "여행지, 날짜, 인원 입력 후 '쿠폰 적용 가능' 숙소 선택" },
                { step: "4", title: "객실 선택 후 결제 페이지", desc: "'지금 예약하기' 클릭하여 결제 페이지로 이동" },
                { step: "5", title: "할인코드 입력", desc: "결제 금액 아래 '프로모션 코드 입력'란에 코드 붙여넣기" },
                { step: "6", title: "할인 확인 및 결제", desc: "'할인쿠폰 코드가 성공적으로 적용되었습니다' 확인 후 결제" },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <CtaButton text="프로모션 전용 링크로 접속하기 →" className="w-full" />
            </div>
          </div>
          <div>
            <img src={mobileBooking} alt="아고다 할인코드 입력 화면" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full mb-6" />

            <div className="bg-info/10 border border-info/30 rounded-lg p-4">
              <h4 className="font-bold text-sm mb-2">📱 모바일 웹 사용법</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• PC와 동일한 과정으로 진행</li>
                <li>• 할인코드 입력란: 결제 금액 확인란 바로 위에 표시</li>
                <li>• 모바일에서 불안정한 경우 PC 권장</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 앱 사용법 */}
        <div className="bg-muted rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">📲 앱 전용 할인코드 사용법</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "프로모션 링크로 앱 할인코드 페이지 이동",
              "할인코드 입력 후 체크 → Wallet에 저장",
              "여러 코드가 있으면 반복 저장",
              "앱 메인에서 정상 숙소 검색",
              "결제 시 Wallet에서 코드 선택 적용",
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm mx-auto mb-2">{i + 1}</div>
                <p className="text-xs text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 카드사 프로모션 적용법 */}
        <div className="discount-card mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4">💳 카드사 프로모션 적용법</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>해당 카드사 전용 프로모션 페이지에서 접속 (별도 코드 불필요)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>숙소 선택 후 결제 수단으로 해당 카드 선택</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>카드 번호 입력 시 즉시 할인 혜택 확인</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>일부 카드는 핀번호 입력 필요</span>
                </li>
              </ol>
            </div>
            <img src={cardPromotions} alt="카드사 프로모션 적용" width={800} height={600} loading="lazy" className="rounded-xl w-full" />
          </div>
        </div>
      </section>

      {/* 트러블슈팅 */}
      <section className="bg-muted" aria-label="트러블슈팅" id="troubleshooting">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">할인코드 적용이 안 될 때</h2>
              <p className="text-muted-foreground">9가지 주요 원인과 해결 방법을 확인하세요.</p>
            </div>
            <img src={troubleshooting} alt="할인코드 트러블슈팅 가이드" width={800} height={600} loading="lazy" className="rounded-xl shadow-lg w-full" />
          </div>

          <div className="space-y-4">
            {[
              { num: 1, title: "프로모션 전용 링크 미사용", symptom: "할인코드 입력란이 안 보이거나 '유효하지 않은 코드' 메시지", cause: "일반 접속 시 입력란 비활성화", solution: "프로모션 전용 링크로 접속. 쿠키 삭제 후 재접속" },
              { num: 2, title: "앱에서 웹 전용 코드 사용 시도", symptom: "앱에서 코드 입력란이 없음", cause: "대부분 PC/모바일 웹 전용", solution: "PC/모바일 웹 브라우저(Chrome, Safari)로 접속" },
              { num: 3, title: "최소 결제 금액 미달", symptom: "코드 입력해도 할인 미적용", cause: "'$100 이상 결제 시 적용' 등 최소 금액 조건", solution: "숙박일 추가, 조식 포함 등으로 금액 충족" },
              { num: 4, title: "적용 제외 숙소 (체인호텔/특가)", symptom: "입력란 안 나타나거나 금액 변동 없음", cause: "메리어트, 힐튼 등 체인호텔 대부분 불가", solution: "다른 숙소 선택 또는 캐시백 사이트 활용" },
              { num: 5, title: "유효기간 만료", symptom: "'유효하지 않은 코드' 메시지", cause: "예약 기간 경과", solution: "최신 코드로 재시도 (매월 갱신)" },
              { num: 6, title: "사용 횟수 초과", symptom: "이전에는 되었으나 갑자기 안 됨", cause: "코드별 사용 횟수 제한", solution: "다른 할인코드로 시도" },
              { num: 7, title: "로그인 미상태", symptom: "코드 입력란이 보이지 않음", cause: "회원 전용 쿠폰은 로그인 필요", solution: "아고다 계정 로그인 후 재시도" },
              { num: 8, title: "사이트 설정 오류 (언어/통화)", symptom: "코드는 맞는데 적용 안 됨", cause: "언어/통화가 한국어/KRW 아님", solution: "언어 → 한국어, 통화 → KRW로 변경" },
              { num: 9, title: "브라우저 쿠키/캐시 문제", symptom: "전용 링크로 접속해도 입력란 안 보임", cause: "이전 쿠키가 프로모션 링크 무시", solution: "쿠키 삭제 → 시크릿 모드로 전용 링크 재접속" },
            ].map((item) => (
              <details key={item.num} className="faq-item group">
                <summary className="cursor-pointer font-semibold text-sm list-none flex justify-between items-center">
                  <span className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-xs font-bold">{item.num}</span>
                    <span>{item.title}</span>
                  </span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0 ml-2">▼</span>
                </summary>
                <div className="mt-3 ml-10 text-sm text-muted-foreground space-y-2">
                  <p><strong>증상:</strong> {item.symptom}</p>
                  <p><strong>원인:</strong> {item.cause}</p>
                  <p><strong>해결:</strong> {item.solution}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 bg-warning/10 border border-warning/30 rounded-lg p-4">
            <h3 className="font-bold text-sm mb-2">⚠️ 추가 주의사항</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• 할인코드는 대부분 호텔 숙박 예약에만 유효 (항공권, 액티비티 불가)</li>
              <li>• 이미 특가가 적용된 경우 추가 코드 입력 차단</li>
              <li>• 할인은 세금·봉사료 제외 '객실 요금'에만 적용 → 체감 할인율 낮을 수 있음</li>
              <li>• 결제 완료 후에는 할인코드 추가 적용 불가</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 카드 프로모션 트러블슈팅 */}
      <section className="section-container" aria-label="카드 프로모션 트러블슈팅">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">카드 프로모션 적용이 안 될 때</h2>
        <div className="table-responsive">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-3 text-left">증상</th>
                <th className="p-3 text-left">원인</th>
                <th className="p-3 text-left">해결법</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["카드 할인이 안 보임", "일반 아고다 페이지에서 접속", "카드사 전용 페이지 URL로 접속"],
                ["할인율이 기대보다 낮음", "원화(KRW) 결제 이중환전 수수료", "USD 또는 현지 통화로 변경"],
                ["선결제 옵션이 안 보임", "해당 숙소가 후결제만 지원", "선결제 가능한 숙소 선택"],
                ["할인이 갑자기 종료됨", "카드사 월별 예산 소진", "다른 카드사로 전환, 익월 초 재시도"],
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
      </section>

      {/* 예약 변경·취소 */}
      <section className="bg-muted" aria-label="예약 변경 취소">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">예약 변경·취소 관련</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="discount-card">
                <h3 className="font-bold mb-2">📝 예약 변경/취소 방법</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 아고다 웹/앱 '내 예약'에서 상세 정보 확인</li>
                  <li>• '예약 취소' 또는 '예약 변경' 버튼으로 직접 처리</li>
                  <li>• 환불은 할인 적용 후 결제 금액 기준</li>
                </ul>
              </div>
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">🚨 할인코드 관련 주의</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• 할인코드는 대부분 <strong>1회용</strong> — 취소 시 재사용 불가</li>
                  <li>• 노쇼(No-Show) 시 첫날 또는 전액 청구 가능</li>
                  <li>• 하루 늦게 도착 시 반드시 호텔에 미리 연락</li>
                </ul>
              </div>
            </div>
            <div className="discount-card">
              <h3 className="font-bold mb-4">📞 아고다 고객센터</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>전화:</strong> +82 70 4784 4366</p>
                <p><strong>운영시간:</strong> AM 09:00 ~ PM 09:45 (월~일)</p>
                <p><strong>이외 시간:</strong> 영어 상담</p>
                <p><strong>필요 정보:</strong> 예약번호 + 결제 카드 마지막 4자리</p>
                <p><strong>실시간 채팅:</strong> 앱/웹에서 고객센터 채팅 가능</p>
              </div>
              <img src={savingsConcept} alt="아고다 고객 지원" width={400} height={300} loading="lazy" className="rounded-lg w-full h-32 object-cover mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 빠른 해결 체크리스트 */}
      <section className="section-container" aria-label="빠른 해결 체크리스트">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">💡 빠른 해결 체크리스트</h2>
        <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border p-6">
          <p className="text-sm text-muted-foreground mb-4">할인코드가 안 될 때, 아래 순서대로 확인하세요:</p>
          <ol className="space-y-3 text-sm">
            {[
              "프로모션 전용 링크로 접속했는가?",
              "PC 웹 또는 모바일 웹(브라우저)인가? (앱 아닌지 확인)",
              "아고다에 로그인 되어 있는가?",
              "언어: 한국어 / 통화: KRW로 설정했는가?",
              "'쿠폰 적용 가능' 표시가 있는 숙소인가?",
              "코드 유효기간이 남아있는가?",
              "최소 결제 금액을 충족했는가?",
              "브라우저 쿠키를 삭제하고 시크릿 모드로 재시도했는가?",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 text-center">
            <CtaButton text="프로모션 전용 링크로 다시 접속 →" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground text-center py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">문제가 해결되셨나요?</h2>
        <p className="opacity-90 mb-6">아래 전용 링크로 접속하면 할인코드가 정상 적용됩니다</p>
        <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer nofollow" className="cta-button text-lg py-4 px-8 inline-block">
          할인 적용하고 예약하기 →
        </a>
      </section>
    </>
  );
};

export default HowToUsePage;
