module.exports = {
  presets: [
    "@babel/preset-react", // JSX로 작성된 코드들을 createElement 함수를 이용한 코드로 변환해 주는 플러그인이 내장되어 있음(React 변환 프리셋)
    "@babel/preset-env", // ECMAScript2015+를 변환할 때 사용. Babel 7 이후 env로 합쳐짐 (구형 브라우저 지원을 위한 프리셋)
    "@babel/preset-typescript" // 따로 작업되던 TS와 Babel을 조화롭게 병합해 사용(TS를 변환하기 위한 프리셋)
  ],
};