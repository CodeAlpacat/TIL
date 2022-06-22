## 5. 조건부 랜더링

- 컴포넌트를 안전하게 랜더링 할 때는 아래와 같이 `&&` 혹은 삼항연산자를 사용해 조건부 랜더링을 할 수 있다.
- 아래는 일반적인 &&의 동작원리를 이용한 것인데 앞의 값이 `false`라면 이후의 값을 반환하지 않지만, `true`라면 반환하는 값 자체는 마지막 값이 된다.

```react
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
```



- 추가로, 결국엔 JSX의 반환 값을 랜더링 해주는 것 임으로, 아래와 같이 JSX 분기를 조건으로 나누어서 랜더링해도 된다.

```react
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
```

- 위를 보면 만약 props로 받은 리스트에 아무 것도 존재하지 않는다면 `Found no expenses`를 담은 `h2` 태그를 JSX 문법으로 반환하고, 존재한다면, 아래의 JSX를 반환한다. 물론 삼항 연산자나 다른 방법이 있을 수 있다. 하지만, 이런 방식으로 구성하는 것이 훨씬 가독성이 좋다.
