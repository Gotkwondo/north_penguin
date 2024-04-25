const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index.tsx', // 앱의 소스코드 중 가장 최상단 모듈의 경로
  // output은 변환하고 번들링된 파일을 어느 디렉토리에 어떤 파일명으로 저장할 지에 대한 설정
  output: {
    path: path.resolve(__dirname, 'dist'), // 경로 설정
    filename: 'main.[hash].js', // 파일명에 각 build마다 고유한 hash 값을 부여하기 위한 설정(파일명 문자열 안에 대괄호로 감싸진 hash 키워드만 추가하면 된다)
    clean: true, // 새로 build 시에 기존의 build된 파일을 모두 삭제하는 옵션 : boolean
    // 만약 false로 설정한다고 해도 동일한 파일명을 가진 파일들은 덮어쓰여져 기존의 build에 포함되었던 static 파일 중 삭제된 것이 있더라도 build 결과물에 
    // 이것이 삭제되지 않고 남아있다. 따라서 이전 모든 build가 독립적이기 위해서는 이 옵션을 true로 설정해야한다
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/, // 어떤 파일을 대상으로 하는 지를 검증할 정규표현식(주로 확장자)
        exclude: /(node_modules)/, // test에 들어간 정규 표현식이여도 제외할 파일 및 디렉터리의 정규 표현식
        use: { // 어떤 loader를 활용할 지에 대한 규칙
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              ['babel-plugin-styled-components', { displayName: true }],
              // styled-component는 CSS-in-JS 스타일링 방식이라 JS 파일 안에 있는 styled-component 코드를 처리하기 위한 플러그인 처리
            ],
          },
        }, 
      },
      {
        test: /\.css/,
        use: [
          // 여러 로더가 있으면 아래부터 차례대로 작동한다.
          { loader: 'style-loader' }, // 아래의 로더로 변환된 css를 dom에 주입
          {
            // css 파일 내부에 @import 혹은 url을 사용할 때 JS가 모듈을 처리하는 방식(import 혹은 require)과 동일하게 작동하도록 해석
            loader: 'css-loader',
            options: {
              modules: true, // true로 설정해야지만 모든 파일에 대해 css 모듈의 활용이 가능하다.
            },
          },
        ],
      },
      {
        // webpack5 부터는 새롭게 추가된 Asset Module을 이용해 별도의 패키지 없이 이미지 등의 asset을 활용이 가능하다.
        test: /\.(png|jpe?g|gif|ico|svg)/,
        type: 'asset/resource', // 정적 asset을 처리하여 해당 파일을 별도의 파일로 출력, 경로를 반환한다.
        generator: { // generator 설정은 출력된 파일 이름을 동적으로 생성
          filename: 'images/[hash][ext][query]', // (hash: 해시 값, ext: 파일 확장자, query: 쿼리 문자열)
        },
      },
      {
        test: /\.gif$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  devServer: {
    static: { // static 파일의 위치를 나타내며 기본적으로 public 디렉토토리로 설정
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true, // SPA에서 발생하는 router 경로 이동 후 새로고침시 404 오류를 반환하는 대신 index.html을 반환해 해당 경로를 출력할 수 있게 도와줌
    compress: true, // 출력되는 결과물은 브라우저에서 압축 해제되는 gzip으로 압축된 파일로 반환하도록 설정
    port: 3000, // 개발 서버를 실행할 포트에 대한 설정(React는 통상적으로 3000번 이용)
  },
  plugins: [
    // 옵션 없이 플러그인을 추가해도 동작하지만, 옵션 인자를 추가하면 template 파일을 기본으로 플러그인이 작동한다.
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  resolve: { // js, ts, jsx, tsx 파일에 한해 import시 확장자를 생략하기 위한 설정
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      "components": path.resolve(__dirname, "src/components")
    }
  },
  mode: process.env.WEBPACKMOD === 'production' ? 'production' : 'development',
}