## 1. Keys

- `map`혹은 `filter` 등 리스트로 다루는 JSX는 고유한 key 값을 부여해야한다.
- 만약 key를 부여하지 않으면 각 리스트의 요소들을 리액트가 인식하지 못해서, 모든 반복되는 컴포넌트들이 모두 비슷해 보이고, 그렇기에 다시 랜더링을 거치며, 기존의 값들에 덮어씌워지는데, 이는 비효율과 에러를 초래할 수 있다.
- 그러므로, key를 부여해 새로운 값이 어디에 추가되고 랜더링될지 알려줘야한다.
- key를 부여하면, 배열의 길이, 아이템이 어디 위치할지 정확히 리액트에게 알릴 수 있다.


```react
<Component
    key={expense.id}
    title= {expense.title}
    amount = {expense.amount}
    date = {expense.date}
    />
```

