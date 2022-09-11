# React Three Fiber

- SPA인 리액트에서 Three.js를 이용할 수 있도록 옮겨주는 라이브러리
- 절대 속도가 느려지지 않음





### 1. 기본 구성 요소

#### 1) Scene 생성하기

- 구성 요소

  - Scene - 공간

  - Camera - 카메라

  - Meshes - 피사체(부피, 형태, 질감 등의 정의 필요)

  - Animation - 애니메이션

  - Light - 빛, 조명을 담당

    

#### 2) 랜더링 요소

> 랜더링 시에 사용자 입장에서 시각적으로 영향을 주는 퀄리티 요소들

- 안티엘리어싱
- 색상 결정
- 투명도 설정

- 예시

  - ```js
    const render = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    })
    ```

  - 위는 Scene을 생성했다는 가정 하에, 랜더링할 수 있도록 Renderer 오브젝트를 생성한 것이다. 인자로는 배경을 투명하게 설정하는 `alpha`와 계단 현상 방지를 위한`antialias`가 포함되어있다.



#### 3) 추가 프롭들 생성

- 공간에 포함될 구성 요소들



## 2. 코드 구조

- 기존 Three.js의 Scene, Camera, Light 등 기본 요소들은 `Canvas`라는 컴포넌트에서 자동으로 생성해준다.

  - ```react
    import { Canvas } from '@react-three/fiber';
    
    export default function App() {
        <Canvas>
        	<mesh>
            	<BoxGeometry/>
                <meshPhongMaterial/>
            </mesh>
        </Canvas>
    }
    ```

  - `Canvas`에서 카메라, 그림자 등을 어떻게 Three.js로 조작할 수 있을까?

  - 정답은 Props로 받는다!

    - ```react
      <Canvas camera={{ fov: 50, near: 0.1, far: 1000 ,position: [0, 0, 5]}}></Canvas>
      ```

      - `fov`는 시야, `near`은 가까운 곳을 화면에 출력할 범위를, `far`은 먼 곳을 화면에 출력할 범위를 정한다.

    - 이 외에, `shadows`, `dpr(픽셀 비율, window.devicePixelRatio로 자동 조절)`, etc가 있다. 

- `Attach`에 대하여

  - ```react
    import { Canvas } from '@react-three/fiber';
    
    export default function App() {
        <Canvas>
        	<mesh>
            	<BoxGeometry attach="geometry"/>
                <meshPhongMaterial attach="material"/>
            </mesh>
        </Canvas>
    }
    ```

    - `attach`는 상위 부모 요소의 속성에 들어간다는 의미이다. 위의 `BoxGeometry`에 `geometry`가 붙으며 `mesh` 정육면체는 형태( `geometry`)를 `BoxGeometry`의 형태를 가지게 되었다.

    - `geometry`: 뼈대, 기하학적 형태를 담당한다.

      - 기본적으로 커스텀으로 뼈대를 생성하는 방법은 점을 잇는 방법이다

      - 면은 최소 3개의 꼭지점을 이어 만들 수 있다.

        - ```js
          const geometry = new THREE.Geometry();
          geometry.vertices.push(
          	new THREE.Vector3( -10,  10, 0 ),
          	new THREE.Vector3( -10, -10, 0 ),
          	new THREE.Vector3(  10, -10, 0 )
          );
          
          geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
          ```

    - `material`: 특정한 질감, 색, 반사율 등을 정의한 표면을 조작한다.

    - `mesh`: 위의 두 `geometry`와 `material`로 구성된 오브젝트를 `mesh`라고 부른다.

      - Mesh = Geometry + Material



### 3. React Three Drei

- 구체적인 카메라 조절, 여러가지 React Three Fiber의 기능을 보조하는 역할의 라이브러리이다.





