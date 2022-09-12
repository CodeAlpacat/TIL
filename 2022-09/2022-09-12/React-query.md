# React-query

### 사용 배경

- 전역에서 상태를 관리하는 Redux는 캐싱하는 개념이다.

- 그러나 정말 클라이언트(리액트)에서 수행하는 상태 관리로도 충분할까? No No

  - 예시
    - 모달의 오픈 여부
    - 토큰값을 가지고 있는지(JWT)
    - 인풋에 입력한 값의 상태 관리

  

### 1. 서버 상태의 특징

- 다른 사람들과 페이지에서 데이터를 공유하는 경우엔 서버에서 관리하는 데이터이므로 화면이 최신인지를 정확히 알 수 없음.
- 비동기 API인 Fetch, Update 등으로 관리함
- 클라이언트의 상태와는 별개임.
- 토큰, 캐시처럼 잠재적으로 만료되거나 사라질 수 있음. 리액트에서 관리하는 state들은 일종의 캐시라고 볼 수 있음.



### 2. 클라이언트 상태의 특징

- 리액트, 뷰 등 클라이언트 자체가 온전히 제어가 가능함
- 초기값 설정 등 조작에 제약이 없음.
- 다른 사람들과 공유되지 않고 UI나 사용자의 인터렉션에 의해 변화함.
- 클라이언트 내에서는 최신 상태로 관리됨.





## React-Query란?

- 데이터 가져오기
- 캐시
- 동기화
- 데이터 업데이트

위와 같은 작업을 수행해주는 라이브러리이다.



![image](https://user-images.githubusercontent.com/90893428/189592093-df065c63-29ba-41fa-b564-d09d514132f2.png)

- 여기서 잠깐! react-query를 사용하기 위해서는 `stale`과 `CacheTime`에 대하여 알 필요성이 있다.

> 데이터를 refetch(재요청)하는 주기를 판단해주는 개념인 stale과 fresh이다.
>
> 1. `fresh` - 데이터를 받아온 직후로 가장 데이터가 **신선**한 상태를 의미한다. fresh 상태일 경우엔 새롭게 mount 되어도 네트워크 요청이 일어나지 않는다. 그래서 `staletime`을 지정해야 한다.
>
> 2. `stale` - 신선하지 않은, 즉, **낡은 데이터**를 의미하므로 refetch가 이루어짐을 알린다.
>
> 3. `staleTime` - 기본 값은 0이며, 이는 받아옴과 동시에 낡은 데이터이므로 캐싱 데이터와 상관없이 계속해서 fetch를 한다. 즉, 서버의 부담이 늘지만 데이터 구조가 자주 바뀌는 경우엔 지정해주지 않으면 된다.
>
>    4. `cacheTime` - 데이터가 `inactive`상태일 때, 캐싱된 상태로 남아있는 시간. 기본 값은 5분이다. 쿼리 인스턴스가 unmount되면 데이터는 `inactive`상태로 변경되고 `cacheTime`만큼 유지된다.
>
>       `cacheTime`이 지나면 가비지 콜렉터로 수집된다.
>
>       `cacheTime`이 지나기 전에 다시 쿼리 인스턴스가 마운트되면, 데이터를 fetch하는 사이에 캐시 데이터를 보여준다.
>
>       `cacheTime`은 `staleTime`이 아무리 길어도(임시로 보관해도) `inactive`된 시점을 기준으로 데이터를 삭제하는 시점을 결정한다. 즉, `cacheTime`이 짧으면 데이터는 어차피 사라진다.
>
>       `inactive`는 스크린에서 사용되지 않는 데이터임을 의미한다.
>
>       `cacheTime`은 말 그대로 `신선한`데이터를 유지한다. 즉, 디폴트로 `staleTime`과 `cacheTime`을 사용하면, 캐싱이 되지 않는다.
>
>       

![image](https://user-images.githubusercontent.com/90893428/189597377-4717d84d-2f5a-4263-8d60-c0caf39b89d0.png)



#### 주의점

- `enabled:false`로 설정하면 fetch 실패시 계속해서 `retry`하는 행위를 차단한다.
  - 이는 useQuery의 기능을 사용하지 않겠다는 것 이므로 수동으로 호출(refetch)을 해야한다.

- `refetch`함수는 캐싱 결과와 무관하게 ajax요청을 날린다. 이미 해당 키 값이 QueryClient 객체에 저장되어 있어도 무시하고 재요청을 보낸다.
  - 즉, 캐싱을 구현하는 경우엔 `enabled:true`상태여야만 한다.



## useQuery

- CRUD의 Read를 담당하고 데이터 요청을 담당함.

```js
import { useQuery } from 'react-query'

function App() {
    //인자 1: 쿼리 키, 인자 2: 쿼리 함수(fetch, axios 요청)
    const info = useQuery('todos', fetchTodoList)
}
```

- `Query Key` - 이 데이터를 관리할 키 값 (위의 데이터는 `todos`키에 대한 데이터)
  - 파이썬 딕셔너리 생각하면 된다. (로컬 스토리지와도 같음)
  - `Array`로 저장해 `['todos', 1]`처럼 저장해서 페이지네이션에도 활용이 가능함.
- `useQuery`의 반환값
  - `data`: 요청에 성공한 데이터
  - `error`: 에러 반환 객체
  - `isFetching`: 요청 중일 때, `true`
  - `status, isLoading, isSuccess` 등의 현재 query 상태
  - `refetch`: 해당 쿼리를 refetch하는 함수
  - `remove`: 해당 쿼리를 캐시에서 지우는 함수
  - etc

![image](https://user-images.githubusercontent.com/90893428/189600652-c6de8931-3554-4368-8853-c2ed0dcba112.png)

- `useQuery`의 옵션
  - `onSuccess onError, onSettled` 등 성공 실패 완료 시 실행할 Side Effect 정의
  - `enabled`: 자동으로 query 실행할지 여부
  - `retry`: query 실패 시, 자동으로 `retry`할건지 여부
  - `select` 성공 시 가져온 data를 가공해서 전달
  - `keepPreviousData`: 새롭게 fetching 시 이전 데이터 유지 여부
  - `refetchInterval`: 주기적으로 refetch 할지 여부
  - etc
- ![image](https://user-images.githubusercontent.com/90893428/189602088-b26fa30c-980d-4fc7-893d-e30ce46b30a4.png)
