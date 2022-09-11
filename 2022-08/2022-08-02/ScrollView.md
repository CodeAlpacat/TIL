# React Native Core Components

> 이는 공식 문서를 읽으며, 기본 코어 컴포넌트의 사용 방법 및 팁만 핵심적으로 다룰 문서입니다.



## ScrollView에 대하여

> 중요: 스크롤 뷰는 bounded height(묶는 높이)가 존재해야만 동작한다.
>
> 즉, 높이가 정해진 스크롤 뷰 안에 높이가 정해지지 않은 자식 요소들이 들어갈 수 있다.





### * ScrollView vs FlatList

- `ScrollView`

  - 스크롤뷰는 자식 요소들을 한꺼번에 불러오기에 성능 저하의 요인이 될 수 있다.

  - 엄청 많은 자식 요소들이 존재한다고 상상해보자. 엄청 렌더링이 느려진다.
  - 출력할 데이터가 많지 않고, 고정일 때 사용

- `FlatList`
  - 플렛리스트는 스크롤이 내려갈 때마다 새로 렌더링을 지연적으로 해준다. 즉 무한 스크롤!
  - 보여질 때 쯤이면, 알아서 렌더링을 해준다. 만약 스크롤 영역 밖으로 사라지면 알아서 지워서 메모리와 프로세스 시간을 줄여준다.
  - 무한 스크롤이 등에 사용
  - 속성
    - `data` : 들어갈 데이터
    - `renderItem` : 컴포넌트 형태로 선언해서 속성 값으로 넣어줌
    - `keyExtractor` : 반복되는 요소의 디폴트 키 값 대신에 `react key` 값을 가져옴.
    - `numColumns` : `horizental={false}`가 필수. `flexWrap`처럼 지그재그로 컬럼을 나눔 => 상수 값 받음.
    - `extraData` : 클릭하면 색상을 바꿔주는 등 상태 변화 시에 무조건 렌더링이 다시 일어나게 해준다.
      - [예시](https://reactnative.dev/docs/flatlist)
- `VirtualizedList` 
  - 플렛 리스트에 가상 데이터 넣을 수 있게 해줌!
  - [예시만 확인](https://reactnative.dev/docs/virtualizedlist)
- `SectionList`
  - 섹션을 구분지을 수 있다.



## 3.ScrollView에 대하여

> 중요: 스크롤 뷰는 bounded height(묶는 높이)가 존재해야만 동작한다.
>
> 즉, 높이가 정해진 스크롤 뷰 안에 높이가 정해지지 않은 자식 요소들이 들어갈 수 있다.



### * ScrollView vs FlatList

- `ScrollView`

  - 스크롤뷰는 자식 요소들을 한꺼번에 불러오기에 성능 저하의 요인이 될 수 있다.

  - 엄청 많은 자식 요소들이 존재한다고 상상해보자. 엄청 렌더링이 느려진다.
  - 출력할 데이터가 많지 않고, 고정일 때 사용

- `FlatList`
  - 플렛리스트는 스크롤이 내려갈 때마다 새로 렌더링을 지연적으로 해준다. 즉 무한 스크롤!
  - 보여질 때 쯤이면, 알아서 렌더링을 해준다. 만약 스크롤 영역 밖으로 사라지면 알아서 지워서 메모리와 프로세스 시간을 줄여준다.
  - 무한 스크롤이 등에 사용
  - 속성
    - `data` : 들어갈 데이터
    - `renderItem` : 컴포넌트 형태로 선언해서 속성 값으로 넣어줌
    - `keyExtractor` : 반복되는 요소의 디폴트 키 값 대신에 `react key` 값을 가져옴.
    - `numColumns` : `horizental={false}`가 필수. `flexWrap`처럼 지그재그로 컬럼을 나눔 => 상수 값 받음.
    - `extraData` : 클릭하면 색상을 바꿔주는 등 상태 변화 시에 무조건 렌더링이 다시 일어나게 해준다.
      - [예시](https://reactnative.dev/docs/flatlist)
- `VirtualizedList` 
  - 플렛 리스트에 가상 데이터 넣을 수 있게 해줌!
  - [예시만 확인](https://reactnative.dev/docs/virtualizedlist)
- `SectionList`
  - 섹션을 구분지을 수 있다.





## 4. Button에 대하여

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





## 5. Switch

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



## 6. TextInput에 대하여

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





## 7. Wrapper 및 컴포넌트 API에 대하여



### 1) BackHandler

- 뒤로 가기를 누르면 확인할 수 있는 alert 창을 띄울 수 있거나 동작을 줄 수 있음.
- 뒤로 가기는 자동으로 되는게 아니라 만들어줘야 사용가능함.
  - 정말 뒤로 가시겠습니까?!
  - 모달을 사용할 때 뒤로 가기를 통해 닫는 것은 또 다르므로 유의
  - [예시](https://reactnative.dev/docs/backhandler)

### 2) DrawerLayoutAndroid

- 누르면 옆에 네비게이션 슬라이딩하며 나오는 레이아웃
- 속성들이 많아서 직접 적용해보는 것 추천
- [예시](https://reactnative.dev/docs/drawerlayoutandroid)



### 3) PermissionsAndroid

- 카메라 엑세스 허용해줄래요? 하면서 나오는 권한 요청 Alert 창

- 이거 비동기 요청임.

- 첫 인자로 권한을 요청할 기능을 담고, 두 번째로, 허용 창을 구성함.

  - ```react
    const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Cool Photo App Camera Permission",
            message:
              "Cool Photo App needs access to your camera " +
              "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
    ```

- [예시](https://reactnative.dev/docs/permissionsandroid)



### 4) ToastAndroid

- 토스트 메세지로 밑에 슥 떳다 사라지는 기능

  - ```react
    ToastAndroid.showWithGravity(
         "All Your Base Are Belong To Us",
         ToastAndroid.SHORT,
         ToastAndroid.CENTER
       );
    ```

  - 1. 메세지,
    2. 짧게 보여줄지 길게 보여줄지
    3. 보여줄 위치 선정,
