# React Native Core Components

> 이는 공식 문서를 읽으며, 기본 코어 컴포넌트의 사용 방법 및 팁만 핵심적으로 다룰 문서입니다.



## Image에 대하여

- 이미지를 불러오는 방식

  - ```react
    //require을 사용해 절대 경로로 가져옴.  
    <Image
            style={styles.tinyLogo}
            source={require('@expo/snack-static/react-native-logo.png')}
          />
    ```

  - ```react
    //uri로 이미지를 가져옴.
    <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
    ```

  - ```react
    //베이스64의 이미지 데이터 URL을 그대로 URI로 가져옴. 
    <Image
            style={styles.logo}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
            }}
          />
    ```

- 크기 설정
  - `width`
  - `height`
  - `resizeMode`: 이미지 리사이징
    - `center`: 중앙에 크기 유지
    - `stretch`: 컨테이너의 크기에 맞춤





## 예시에서 보게된 팁

