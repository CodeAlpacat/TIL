## State를 테스트하기

```react
//Greeting.js
import { useState } from 'react'

const Greeting = () => {
    const [changedText, setChanged] = useState(false);
    
    const changeTextHandler = () => {
        setChangeText(true)
    }
    
    return <div>
    	<h2>Hello World!</h2>
        {!changedText && <p>It's good to see you</p>}
        {changedText && <p>Changed!</p>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
}
```



- 위의 `useState`는 실제로 바뀐 결과의 존재 유무에 맞춰서 아래와 같이 테스트 할 수 있다.

```react
import { render, screen } from '블라블라'
import Greeting from './Greeting'
import userEvent from 'dsadfasdf'

//기본 컴포넌트에서 이벤트 이전의 결과를 테스트
test('render Changed if the button is clicked', () => {
    render(<Greeting/>)
    const ChangedTest = screen.getByText('Changed!', {exact: true})
    expect(ChangedTest).toBeInDocument();
})


//클릭 시에 발생하는 이벤트 후의 결과를 테스트
test('render Its good to see you if the button is NOT clicked', () => {
    render(<Greeting/>)
    
    //Act
    const buttonElement = screen.getByRole('button') //여기서 버튼은 하나 뿐이므로 가능
    userEvent.click(buttonElement)
    
    const ChangedTest = screen.getByText('good to see you', {exact: false})
    expect(ChangedTest).toBeInDocument();
})
```

- `userEvent`는 `Act`로써 실제 화면에서 사용자의 이벤트를 발생시켜 테스트하는 객체이다.
- 즉, Arrange, Act, Assert 세 과정을 통해 랜더링해 이벤트가 발생하고 그 이후 결과까지 테스트가 가능하다.





- 만약에, `{!changedText && <p>It's good to see you</p>}`이 구문이 `{<p>It's good to see you</p>}`와 같이 바뀐다면?
- 테스트는 통과된다. 하지만, 우리는 해당 구문이 이벤트 발생 시에 사라져야만 한다는 것을 알고있다.
- 즉, 아래의 테스트 또한 필요하다.

```react
test('if event is triggered, this statement should not be shown', () => {
    render(<Component/>)
    
    const buttonEl = screen.getByRole('button')
    userEvent.click(buttonEl)
    
    const triggeredTest = screen.queryByText('good to see you', {exact: false})
    expect(triggeredTest).not.toBeNull() 
    
})
```



#### 주의할 점은 getByText 등 get 메소드는 false일 경우 에러를 띄우므로 query를 통해 접근할 수 있다. query는 값이 없을 시 null을 반환한다.