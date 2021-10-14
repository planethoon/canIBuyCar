<h1 align="center">:file_cabinet: canIBuyCar</h1>

## :memo: 설명

**드림카 구매를 위한 최적의 저축 시작 시기 제공 서비스**

집 하나 장만하기 힘든 21세기 청년들은 자신이 원하는 집은 이미 저 하늘의 별이 되어 손에 닿지 않는데<br/><br/>
*' 그렇다면 내가 마음속에 그리던 드림카는 살 수 있을까? '<br />*<br/>
혹시 차는 노력해보면 가능하지 않을까 생각해보게 되는 현실<br />
외면하고 있지만, 누구나 자신이 꿈꾸던 드림카들이 있을 텐데<br />
바로 그 드림카를 가지기 위해서 내가 언제부터 노력했어야 하는지 현실적으로 알려드립니다!<br />
###### 어쩌면 중세시대부터 모았어야 할 수도 있지만..
<br/>

## :books: 기능

### [로그인 된 사용자 기능] 
------------

1. Create
    + board에서 comment 작성하여 글 추가하는 기능
 
    + 해당 comment에 '좋아요'를 추가하는 기능
    + 차 목록에서 bookmark로 즐겨찾기를 추가하는 기능
    + 회원 가입하여 유저 추가하는 기능
    <br/>
2. Read(car, board, bookmark)
    + car의 이미지를 클릭 시, 해당 car의 이름, 가격, 종류를 출력시켜주는 기능
    
    + car의 가격에 따라 저축금액을 작성 시 예상 저축 기간을 메세지로 출력시켜주는 기능
    + mypage에서 자신이 추가한 즐겨찾기 목록을 출력시켜주는 기능
    + mypage에 진입 시 자신의 이름을 출력시켜주는 기능
    + board에 작성되어있는 글들을 출력시켜주는 기능
    + board에 comment의 내용과 '좋아요'의 갯수를 출력시켜주는 기능
    <br/>
3. Update
    + mypage의 자신의 이름을 수정 할 수 있는 기능
    
    + mypage의 자신의 비밀번호를 수정 할 수 있는 기능
    <br/>
4. Delete
    + 자신의 bookmark를 삭제하는 기능
    
    + 자신이 작성한 comment 삭제하는 기능
    + 회원 탈퇴 기능
    <br/>
5. List(all)
    + main 화면에서 전체 브랜드 목록을 확인 할 수 있는 기능
    
    <br/>
6. List(category)
    + 원하는 브랜드명을 클릭하면, 그 브랜드에 있는 car의 목록을 확인 할 수 있는 기능
    
    <br/>
7. Search(car)
     + 해당 브랜드의 car 이름을 입력하면 해당 car의 이미지가 출력
     
     <br/>
8. quit
    + 메인페이지나 다른 브랜드의 화면으로 이동할 수 있는 기능
    
    <br/>
### [일반 사용자 기능] 
------------

1. Create
    + 해당 comment에 '좋아요'를 추가하는 기능
    
    <br/>
2. Read(car, board, bookmark)
    + car의 이미지를 클릭 시, 해당 car의 이름, 가격, 종류를 출력시켜주는 기능
    
    + car의 가격에 따라 저축금액을 작성 시 예상 저축 기간을 메세지로 출력시켜주는 기능
    + board에 comment의 내용과 '좋아요'의 갯수를 출력시켜주는 기능
    <br/>
3. List(all)
    + main 화면에서 전체 브랜드 목록을 확인 할 수 있는 기능
    
    <br/>
4. List(category)
    + 원하는 브랜드명을 클릭하면, 그 브랜드에 있는 car의 목록을 확인 할 수 있는 기능
    
    <br/>
5. Search(car)
     + 해당 브랜드의 car 이름을 입력하면 해당 car의 이미지가 출력
     
     <br/>
6. quit
    + 메인페이지나 다른 브랜드의 화면으로 이동할 수 있는 기능
    
    <br/>
## 🌲 Project tree

작성하고 싶은 내용 🙈

