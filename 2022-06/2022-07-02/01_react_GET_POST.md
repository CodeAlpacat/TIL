## HTTP 요청 보내기



### 1. GET 요청 보내기

```react
const [data, setData] = useState([]);
const [loading, setLoading] = useState([false])

function getData() {
    setLoading(true);
    
    fetch('https://주소')
    .then((response) => {
        return response.json() //fetch는 자동으로 json으로 변환해주지 않아 직접 해야함.
    })
    .then((data) => {
        setData(data.results);
    })
    
    setLoading(false)
}
```



- Async Await
  - async는 `Promise` 객체를 반환하며, await를 통해 비동기적으로 실행할 수 있으며, 예약되어 task queue로 넘어가고 그 다음의 동기 작업들은 `.then`을 사용한 것과 같이 동기적으로 작동한다.

```react
const [data, setData] = useState([]);
const [loading, setLoading] = useState([false])
const [error, setError] = useState(null)

const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
        const response = await fetch('https://주소')
        
        if (response.ok) {
        return new Error("Something's wrong")
    	} //axios는 기본적으로 처리가 되어있음.
        
    	const data = await response.json();
    	setData(data)
    	setLoading(false);
    } catch(error) {
        setError(error.message);
    }
    
})

useEffect(() => { //useEffect에 의존성을 주지 않으면 최초에 1회 실행된다. 하지만, 안전하려면 넣어줘야한다.
    getData();
}, [getData])
```

- `useEffect`에 의존성을 주면 `getData`는 계속해서 변화하고 새로운 함수를 생성하며 무한루프에 빠진다.
- 무한루프를 해결하기 위해서 메모리에 함수를 올려놓고 재생성하지 않도록 useCallback을 사용하고 의존성을 추가한다.



### POST 요청 보내기

```react
const [data, setData] = useState([]);

const sendData = async (data) => {
    fetch('https://주소', {
    	method: 'POST',
        body: JSON.stringify(data) //axios에선 data: data로 사용가능
        headers: {
        	'Content-Type': 'application/json'
    	}
    })
    const newData = await response.json();
}
```

