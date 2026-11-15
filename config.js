/* 이 파일만 고치면 모든 페이지에 반영됩니다. */
window.HR_CONFIG = {
  company: "미래에셋생명",
  team: "인사혁신팀",
  phone: "02-3271-4298",
  phoneExt: "내선 4298",
  email: "hr@example.com",
  hours: "평일 08:30–18:00 (점심 11:30–13:00)",
  location: "본사 17층 인사혁신팀",
  // 사내 시스템 링크: url을 실제 주소로 바꾸세요
  internalLinks: [
    { name: "근태·휴가 시스템", desc: "연차 신청, 잔여 연차 확인", url: "#" },
    { name: "급여명세서", desc: "월별 급여명세서 조회", url: "#" },
    { name: "증명서 발급", desc: "재직·경력증명서 신청", url: "#" },
    { name: "복지 포털", desc: "복지 포인트, 건강검진", url: "#" }
  ],
  // 공공기관 링크는 필요하면 추가·삭제하세요
  publicLinks: [
    { name: "고용24", desc: "육아휴직·실업급여 신청", url: "https://www.work24.go.kr/" },
    { name: "4대사회보험 정보연계센터", desc: "가입 내역 조회", url: "https://www.4insure.or.kr/" },
    { name: "국민연금", desc: "연금 가입 내역·예상 연금", url: "https://www.nps.or.kr/" },
    { name: "국민건강보험", desc: "보험료 조회·피부양자", url: "https://www.nhis.or.kr/" },
    { name: "홈택스", desc: "연말정산 간소화·소득금액증명", url: "https://www.hometax.go.kr/" },
    { name: "국가법령정보센터", desc: "근로기준법 등 원문", url: "https://www.law.go.kr/" }
  ],
  // 4대보험 요율(근로자 부담, %): 매년 1월·7월 확인 후 고치세요
  rates: { pension: 4.75, health: 3.595, ltc: 13.14, employment: 0.9, pensionMin: 400000, pensionMax: 6370000 },
  // 연말정산 계산 기준(2026년 귀속). 세법이 바뀌면 인사팀이 확인 후 고치세요.
  tax: {
    // [과세표준 상한, 세율, 누진공제] 마지막 줄의 null은 상한 없음
    brackets: [[14000000,0.06,0],[50000000,0.15,1260000],[88000000,0.24,5760000],[150000000,0.35,15440000],[300000000,0.38,19940000],[500000000,0.40,25940000],[1000000000,0.42,35940000],[null,0.45,65940000]],
    basicDeduction: 1500000,          // 기본공제 1인당
    standardCredit: 130000,           // 표준세액공제
    childCredit: [250000, 300000, 400000], // 8세 이상 자녀: 첫째, 둘째, 셋째부터 1명당
    cardMinRate: 0.25,                // 총급여의 25% 초과 사용분부터 공제
    cardCreditRate: 0.15,             // 신용카드
    cardDebitRate: 0.30,              // 체크카드·현금영수증
    cardCaps: [[70000000,3000000],[120000000,2500000],[null,2000000]] // [총급여 상한, 공제 한도]
  },
  rulesAsOf: "2026년 11월"
};
