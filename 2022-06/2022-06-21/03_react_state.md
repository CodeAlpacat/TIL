## 3. State

- `useState`를 객체로 다루는 옳은 방법을 알아볼 것이다.

- useState의 두 번째 인자는 무조건 그 안의 값으로 **대체**한다.
- 그 원리를 이용해 현재 첫 인자인 `userInput`을 가져와서 사용하게 된다.
- 그런데 비동기 작업 등 여러가지 상태 업데이트가 계획되어있다면, 잘못된 시점의 userInput을 받아 올 수 있다.
  - 1번 예시와 같이 사용하면 가장 최신의 `userInput`을 가져왔다고 확신할 수 없다.
  - 2번 예시는 업데이트된 `userInput`을 인자로 받아와 새로 업데이트해 반환하므로 가장 최신의 값을 받아온다고 확신할 수 있다.

```react
const [userInput, setUserInput] = useState({
    name: 'chulsoo',
    age: 8,
    created_at: '2021'
})
// spread 연산자 1
const exFunction = (e) => {
    setUserInput({
        ...userInput, //잘못된 시점의 userInput을 받아올 수 있음.
        age: 5,
    })
}

//spread 연산자 2
const exFunction = (e) => {
    setUserInput((prevState) => { //prevState는 따끈따근한 최신의 userInput 상태를 가져오므로 세이프한 방법임.
        return {...userInput, age: 5}
    })
}
```

