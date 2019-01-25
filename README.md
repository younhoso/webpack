# Webpack 사용방법
웹팩 기본에 대해 알아 봅시다.

#### Getting-Started
0. 프로젝트 폴더를 원하는 위치에 생성한다.
```
mkdir 프로젝트명
ex) mkdir A-project
```

1. 글로벌로 webpack 설치

  ```
  npm i webpack -g (처음 webpack 설치할때 필수)
  ```


2. 패키지 json 파일 만들기

  ```
  npm init
  ```


3. index.js 및 index.html을 작성하십시오

  ```
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
  ```
  // index.js
  function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
  }
  ```
  4. 이 명령을 사용하여 lodash 라이브러리를 설치하십시오.

  ```
  npm i lodash --save
  ```

  
  
