# React Native Core Components

> 이는 공식 문서를 읽으며, 기본 코어 컴포넌트의 사용 방법 및 팁만 핵심적으로 다룰 문서입니다.



## View를 이루는 요소들

> Props로 받을 수 있는 여러가지 accessibility 옵션이 있다.
>
> 접근성을 설정할 수 있는 옵션이 있다.
>
> ```react
> <View accessible={true}>
>   <Text>text one</Text>
>   <Text>text two</Text>
> </View>
> ```

### 1) Flexbox

> react native는 Flexbox를 기본적으로 사용한다.

- `flex` - 웹에서 axis로 비율에 맞게 화면을 나눠주는 속성이다. 상수만 사용할 수 있다.

  - 아래의 예시를 보면 순서대로 `1/6 2/6 3/6`의 비율로 화면을 화면을 분할해 가져간다.

  - ```react
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    ```

- `flexDirection` :flex의 방향을 결정한다.

  - `column`
  - `row`
  - `coluimn-reverse`
  - `row-reverse`

- `direction`: 레이아웃의 시작 방향

  - `LTR`: 레이아웃의 시작 방향이 (왼 => 오)
  - `RTL`: 레이아웃의 시작 방향이 (오 => 왼)

- `justifyContent` : flexbox **세로 조작!** => 브라우저하곤 반대임

  - `flex-start`: `stretch`와 같은 기본 default 값
  - `flex-end`: 끝으로 정렬
  - `center`: 중앙 정렬
  - `space-between`: 요소의 같은 간격 일정하게 유지
  - `space-evenly`:  요소 외에 여백까지 간격을 일정하게 유지

- `alignItems`: flexbox의 **가로 축 조작!** => 브라우저하고 반대

  - `stretch`: default 값 높이에 맞게 조정
  - `flex-start`: 자식들을 시작부터 나열
  - `flex-end`: 자식들을 끝부터 나열
  - `center` : 중앙 정렬
  - baseline: 같은 베이스라인으로 슈슉슉 이거 말로 설명하기 좀 애매함.

- `alignSelf`: 거의 안쓰지만 요소는 `alignItems`하고 똑같음. 한 자식 요소에만 적용할 때 사용
- `alignContent`

- `flexWrap` 
  - `wrap`: 넘치면 다음 줄
  - `no-wrap` 넘쳐도 같은 줄
- etc
  - `flexBasis`
  - `flexGrow`
  - `flexShrink`

#### *사이즈 및 포지션

- `width`: 너비
  - `auto`: 자동 너비 조절
  - `pixels`: 일반 상수로 사용 가능
    - ex) `width: 300`
  - `percentage`: 퍼센트로 가능
    - ex) `width: 50%`
- `position`: 박스의 포지션 결정
  - 아래의 요소들은 `top bottom left right` 속성을 사용 가능함.
  - `absolute`
  - `relative`

### 2) style

- `color`
  - [https://reactnative.dev/docs/colors](네임드 컬러 목록)
- `fontWeight`
- `fontSize`
- `margin`
  - 이것은 찾으면 넣겠음. 상수로 사용함.



### 3) some touch handling(터치에 관한 동작 처리)

- `onPress`: 터치로 눌렸을 때 동작

- `onLongPress`: 터치로 길게 눌렸을 때  동작

  - `Platform.OS`: 동작은 아니지만 os가 안드로이드가 아니면 비활성화 하는 등에 사용 가능.

- `Touchable`: 레이아웃의 일종으로 피드백 없이 터치하거나 투명도를 조정해주는 등에 활용되는 레이아웃

  - ```react
    import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
    ```











## 예시에서 보게된 팁

- props로 받은 label또한 변수로 활용하고 상위에서 `state`를 활용해 눌릴 때마다, 동적으로 스타일 객체를 바꿔줄 수 있다.

  - ```react
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View> //이 부분이다.
    ```

  - 기본 css를 사용할 때 동적으로 스타일을 변경할 수 있다.

  - styled-components로는 더 쉽게 가능하다. 

```react
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <View
        style={[styles.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

export default FlexDirectionBasics;
```

