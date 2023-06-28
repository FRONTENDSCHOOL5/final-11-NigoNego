## 니고네고
![니고네고 목업](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/48938203/8ee86093-1257-416d-b628-1c3e8ed73367)

- 배포url(추후 배포)
- Test ID/PW: nigonego@test.com / 123123

<br />

## 목차
1. 프로젝트 소개
2. 팀 소개
3. 개발 기간
4. 개발 환경
5. 폴더 구조
6. 작업 문화
7. 주요 기능
8. 기능 UI
9. 컨베션
10. 리팩토링
11. 소감
12. 출처
<br />

## 1. 프로젝트 소개
니고네고는 레고를 좋아하는 사람들을 위한 레고 전용 플랫폼입니다. <br />
니고네고에서 사용자는 자신이 직접 조립한 레고 사진을 공유하고 다양한 유저와 소통할 수 있습니다. <br />
중고 사이트 기준으로 하루 600건 이상 업로드될 정도로 시장이 활발하게 형성되어 있는 만큼, 유저를 위한 중고 거래 기능 또한 제공하고 있습니다.

<br />

## <span id="teamInfo">2. 팀 소개</span>
안녕하세요 저희는 K(김민지)K(권순호)O(오연주)L(이수아)로 이루어진 꿀조입니다!

<br />

### 1. 팀원 소개

| 권순호 | 김민지 | 오연주 | 이수아 |
| ------ | -------- | ------------- | -------- |
| <img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/ce15b9da-ed37-4e20-a25e-a13ea239be44" width="180" height="180"> | <img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/edb95316-8c20-4aa6-806c-1093e32acbac" width="180" height="180"> | <img src="" width="180" height="180"> | <img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/844ca019-f967-4298-9b20-472e67009057" width="180" height="180"> |



### 2. 역할 분담
#### 김민지
- 공통 컴포넌트: Modal, Input, Button, Chat
- 로그인 기능구현
- 회원가입 기능구현
- 유효성 검사 기능구현
- 프로필 설정 기능구현
- 프로필 수정 기능구현
- 채팅 마크업
- 검색 마크업
- 404 마크업

#### 권순호
- 로그인 기능구현
- 회원가입 기능구현
- 유효성 검사
- 상품 상세 페이지 기능구현
- 댓글 input 컴포넌트 기능구현
- GitHub 관리
- 업로드 페이지 마크업
- 데일리 스크럼 작성
- 로그인 마크업
- 회원가입 마크업
- 상품 상세 페이지 마크업
- 댓글 input 컴포넌트 마크업

#### 오연주
- 상품 업로드 기능구현
- 포스트 업로드 기능구현
- 버튼 활성화 기능구현
- 헤더 컴포넌트
- MyProfile, YourProfile 마크업
- 채팅창 마크업
- 로그인 마크업
- 회원가입 마크업

#### 이수아
 - 무한스크롤 기능구현
 - 상품등록 기능구현
 - 판매중인 상품 마크업 및 기능구현
 - 이미지등록 마크업 및 기능구현
 - YourProfile,HomeFeed 마크업 및 기능구현
 - 하단Navbar 마크업 및 기능구현
 - 좋아요,Followers,Followings 마크업 및 기능구현
 - 무한스크롤 마크업 및 기능구현
 - 상품등록 마크업 및 기능구현
 - 판매중인 상품 마크업 및 기능구현
 - 이미지등록 마크업 및 기능구현
 - YourProfile,HomeFeed 마크업 및 기능구현
 - 하단Navbar 마크업 및 기능구현
 - 좋아요,Followers,Followings 마크업 및 기능구현


<br />


## 3. 개발 기간

2023.06.12 - 2023.06.28

1주차: 프로젝트 기획, 피그마 디자인 작업, 깃 작업, 역할분담<br />
2주차: 컴포넌트 분리 및 마크업, 기능구현<br />
3주차: 오류 수정<br />

<br />

