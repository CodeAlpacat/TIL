## 1. Children Prop

- div 태그로 감싸 리액트 컴포넌트를 전달해주는게 기본적이다.
- 하지만 **박스**의 역할을 하는 `Sidebar`, `Card`, `Box`, `Dialog` 등은 모두 각각의 컴포넌트 틀 및 스타일, 기능을 가지고 있다.
- 그렇게 div의 역할을 대신해 감싸주는 `wrapper`의 역할을 하는 컴포넌트가 `children prop`이다.

- 그렇게 다양하게 재사용할 수 있는 여지를 줍니다. `ul`태그가 꼭 필요한 `li`태그들은 `Category`라는 아래의 `wrapper`컴포넌트를 생성하면 재사용성과 코드의 가독성이 증가한다.

```react
const Category = (props) => {
  return <ul>{props.children}</ul>;
};


const App = () => (
  <Category>
      <li>리스트 입니다!</li>
      <li>리스트 입니다!</li>
      <li>리스트 입니다!</li>
      <li>리스트 입니다!</li>
      <li>리스트 입니다!</li>
  </Category>
);
```

