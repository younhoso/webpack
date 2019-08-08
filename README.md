# Webpack 사용방법
웹팩 기본에 대해 알아 봅시다.

#### Getting-Started
0. 프로젝트 폴더를 원하는 위치에 생성한다.
```
/*터미널*/
mkdir 프로젝트명
ex) mkdir A-project
```

1. 글로벌로 webpack 설치

  ```
  /*터미널*/
  npm install webpack webpack-cli -g   (처음 webpack 설치할때 필수)
  //webpack-cli는 webpack이 버전 4.5이상 버전이 올라가면서 같이 꼭 설치를해야한다.
  ```

2. 패키지 json 파일 만들기

  ```
  /*터미널*/
  npm init      //여러 옵션을 설정할때 사용한다.
  npm init -y   //여러 옵션을 기본값으로 사용할때 쓴다.
  ```


3. index.js 및 index.html을 생성해 작성하십시오

  ```html
  <!-- index.html -->
  <html>
    <head>
      <title>webpack 2 demo</title>
    </head>
    <body>
      <script src="app/index.js"></script>
    </body>
  </html>
  ```
  ```js
  // index.js
  function component () {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
  }
  
  document.body.appendChild(component());
  ```
  
  4. 이 명령을 사용하여 node_modules파일을 생성한다.


  5. 이 명령을 사용하여 lodash 라이브러리를 설치하십시오.

  ```
  /*터미널*/
  npm i lodash --save
  npm install webpack lodash --seve-dev //이렇게 같이 설치해도 상관없다.
  ```
  그리고 import 코드를 추가시켜준다.
  ```js
  // index.js
  import _ from 'lodash'; //(추가시켜준다.)
  
  function component () {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
  } 
  
  document.body.appendChild(component());
  ```
  6.webpack.config.js파일을 생성하고, 아래 코드를 추가 시켜준다.
  ```
  /*터미널*/
  npm install path --save
  ```
  
  ```js
  //webpack.config.js
  var path = require('path'); //path 라이브러리 불러오기

  module.exports = {
    entry: './app/index.js',  // 번들링할 대상을 말한다.
    output: {                 // 번들링을 했을때 나오는 결과물
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')   //__dirname라고한것을 절대경로를 현재 폴더까지 생략해서 __dirname라고만 칭하는 것이다. 
    }
  };
  ```
  7. webpack 빌드
  장점: webpack.config.js를 구성하고, webpack라고만 명령어 치면 자동으로 webpack.config.js파일을 찾는다. 그리고 그안에 로직대로 빌드를 실행한다.
  ```
  /*터미널*/
  webpack
  ```
  
  
# Webpack scss build 사용방법

#### Getting-Started

초반 세팅은 위에서 3번 내용까지 동일합니다.

4. 이 명령을 사용하여 webpack에서 sass build 하기위해 필요한 모든 라이브러리를 철시한다.
  
  ```
  /*터미널*/
  npm i sass-loader node-sass webpack style-loader css-loader --save-dev
  ```
  
  5. webpack.config.js파일을 생성하고, 아래 코드를 추가 시켜준다.
  ```js
  //webpack.config.js
  var path = require('path');

  module.exports = {
    entry: './app/index.js',  // 번들링할 대상을 말한다.
    output: {                 // 번들링을 했을때 나오는 결과물
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')   //__dirname라고한것을 절대경로를 현재 폴더까지 생략해서 __dirname라고만 칭하는 것이다. 
 },
  ---------------------------- //다음내용 추가
    module: {
      rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          }
      ]
    },
  ----------------------------
  };
  ```
  6. 번들링할 대상 파일에서(index.js) scss파일도 불러온다.
 ```js
  // index.js
  import '../styles/scss/style.scss';//(추가시켜준다.)
  import _ from 'lodash'; 
  
  function component () {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
  } 
  
  document.body.appendChild(component());
  ```
  7. webpack 빌드
  장점: webpack.config.js를 구성하고, webpack라고만 명령어 치면 자동으로 webpack.config.js파일을 찾는다. 그리고 그안에 로직대로 빌드를 실행한다.
  ```
  /*터미널*/
  webpack
  ```
  
  ![alt text](http://younhoso.synology.me/web_images/webpack2.png)<br/> 
  다음과 같은 순서대로 빌드된다.
  
  
  
  # Webpack TypeScript build 사용방법 및 css파일 외부로 불리하기
  
  #### Getting-Started
  
  초반 세팅은 위에서 3번 내용까지 동일합니다.
  
  4.webpack에서 TypeScript build 하기위해 필요한 라이브러리는 없다.<br/>
  다만 주의해야 할게 있다.<br>
  
  4-1 index.js -> index.ts 확장자를 변경한다.    
  4-2 그럼 import 해오는 lodash 라이브러리를 인식 못할것이다. 
  ```
   /*터미널*/
   npm install @types/lodash --save-dev;  //ts로 확장자 변경하면 npm install할때 @types를 꼭 붙여줘야한다.(다른 라이브러리도 모두 마찬가지다)
   npm install @types/jquery --save-dev;  //ts로 확장자 변경하면 npm install할때 @types를 꼭 붙여줘야한다.(다른 라이브러리도 모두 마찬가지다)
  ```
    
  ```js
  /*index.ts*/

  import * as _ from 'lodash';  // import 구문을 이렇게 수정해줘야한다.
  function component () {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
    }
  document.body.appendChild(component());
  ```
  ```js
  /*webpack.config*/

  const path = require('path');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css파일로 컴파일해 별도의 파일로 불리해서 따라 생성시키기 위한 플러그인

  module.exports = {
    entry: './app/index.ts',  // 번들링할 대상을 말한다.
    output: {                 // 번들링을 했을때 나오는 결과물
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')   //__dirname라고한것을 절대경로를 현재 폴더까지 생략해서 __dirname라고만 칭하는 것이다. 
    }
  },
  ---------------------------- //다음내용 추가
      module: {
      rules: [
          { // scss
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          },
          { //babel es2015 
            test: /\.js$/,
            include: path.resolve(__dirname, 'dist'),
            use: {
              loader:'babel-loader',
              options: {
                presets: ['es2015', {modules: false}]
              }
            }
          },
          { // images css에서 background-image 속성 사용할때 필요하다. 
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'dist-img/'
                }
              }
            ]
          },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
        disable: false,
        allChunks: true
      })
    ]
  ----------------------------
  };
  ```
  ```js
  /*package.json*/
  {
    "name": "webpacktest2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [ ],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/jquery": "^3.3.29",
        "@types/lodash": "^4.14.120",
        "css-loader": "^2.1.0",
        "extract-text-webpack-plugin": "^4.0.0-beta.0", 
        // extract-text-webpack-plugin 사용하지 마세요!! 지우지 않고 여기에 작성한 이유는 이런 플러그인도 있다는 걸 보여주기 위함입니다.
         "file-loader": "^3.0.1",
         "mini-css-extract-plugin": "^0.5.0",
        //extract-text-webpack-plugin 대신 mini-css-extract-plugin을 사용하세요!!
        "node-sass": "^4.11.0",
        "sass-loader": "^7.1.0",
        "style-loader": "^0.23.1",
        "ts-loader": "^5.3.3",
        "webpack": "^4.29.0"
    },
    "dependencies": {
        "jquery": "^3.3.1",
        "lodash": "^4.17.11",
        "path": "^0.12.7",
    }
  }
  ```
