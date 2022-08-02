# React Native Core Components

> 이는 공식 문서를 읽으며, 기본 코어 컴포넌트의 사용 방법 및 팁만 핵심적으로 다룰 문서입니다.



## Button에 대하여

- `title`: 버튼 텍스트

- `color`: 색상

- `onPress`: 눌렀을 때 동작

- `disabled`: 비활성화

- `기타 accessibility`

- `nextFocus` 다양한 옵션
  - `nextFocusDown` : 사용자가 아래로 탐색할 때 포커스를 받을 내용(버튼)
  - etc..
  - [문서](https://reactnative.dev/docs/button)


```react
<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
```





## Switch

> 말 그대로 스위치 토글

- 토글 스위치로 속성은 아래와 같다

  - `disabled` : 비활성화
  - `onChange` : 값이 변화하면 해당 이벤트를 받음
  - `onValueChange` : 값이 변화하면 변화된 값을 받음.
  - `thumbColor` : 기본적인 스위치의 색상 지정
  - `trackColor` : 커스텀 스위치 트랙 색상이다. true false 색상을 각각 지정 가능함.
    - 
  - `value`

- ```react
  import React, { useState } from "react";
  import { View, Switch, StyleSheet } from "react-native";
  
  const App = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  ```





## 예시에서 보게된 팁

