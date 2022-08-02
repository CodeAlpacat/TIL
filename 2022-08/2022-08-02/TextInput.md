# React Native Core Components

> 이는 공식 문서를 읽으며, 기본 코어 컴포넌트의 사용 방법 및 팁만 핵심적으로 다룰 문서입니다.



## textInput에 대하여

- `Input value`를 바인딩 해주는 방법

  - ```react
    //상태 관리를 통해 onChangeText를 통해 바뀐 값을 업데이트 해준다.
    const [text, onChangeText] = React.useState("Useless Text");
    
    <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
    ```
  

- 속성
  - `value`
  - `placeholder`
  - `keyboardType`
    - numeric
    - etc
  - `maxLength`
  - `editable`
  - `multiline` => true false
  - `numberOfLines`
    - `numberOfLines={4}`
- 이벤트
  - `onChangeText`
  - `onSubmitEditing`
  - `onFocus`
  - etc => 문서엔 여기까지만 작성됨.



## 예시에서 보게된 팁

- 텍스트 인풋을 생성해놓고 `props`로 받아 구조 분해 할당으로 속성을 넣어줄 수 있다.

```react
import React from 'react';
import { View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
}

export default UselessTextInputMultiline;
```

