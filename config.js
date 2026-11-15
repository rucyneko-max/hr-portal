/* 이 파일만 고치면 모든 페이지에 반영됩니다. */
window.HR_CONFIG = {
  company: "미래에셋생명",
  team: "인사혁신팀",
  phone: "02-3271-4298",
  phoneExt: "내선 4298",
  email: "byeri5124@miraeasset.com",
  hours: "평일 08:30–18:00 (점심 11:30–13:00)",
  location: "서울 마포구 만리재로 24, 미래에셋생명 빌딩 17층 인사혁신팀",
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
  rulesAsOf: "2026년 11월"
};
