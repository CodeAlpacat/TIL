## 2. `React.Fragment`

- 이전에 JSX의 한계와 `Wrapper` 컴포넌트를 이용한 `div`중첩을 해결하는 방법을 알아봤다.
- 하지만, 리액트에 내장된 `Fragment`를 활용해 같은 기능을 사용할 수 있다.

```react
//1.
return (
	<React.Fragment>
    	<h2>hi</h2>
        <p>my name is coco</p>
    </React.Fragment>
)

/////////////////////////// 둘다 작동하지만, 2번은 빌드 세팅에 따라 안될 수 있음.
//2.
return (
	<>
    	<h2>hi</h2>
        <p>my name is coco</p>
    </>
)
```