## 4. 개발 환경
### 프론트엔드 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-바탕색?style=flat&logo=Recoil&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styledcomponents&logoColor=white"/>
### 백엔드: 제공된 API
### 협업툴
<img src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/> 
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white"/>
### 테스트툴: 포스트맨
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/>

<br />

## 5. 폴더 구조
```jsx
final-11-NigoNego
├─ public
│  └─ index.html
├─ README.md
└─ src
   ├─ api
   │  ├─ Api.jsx
   │  └─ getData
   ├─ App.js
   ├─ assets
   │  ├─ image
   │  └─ images
   ├─ atom
   ├─ components
   │  ├─ Chat
   │  ├─ common
   │  │  ├─ AddProduct
   │  │  ├─ button
   │  │  ├─ Comment
   │  │  │  ├─ CommentInput
   │  │  │  └─ CommentPost
   │  │  ├─ Header
   │  │  ├─ Heart
   │  │  ├─ Input
   │  │  ├─ Modal
   │  │  ├─ Navbar
   │  │  ├─ User
   │  │  └─ UserImage
   │  ├─ HomePost
   │  ├─ Product
   │  ├─ ProfileHeader
   │  ├─ Test
   │  └─ YourProfileHeader
   ├─ index.js
   ├─ pages
   │  ├─ ChatPage
   │  ├─ HomeFeed
   │  ├─ HomePage
   │  ├─ JoinPage
   │  ├─ LoginMain
   │  ├─ LoginPage
   │  ├─ NotFound
   │  ├─ PostPage
   │  │  ├─ PostMain
   │  │  └─ PostUpload
   │  ├─ ProductPage
   │  ├─ ProfilePage
   │  │  ├─ MyProfilePage
   │  │  ├─ ProfileEditPage
   │  │  └─ YourProfilePage
   │  ├─ SearchPage
   │  └─ SplashPage
   ├─ routes
   ├─ store
   └─ styles
```

## 6. 작업문화

### 6-1. 데일리스크럼
```jsx
1. 매일 아침 회의 : 당일 진행할 작업 내용 공유
2. 매일 저녁 회의 : 진행 상황 공유
```
<img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/a81bc375-5819-46ca-8a80-80b196254b58" width="150px"> <img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/595c5907-5a16-407b-a335-13a39566d483" width="150px"> <img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/186fb197-b3e6-4edf-a189-15e33f2fbb89" width="150px"> <img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/a81bc375-5819-46ca-8a80-80b196254b58" width="150px">


### 6-2. 페어코딩
라이브쉐어를 이용해 로그인/회원가입 페이지를 함께 작업했습니다. 
<img src="https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/309baafd-a9e2-477a-b148-1441f24a33b6" width="300px" />


### 6-3. branch 전략

```jsx
Git Flow
main - dev - feature[기능]

기능에 따라 브랜치를 구별하여 협업의 능률을 높였습니다.
각자 맡은 기능에 집중할 수 있었고, 연관되는 기능이 있을 경우 관련되는 기능들만 merge를 하여 오류가 나더라도 다른 기능에 영향을 주지 않을 수 있었습니다.
```

## 7.주요기능 
- 핵심 기능 : 게시물 업로드, 팔로우 기능, 상품 등록, 댓글 


## 8. 기능 UI
### 로그인/회원가입

| Splash | 로그인 | 회원가입 | 프로필 설정 |
| ------ | -------- | ------------- | -------- |
| ![splash page](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/2495580b-6579-4298-a13f-dce3e0ffe7b6) | ![로그인 페이지](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/c04f6554-eddb-430f-bdb1-3300ce7ab1bd) | ![회원가입 최종](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/47eda093-4a61-47e8-af7e-89e527955e39) | ![프로필설정](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/f5db86de-b67f-461d-b2ae-0bf55fa5d0e0) |

### 주요기능