```text
.
├── .github
├── client
│   ├── public
│   ├── src 
│   │   ├── components
|   │   │   ├── brand
|   |   │   │   ├── Search.js
|   |   │   │   └── SideMenu.js
|   │   │   ├── car
|   |   │   │   ├── ClientComment.js
|   |   │   │   └── ServerComment.js
|   │   │   ├── Backgroud.js
|   │   │   ├── BookmarkButton.js
|   │   │   ├── Bookmark.js
|   │   │   ├── Calculations.js
|   │   │   ├── CheckLogin.js
|   │   │   ├── CheckPW.js
|   │   │   ├── Comment.js
|   │   │   ├── ContentContainer.js
|   │   │   ├── DeleteUserinfo.js
|   │   │   ├── EditComplete.js
|   │   │   ├── EditUserInfo.js
|   │   │   ├── Footer.js
|   │   │   ├── LoadingIndicator.js
|   │   │   ├── LoadingSign.js
|   │   │   ├── MypageSideBar.js
|   │   │   ├── Navbar.js
|   │   │   ├── StyledButton.js
|   │   │   ├── StyledDiv.js
|   │   │   ├── StyledInput.js
|   │   │   └── StyledLink.js
│   │   ├── img 
|   │   │   ├── brandLogo
|   │   │   ├── marked.png
|   │   │   └── unmarked.png
│   │   ├── pages
|   │   │   ├── Board.js
|   │   │   ├── Brand.js
|   │   │   ├── Car.js
|   │   │   ├── Landing.js
|   │   │   ├── Login.js
|   │   │   ├── Main.js
|   │   │   ├── Mypage.js
|   │   │   ├── Signup.js
|   │   │   └── SignupComplete.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── reset.css
|   |
│   ├── package.json
│   └──  README.md
├── server
│   ├── config
│   ├── controllers
│   │   ├── auth
|   │   │   ├── edit.js
|   │   │   ├── emailValidate.js
|   │   │   ├── index.js
|   │   │   ├── login.js
|   │   │   ├── logout.js
|   │   │   ├── password.js
|   │   │   ├── remove.js
|   │   │   └── signup.js
│   │   ├── board
|   │   │   ├── create.js
|   │   │   ├── getAll.js
|   │   │   ├── index.js
|   │   │   └── remove.js
│   │   ├── bookmark
|   │   │   ├── create.js
|   │   │   ├── getAll.js
|   │   │   ├── index.js
|   │   │   └── remove.js
│   │   ├── car
|   │   │   ├── getCars.js
|   │   │   └── index.js
│   │   ├── comment
|   │   │   ├── create.js
|   │   │   ├── index.js
|   │   │   └── remove.js
│   │   ├── result
|   │   │   ├── getByYear.js
|   │   │   └── index.js
│   │   └── index.js
│   ├── migrations
│   ├── models
│   │   ├── car.js
│   │   ├── comment.js
│   │   ├── index.js
│   │   ├── result.js
│   │   ├── user.js
│   │   ├── users_car.js
│   │   └── users_comment.js
│   ├── routers
│   │   ├── auth.js
│   │   ├── board.js
│   │   ├── bookmark.js
│   │   ├── car.js
│   │   ├── comment.js
│   │   └── result.js
│   ├── seeders
│   │   ├── seed1-user.js
│   │   ├── seed2-car.js
│   │   └── seed3-result.js
│   ├── package.json
│   └── index.js
├── scripts 
│   ├── initialize.sh
│   ├── start.sh
│   └── stop.sh
├── appspec.yml
├── buildspec.yml
└── README.md
```

## :wrench: 사용된 기술
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/Node.js-4FC08D?style=for-the-badge&logo=Node.js&logoColor=white"> 
<img src="https://img.shields.io/badge/Sequelize-007396?style=for-the-badge&logo=Sequelize&logoColor=white"> 
<img src="https://img.shields.io/badge/Amazon%20AWS-6DB33F?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"> 
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
<img src="https://img.shields.io/badge/JSON%20Web%20Tokens-003545?style=for-the-badge&logo=JSON%20Web%20Tokens&logoColor=white"> 
<img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"> 
<img src="https://img.shields.io/badge/Express-0769AD?style=for-the-badge&logo=Express&logoColor=white"> 
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/React%20Router-7952B3?style=for-the-badge&logo=React%20Router&logoColor=white"> 
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> 
<img src="https://img.shields.io/badge/styled-components-F50057?style=for-the-badge&logo=styled-components&logoColor=white"> 




## :rocket: 프로젝트 실행
실행결과
```
<linha de comando>
```

## :soon: 링크 주소
* 주소

## :handshake: 기획자
<table>
  <tr>
    <td align="center">
      <a href="http://github.com/planethoon">
        <img src="https://avatars.githubusercontent.com/u/56259137?v=4" width="100px;" alt="신성훈"/>
        <sub>
          <b>신성훈</b>
        </sub>
        <a href="http://github.com/Eom-Hyejin">
        <img src="https://avatars.githubusercontent.com/u/56259137?v=4" width="100px;" alt="엄혜진"/>
        <sub>
          <b>엄혜진</b>
        </sub>
          <a href="http://github.com/ydh94">
        <img src="https://avatars.githubusercontent.com/u/56259137?v=4" width="100px;" alt="유대형"/>
        <sub>
          <b>유대형</b>
        </sub>
            <a href="http://github.com/glen15">
        <img src="https://avatars.githubusercontent.com/u/56259137?v=4" width="100px;" alt="이정훈B"/>
        <sub>
          <b>이정훈B</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Advanced
