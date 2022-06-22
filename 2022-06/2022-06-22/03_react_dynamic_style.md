## 3. Dynamic style

- 리액트에서는 동적으로 스타일 클래스를 추가하고 제거할 수 있다.
- 아래의 코드를 보면, `input`태그에 값이 들어오지 않은 채로 제출을 누르면 `invalid`라는 css클래스가 동적으로 추가되며 빨간색으로 `input`과 `label` 태그를 바꿔준다.
- 그리고, 입력이 들어올 때마다, 공백인지 아닌지를 판단해 제대로된 값이 들어온다면 `invalid`클래스를 제거해주도록해 원상복구 시키도록 한다.

- 아래의 코드를 통해 동적으로 특정 상황에 맞게 스타일을 쿼리스트링을 이용해 삽입하거나 제거할 수 있다는 사실을 알 수 있다.

```react
const [isValid, setIsValid] = useState(true);

const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };


const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
  };


<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
```

```css
.form-control.invalid input {
  border-color: red;
  background: #ffd7d7;
}

.form-control.invalid label {
  color: red;
}
```

