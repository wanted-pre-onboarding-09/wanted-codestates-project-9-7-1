# 데이터블 과제
- gif 추가

## 프로젝트 소개

- 해시업 폼 구현하기
- 기간: 22.03.10~22.03.11

## 배포링크

[🚀 배포 링크](https://datable-9.netlify.app/)

## 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```

## 팀원 소개

| 이름   | 직책 | 역할                 |
| ----- | -- | -------------------- |
| [유송현](https://github.com/ysh2987) | 팀장 |  |
| [서한석](https://github.com/holystorySeo) | 팀원 | |
| [윤솔비](https://github.com/y-solb) | 팀원 | |
| [조영제](https://github.com/youngjeJO) | 팀원 |  |

## 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
<br/>

## 요구사항

```
해시업폼은 구글 설문지와 같은 자체 폼 서비스입니다. 사용자가 원하는 형식으로 폼을 생성할 수 있고, 사용자에게 폼을 전달해서 데이터를 입력받을 수 있습니다.
- 생성된 폼 목록
- 폼 생성
- 생성된 폼
- 입력된 데이터 목록

```

## 작업 내용

### 유송현
- 생성된 폼 목록 / 입력된 데이터 목록
  - 생성된 폼별로 제목 / 사용자 목록 / 삭제가능 하도록 구현하였습니다.
  - 작성한 폼이 많아질 경우를 고려해 pagination으로 5개씩 나누어 화면에 보여주었습니다.
  - 요구사항엔 없었지만 폼이 많아졌을 경우 사용자가 원하는 폼에 접근할 수 있도록 검색할 수 있는 기능을 추가하였습니다.
  - 입력된 데이터 목록 또한 pagination으로 구현하였으며, 사용자가 보기 쉽게 필수 요소인 경우 화면에 추가적으로 나타내었습니다.


### 서한석

### 윤솔비

### 조영제

## 디렉터리 구조

```
    src
    ├── App.js
    ├── assests
    ├── components
    │   ├── Header.js
    │   ├── atoms
    │   │   ├── AddFieldButton.js
    │   │   ├── CheckBox.js
    │   │   ├── Editor.js
    │   │   ├── FieldListHeadLIine.js
    │   │   ├── FormField.js
    │   │   ├── InputTitle.js
    │   │   ├── InputTitleHeadLine.js
    │   │   ├── OpenFormButton.js
    │   │   ├── OptionSelect.js
    │   │   ├── SaveFormButton.js
    │   │   ├── TitleHeadLine.js
    │   │   ├── WarningText.js
    │   │   └── WrongText.js
    │   ├── common
    │   │   ├── NotUser.js
    │   │   └── Pagination.js
    │   ├── formList
    │   │   ├── FormHandler.js
    │   │   ├── FormList.js
    │   │   └── FromContents.js
    │   ├── molecules
    │   │   ├── Agreement.js
    │   │   ├── AgreementDetail.js
    │   │   ├── Dropdown.js
    │   │   ├── FormFooter.js
    │   │   ├── FormHeader.js
    │   │   ├── InputAddress.js
    │   │   ├── InputImg.js
    │   │   ├── InputName.js
    │   │   └── InputPhone.js
    │   ├── organisms
    │   │   └── FormContainer.js
    │   └── pages
    │       ├── CreateFormPage.js
    │       ├── Form.js
    │       ├── Home.js
    │       └── User.js
    ├── data
    │   └── mock.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    └── store
        ├── index.js
        ├── resultDataSlice.js
        └── surveyDataSlice.js
```

## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
