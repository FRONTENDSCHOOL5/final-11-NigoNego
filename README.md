## 니고네고
![니고네고 목업](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/48938203/8ee86093-1257-416d-b628-1c3e8ed73367)


- 배포url(추후 배포)
- Test ID/PW: nigonego@test.com / 123123

<br />

## 목차
<div markdown="1">
1. [프로젝트 소개](#projectInfo)
2. [팀 소개](#teamInfo)
</div>

<br />

## <span id="projectInfo">1. 프로젝트 소개</span>
니고네고는 레고를 좋아하는 사람들을 위한 레고 전용 플랫폼입니다. <br />
니고네고에서 사용자는 자신이 직접 조립한 레고 사진을 공유하고 다양한 유저와 소통할 수 있습니다. <br />
중고 사이트 기준으로 하루 600건 이상 업로드될 정도로 시장이 활발하게 형성되어 있는 만큼, 유저를 위한 중고 거래 기능 또한 제공하고 있습니다.

<br />

## <span id="teamInfo">2. 팀 소개</span>
안녕하세요 저희는 K(김민지)K(권순호)O(오연주)L(이수아)로 이루어진 꿀조입니다!

<br />

### 1. 팀원 소개

|                                                                   권순호                                                                    |                                         김민지                                                                 |                                                                    오연주                                                                     |                                                               이수아                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
|                               이미지1                              |     이미지2      |       이미지3       | 이미지4 |

### 2. 역할 분담

-김민지

- 공통 컴포넌트: Modal, Input, Button, Chat
- 마크업: 채팅 / 검색 / 404
- 기능구현: 로그인 / 회원가입 / 프로필 설정/ 프로필 수정

- 권순호
- 
- 마크업
- 기능구현
- 로그인/ 회원가입 마크업 및 기능구현
- 상품 상세 페이지 마크업 및 기능구현
- 업로드 페이지 마크업
- 댓글 input 컴포넌트 마크업및 기능구현
- 데일리 스크럼 작성
- 깃헙 관리

- 오연주
 - 마크업: 
 - 기능구현: 상품 미리보기 및 등록, 버튼 유효성 검사
 - MyProfile, YourProfile,
 - 채팅창

-이수아
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
(아이콘으로 변경)
프론트엔드: 리액트, 리코일, 스타일컴포넌트
백엔드: 제공된 API
협업툴: 깃허브, 깃, 피그마, 노션, 디스코드
테스트툴: 포스트맨

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

이미지(라운지)

### 6-2. 페어코딩
라이브쉐어를 이용해 로그인/회원가입 페이지를 함께 작업했습니다. 
![라이브쉐어](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/117130358/309baafd-a9e2-477a-b148-1441f24a33b6)


### 6-3. branch 전략

```jsx
Git Flow
main - dev - feature[기능]

기능에 따라 브랜치를 구별하여 협업의 능률을 높였습니다.
각자 맡은 기능에 집중할 수 있었고, 연관되는 기능이 있을 경우 관련되는 기능들만 merge를 하여 오류가 나더라도 다른 기능에 영향을 주지 않을 수 있었습니다.
```

## [주요 기능]  
- 핵심 기능 : 게시물 업로드, 팔로우 기능, 상품 등록, 댓글 


## [기능 UI]
### 로그인/회원가입

| Splash | 로그인 | 회원가입 | 프로필 설정 |
| ------ | -------- | ------------- | -------- |
| ![splash page](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/2495580b-6579-4298-a13f-dce3e0ffe7b6) | ![로그인 페이지](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/c04f6554-eddb-430f-bdb1-3300ce7ab1bd) | ![회원가입 최종](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/47eda093-4a61-47e8-af7e-89e527955e39) | ![프로필설정](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/59b21602-c708-4ede-bef9-c09a5ba039e1) |

### 주요기능

| 홈피드 | 게시글 상세 | 게시글 업로드 | 유저프로필 |
| ------ | -------- | ------------- | -------- |
| ![홈 피드 ](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/4978e383-511d-4867-b310-ff289ad32349) | ![게시글 상세](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/33077245-31a8-4105-b539-5da975a88557) | ![게시물 업로드](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/58321210-85bd-4805-a681-31ab030baa6a) | ![유저 프로필](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/08d49ae7-c945-4c2e-95cc-c3c9e5e463e4) |

### 그외 기능

| 마이 프로필 | 상품등록 | 모달창 로그아웃 | 채팅 페이지 |
| ------ | -------- | ------------- | -------- |
| ![마이 프로필](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/5f11fdcd-bc55-41a8-bf61-d977c3d24265) | ![상품등록](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/8b54e31c-6895-4688-9cd4-dfe71aa44c06) | ![모달창 로그아웃](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/a3da4061-32a0-4d06-b16c-eee0b1fd12ce)| ![채팅방](https://github.com/FRONTENDSCHOOL5/final-11-NigoNego/assets/85488522/d47275e1-3b4f-49d7-9d15-07317241be44) |




## 컨벤션

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

## 리팩토링 (방향성)

---

## 소감

---

|               |     |     |     |
| ------------- | --- | --- | --- |
| {소감 한마디} |     |     |     |

## 출처
