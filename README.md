# [항해99] 10기 e반 3조 박태근

## 주특기 입문주차 개인 과제

### 1. 실행화면

> [link](https://todo-list-one-indol.vercel.app/)

<img src="./img/preview.png">

### 2. Components

1. App()

2. List()

- Todo list의 내용을 나타내는 사각형의 card가 반복적으로 구성되어야 하기때문에 Child component로 List를 생성하였습니다.
- props를 사용하여 parent component인 App 에서 todoLists의 속성값인 .title과 .desc를 받도록 하였습니다.
- **삭제하기** 기능을 수행하는 버튼을 생성하고 eventhandler인 {deleteTodoListHandler} 와 연결되어 있습니다. 연결시에 key값을 parameter로 넘겨줍니다.
- **완료,취소** 기능을 수행하는 버튼을 생성하여 eventhandler인 {onChangeHandler} 와 연결되어 있습니다. 작동시에 key값을 넘겨주고 해당 key값을 가지고 있는 요소의 isDone값을 역전해줍니다.
- **완료,취소** props로 받는 isDone 값에 따라 버튼이 취소 혹은 완료로 변환되도록 삼항연산자로 구현하였습니다.

### 3. Trouble shooting
