## 1. Portal

- 리액트 내부의 컴포넌트 구조에서는 다이얼로그 등 어느 컴포넌트에도 위치하지 않는 기능들이 존재한다.
- 하지만, 이러한 다이얼로그는 구조상 내부에 있을 수 있다.
- 이러한 구조를 `portal`을 이용해 원하는 위치(body의 직계 자식)로 끌어올릴 수 있다.

#### *사용하기 위한 조건

1. 옮기고싶은 컴포넌트가 이동할 위치
2. 컴포넌트가 그 자리에 포털을 가져간다고 알려줌.



#### index.html

- portal로 옮겨줄 위치를 `index.html` 즉, 모든 요소들이 번들링되는 위치에서 배치시킨다.

```html
<div id="modal-portal"></div>
```



#### Component.js

- 리액트에서는 `react-dom` API를 사용하지 않는다. 리액트 문법으로 모두 해결하며, 가상 돔에서 실제 돔으로 접근하면 예기치 않은 결과를  초래할 수 있기 떄문이다.
- 하지만, `createPortal`은 `ReactDOM`의 메서드로 (JSX 컴포넌트, 리액트 DOM API로 선택한 요소)를 통해 실제 번들링될 `index.html`에 위치를 지정해 순간이동 시킬 수 있다.
- 이렇게 정해진 위치는 옮길 컴포넌트가 얼마나 깊숙한 곳에 존재하던지 상관없이 위치가 항상 지정한 위치로 오게 된다.

```react
import ReactDOM from 'react-dom'

const ModalPortal = props => {
    return <div>이 div 태그를 옮길겁니다.</div>
}

//createPoratl은 (랜더링될 리액트 노드, 위치를 가리키는 포인터)
const Component = props => {
    return (
    	<React.Fragment>
          {ReactDOM.createPortal(<ModalPortal/>, document.getElementById('modal-portal'))}
        
        </React.Fragment>
    )
}
```

