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



## 예시에서 보게된 팁