| 홈피드 | 게시글 상세 | 게시글 업로드 | 유저프로필 |
| ------ | -------- | ------------- | -------- |
| ![홈 피드 ](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/4978e383-511d-4867-b310-ff289ad32349) | ![게시글 상세](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/33077245-31a8-4105-b539-5da975a88557) | ![게시물 업로드](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/58321210-85bd-4805-a681-31ab030baa6a) | ![유저 프로필](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/08d49ae7-c945-4c2e-95cc-c3c9e5e463e4) |

### 그외 기능

| 마이 프로필 | 상품등록 | 모달창 로그아웃 | 채팅 페이지 |
| ------ | -------- | ------------- | -------- |
| ![마이 프로필](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/5f11fdcd-bc55-41a8-bf61-d977c3d24265) | ![상품등록](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/8b54e31c-6895-4688-9cd4-dfe71aa44c06) | ![모달창 로그아웃](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/a3da4061-32a0-4d06-b16c-eee0b1fd12ce)| ![채팅방](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/d47275e1-3b4f-49d7-9d15-07317241be44) |




## 9. 컨벤션

| ✒️                                                      |
| ------------------------------------------------------- |
| ✨ Feat : 새로운 기능 추가                              |
| 💄 Design : CSS, 사용자 UI 디자인 변경                  |
| 📝 Docs : 문서 수정                                     |
| 🎨 Style : 코드포맷, 세미콜론, 개행, 코드 구조, 형태    |
| 🤔 Test : 테스트                                        |
| ♻️ Refactor : 코드 리팩토링                             |
| 🐛 Fix : 버그 및 오류 수정                              |
| 🔥 Remove : 불필요한 파일 삭제                          |
| 🔨 Chore : 빌드 업무, 패키지매니저, 폴더트리, 세팅 수정 |
| 💡 Comment : 필요한 주석 추가 및 변경                   |

---

## 10. 리팩토링 (방향성)

---
## 11. 소감
### 권순호

프로젝트가 다들 처음이라 막막하고 앞이 안보였는데
나이로비에서 만난 멋사 동기 여러분들덕분에 여기까지 올 수 있었습니다!
제가 얼마나 부족한지 깨닳는 시간이 되었고 또한 많이 성장하는 시간도 되었습니다
프로젝트를 한번 진행 하고 나니 배우고 싶은 부분이 더욱 많아 졌습니다 (필요에 의해서)
저희조는 멋사 5기수료 그리고 5.5기로 다시 찾아오겠습니다 저희 레파지토리 자주 확인해주세요

### 김민지

초반 프로젝트 설정에서 시간을 많이 소요하고 네명이서 머리를 맞대고 고민해봐도 진도가 늦어서 걱정이 많았지만, 오히려 다같이 고민하고 알아가는 시간이 많아서 좋았습니다.
무언가 안되면 한명이 고민하는게 아니라 넷이 다 같이 해결해가는 과정이 ! 꿀 조 답 다 !
프로젝트 기간이 끝나고도 다같이 공부하며 취업할 때까지 빠져나가지 못하는 개미지옥으로 만들겠습니다.

### 오연주

함께 코드에 대해 고민하고 해결해가는 과정이 즐거웠습니다. 되돌아보니 부족했던 점이 많이 보여 아쉬운 마음도 있지만 그만큼 성장한 것이라 생각하고 싶습니다. 함께 성장할 수 있도록 도와주신 멋사 5기 모든 분들께 진심으로 감사드립니다.

### 이수아

많이 부족했고 오류도 정말 많이 봤지만 결국 완성은 시켰다는 마음에 너무 뿌듯하고 정말 많이 배웠습니다.
해당 기능이 왜 필요하고 동기, 비동기적인 데이터 통신에 대한 공부가 왜 필요한지 리액트의 상태관리는 왜 해야하는지 뼈로 새겼던 프로젝트 였습니다.
7월 3일부터 아쉬웠던부분, 구현하고 싶었던 기능 , 오류를 잡아가며 즐거운 리펙토링 해나가겠습다!
다들 고생많으셨고 취업하실때까지 봅시다^^

---

## 12. 출처
### splash 이미지
https://codepen.io/Keyon/pen/jXjMKj
