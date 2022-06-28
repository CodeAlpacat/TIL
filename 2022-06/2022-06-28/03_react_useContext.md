## 3. useContext

- 변경된 state를 다른 하위 컴포넌트에서 사용해야하는 경우에 전역에서 사용할 수 있는 state를 만들어주는 hook이다. 
- 예를 들면, 컴포넌트 `App.js => Auth => Login`의 가장 아래인 `Login.js`에서 사용하는 `isLoggedin`을 `App.js => Shop => Products => Product`가장 하위에서 사용하려면 props를 활용해 매번 사용하지 않는 컴포넌트를 전달해야한다.
- 하지만, `useContext`를 활용하면 전역적으로 `isLoggedin` state를 사용할 수 있다.



### 사용법

- 사용하는데 필요한 요소는 `Provider`와 `Consumer` 즉 두 가지가 필요하다.
- 물론, `Consumer`은 `useContext`로 대체가 가능하다.

```react
//auth-context.js 파일 생성
import React from 'react'

const AuthContext = React.createContext({ //디폴트 값
      isLoggedin:false
	})

export default AuthContext;
```



#### Provider

- `provider`은 `props`를 넘기듯이 전역으로 생성된 파일로 아래와 같이 넘긴 `value`를 `Consumer` 혹은 `useContext`에서 자유롭게 활용이 가능하다.

```react
import AuthContext from ''

<AuthContext.Provider value = {{ isLoggedin: isLoggedin }}>
    //다른 컴포넌트들!
<AuthContext.Provider/>
```



#### Consumer

- `consumer`은 전역 파일 `auth-context.js`로부터 받아온 정보를 사용하는 주체이다.
- `Consumer`로 감싸준 컴포넌트 내부에서는 반환하는 형식으로 사용할 수 있으며, 함수의 첫 인자는 `provider`가 넘겨줘 전역에서 저장해놓은`context` 값이다.

```react
import AuthContext from ''

<AuthContext.Consumer>
    {(context) => {return 기존 컴포넌트}}
<AuthContext.Consumer/>
```



#### useContext

- `useContext`를 사용하면 `Consumer`로 감싸줄 필요성이 사라진다.

```react
import { useContext} from 'react'
import AuthContext from ''

const context = useContext(AuthContext) //Consuer 내부 함수의 첫 인자와 같은 값을 context에 저장함
```



#### 활용

- 위에서 사용했던 방법에서 useState 등을 활용해 더욱 컴포넌트 내부를 간결하게 만들 수 있다.
- 이렇게 사용하면, 기존 컴포넌트에 있던 복잡한 로직을 분리시켜 가져올 수 있고, 단순히 `AuthContextProvider` 로 `App.js` 혹은 `index.js`의 컴포넌트 전체를 감싸주는 것으로 활용이 가능하다.

```react
//auth-context.js 파일 생성
import React from 'react'

const AuthContext = React.createContext({ //디폴트 값
      isLoggedin:false
      loginHandler: () => {}
	  logoutHandler: () => {}
	})

export const AuthContextProvider = (props) => {
    const [isLoggedin, setIsLoggedin] = useState(false);
    
    function loginHandler(props) {
        setIsLoggedin()
    }
    function logoutHandler(props) {
        setIsLoggedin()
    }
    
    return <AuthContext.Provider value={{ isLoggedin: isLoggedin, loginHandler, logoutHandler }}>{props.children}</AuthContext.Provider>
}


export default AuthContext;
```



#### 이렇듯 분리되어 집중된 방식을 통해 여러 컴포넌트에서 사용되는 state의 재사용성 및 편의성을 늘리고 코드를 간결하게 유지할 수 있다. 

- 유의할 점은
  - 변경이 잦은 경우에는 useContext가 적합하지 않다는 점이다.
  - 모든 props들을 useContext를 이용해 사용하면 안된다. 긴 프롭체인으로 인한 소요를 줄이기 위해 사용해야한다.