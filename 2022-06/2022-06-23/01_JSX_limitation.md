## 1. JSX의 한계

- JSX는 단 하나의 요소만 반환할 수 있다.

- 이 특성을 이용해 아래와 같은 방법들로 반환이 가능하다.

  - `div`태그로 묶어주기
  - 여러 복합 요소들을 리스트 형태로 넘겨주기

  - wrapper 컴포넌트 만들기



#### div 태그로 묶을 때는 아래와 같이 쓸모없는 div들을 많이 중첩하게 되기에 이상적이진 않다.

```react
<div>
  <div>
  	<div>
     <h2>깊이가 3인 컴포넌트 내부로 들어가봤습니다.</h2>  
    </div> 
  </div>
</div>
```



### *해결책

- `wrapper`컴포넌트로 의미를 알 수 있는 구조 만들어주기.

```react
const Wrapper = props => {
    return props.children
}

export default Wrapper;
```



#### div 대신 Wrapper로 감싸주면된다.

- `div`는 실제로 돔에 출력되지만 `Wrapper`는 아니다.
- 왜냐하면, `Wrapper`은 props.children을 통해 내용만 가져오며 직접적으로 `div`와 내부의 요소들을 가져온게 아닌, 간접적으로 내부의 요소들만 `Wrapper`내부에 불러왔기 때문이다.
- 그러므로, 실제 Wrapper 컴포넌트는 존재하지 않았던 것처럼 DOM에서 사라진다.

```react
<Wrapper> //실제로 DOM에 출력되지 않는 Wrapper 컴포넌트
  <div>
  	<div>
     <h2>깊이가 3인 컴포넌트 내부로 들어가봤습니다.</h2>  
    </div> 
  </div>
</Wrapper>
```

