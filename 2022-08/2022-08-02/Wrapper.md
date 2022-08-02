# React Native Core Components

> 이는 공식 문서를 읽으며, 기본 코어 컴포넌트의 사용 방법 및 팁만 핵심적으로 다룰 문서입니다.



## Wrapper 및 컴포넌트 API에 대하여



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

## 예시에서 보게된 팁

