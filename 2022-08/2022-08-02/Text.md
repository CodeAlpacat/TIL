# React Native Core Components

> 이는 공식 문서를 읽으며, 기본 코어 컴포넌트의 사용 방법 및 팁만 핵심적으로 다룰 문서입니다.



## Text에 대하여

- `Nested Text`: 중첩 텍스트

  - ```react
        <Text style={styles.baseText}>
          I am bold
          <Text style={styles.innerText}> and red</Text>
        </Text>
    ```

- `Container`: 텍스트를 담는 컨테이너 텍스트

  - ```react
    //인라인 스타일
    //넘치지 않는 선에서 이어짐.
    // |First part and second part|
    <Text>
      <Text>First part and </Text>
      <Text>second part</Text>
    </Text>
    ```

  - ```react
    //일반 뷰 스타일
    // |First part and|
    // |second part   |
    <View>
      <Text>First part and </Text>
      <Text>second part</Text>
    </View>
    ```



## 예시에서 보게된 팁

#### 리엑트 네이티브가 추천하는 방식

- 텍스트의 스타일은 중복으로 여러가지 스타일을 입히기 어려운 특징이 있다.
- 즉, 기본적으로 사용하는 스타일의 텍스트를 컴포넌트로 만들고, 상속해서 오버라이딩 혹은 추가할 수 있다.

ex)

1----

```react
<View>
  <MyAppText>
    Text styled with the default font for the entire application
  </MyAppText>
  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
</View>
```

2----

```react
class MyAppHeaderText extends Component {
  render() {
    return (
      <MyAppText>
        <Text style={{ fontSize: 20 }}>
          {this.props.children}
        </Text>
      </MyAppText>
    );
  }
}
```

