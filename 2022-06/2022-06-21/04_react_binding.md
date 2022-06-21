## 4. Binding

- 리액트에서 양방향 바인딩은 어떻게 구현할까?

- 아래와 같이 값이 입력되어 `onChange`속성으로 상태 값을 변경시킴과 동시에 `value`를 `userInput`의 상태로 설정해준다.
- 그러면, input이 바뀔 때는 `userInput`  값이 바뀌고, 반대의 경우에도 `value`로 인하여 서로 값을 바꾸는 관계를 형성한다.

```react
const [userInput, setUserInput] = useState({
    name: 'chulsoo',
    age: 8,
    created_at: '2021'
})

const changeAge = (e) => {
    setUserInput((prevState) => {
        return {...userInput, age: 5}
    })
}

const submitHandler = (e) => {
    e.preventDefault();
    //이곳에 post 요청을 보낼 수도 있음!
    setUserInput('')
}


//value를 이용한 양방향 바인딩
<form onSubmit="submitHandler">
	<input type="text" value={userInput.name} onChange={changeAge}/>
</form>
```

