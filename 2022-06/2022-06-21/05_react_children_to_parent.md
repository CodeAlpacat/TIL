## 5. 상향식 데이터 전달

- 부모 컴포넌트는 `props`를 통해 데이터를 전달한다. 그렇다면 자식은 어떻게 데이터를 부모에게 전달할까?
- 아래와 같이 하면 된다.
  - 부모 컴포넌트에서 자식 컴포넌트의 데이터를 받아올 함수를 만들어 `props`로 넘긴다
  - 자식 컴포넌트가 받은 함수에 데이터를 인자로 받는다.
  - 인자로 받은 데이터를 처리한다.


```react
//자식 컴포넌트에서 submit을 통해 데이터를 전달
const submitHandler = (e) => {
    e.preventDefault();
    //이곳에 post 요청을 보낼 수도 있음!
    //axios.post('URL')
    props.getDataOfChildren(userInput) // 제출한 값을 인자로 받음.
    setUserInput('')
}

/////////////////////////////////////////

// 부모 컴포넌트


//자식에게서 data를 받아올 함수
const getDataOfChildren =  (childrenData) => {
    const newDataForm = {
        ...childrenData, //인자를 객체로 받아와 id를 부여해 새로운 객체 생성
        id: Date.now()
    }
    //여기서 setState를 통해 새로 저장하거나 사용!
}

//props로 자식의 데이터를 가져올 함수를 전달
return (
	<div>
    	<ChildrenComponent getDataOfChildren={getDataOfChildren}/>
    </div>
)
```

