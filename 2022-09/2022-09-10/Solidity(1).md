# CryptoZombies(1)



### 1. 챕터 2

- 컨트랙트 버전 선언
- 빈 컨트렉트 생성

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

}
```



### 2. 챕터 3

- 변수 선언
- `uint` : 부호 없는 정수(음수X)
- `uint256 uint8 uint16` : 기본 `uint256`에서 더 작은 비트로 선언 가능.

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {
    uint dnaDigits = 16;
}
```



### 챕터 4

- 기본 연산
  - `+`
  - `-`
  - `*`
  - `/`
  - `%`
  -  `**`
    - 지수 연산

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {
    uint dnaDigits = 16;
    uint dnaModules = 10 ** dnaDigits;
}
```



### 챕터 5

- 구조체
  - 더욱 복잡한 자료형을 필요로 할 때 구조체(struct)를 제공
  - string은 임의의 길이를 가진 UTF-8 데이터에서 활용

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    
    struct Zombie {
        string name;
        uint dna;
    }
}
```



### 챕터 6

- 배열
  - 동적  배열
  - 정적 배열
  - 구조체 배열
  - Public 배열 - 다른 컨트랙트들이 배열을 읽을 수 있음(`getter` 자동 생성 `setter` X)

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }
   	//좀비 구조체로 만들어진 좀비들이 담긴 배열들을 공개해서 다른 사람들도 조회가 가능하도록 함.
    Zombie[] public zombies;
}

```



### 챕터 7

- 함수 선언
  - 언더스코어`_`로 시작해서 전역 변수와 구분

```solidity
pragma solidity ^0.4.19;

function createZombie(string _name, uint _dna) {
    
}
```



### 챕터 8

- 구조체와 배열 활용하기
  - 구조체를 활용해 새로운 좀비를 생성하고, 배열에 좀비를 넣어주는 함수 생성

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function createZombie(string _name, uint _dna) {
        zombies.push(Zombie(_name, _dna));
    }
}

```



### 챕터 9

- Private / Public 함수
  - 컨트랙트 내의 다른 함수들만이 호출할 수 있는 함수를 private으로 선언
  - private 함수는 언더바로 시작`_`

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        zombies.push(Zombie(_name, _dna));
    }
}
```



### 챕터 10

- 함수의 반환값
  - 함수에서 어떤 값을 반환받으려면 `returns (string)`형식으로 선언
    - 반환값 종류 string 포함
- 함수의 제어자
  - `view 함수`
    - 상태를 변경 X
    - 값을 변경하거나 무언가를 쓰지 않음 오직 view(조회)만 한다는 의미
  - `pure 함수`
    - 함수가 앱에서 어떤 데이터도 접근하지 않음.
    - 전달된 인자값에 따라서만 반환값이 달라짐

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        zombies.push(Zombie(_name, _dna));
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        
    }
}
```



### 챕터 11

- Keccak256
  - 이더리움 내장 해시 함수
  - 해시 함수는 기본적으로 스트링을 랜덤 256비트 16진수로 매핑
  - 스트링이 달라지면 크게 해시가 달라지므로 크립토좀비는  의사 난수 발생기로 활용
- 형 변환
  - `uint`와 `uint8`의 형이 다를 땐 연산 시에 에러를 발생시키므로, `uint8(a)`와 같이 형변환해서 사용한다.

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        zombies.push(Zombie(_name, _dna));
    } 

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }
}
```



### 챕터 12

- 랜덤 좀비를 생성하는 함수 생성

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        zombies.push(Zombie(_name, _dna));
    } 

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }

    function createRandomZombie(string _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }
}
```



### 챕터 13

- 이벤트 추가
  - 이벤트를 선언하고 액션이 발생했을 때 실행할 동작을 정의한다.
  - 배열에 `push`할 때, 값을 반환하는데 그 값은 배열의 길이를 반환하므로 -1을 한 값이 가장 마지막에 있는 값이 된다. 이를 통해 `NewZombie`의 id를 알 수 있다.

```solidity
pragma solidity ^0.4.19;

contract ZombieFactory {

    event NewZombie(uint zombieId, string name, uint dna);

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    Zombie[] public zombies;

    function _createZombie(string _name, uint _dna) private {
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string _str) private view returns (uint) {
        uint rand = uint(keccak256(_str));
        return rand % dnaModulus;
    }

    function createRandomZombie(string _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }
}

```



### 챕터 14

- Web3.js

```js
// 여기에 우리가 만든 컨트랙트에 접근하는 방법을 제시한다:
var abi = /* abi generated by the compiler */
var ZombieFactoryContract = web3.eth.contract(abi)
var contractAddress = /* our contract address on Ethereum after deploying */
var ZombieFactory = ZombieFactoryContract.at(contractAddress)
// `ZombieFactory`는 우리 컨트랙트의 public 함수와 이벤트에 접근할 수 있다.

// 일종의 이벤트 리스너가 텍스트 입력값을 취한다:
$("#ourButton").click(function(e) {
  var name = $("#nameInput").val()
  // 우리 컨트랙트의 `createRandomZombie`함수를 호출한다:
  ZombieFactory.createRandomZombie(name)
})

// `NewZombie` 이벤트가 발생하면 사용자 인터페이스를 업데이트한다
var event = ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  generateZombie(result.zombieId, result.name, result.dna)
})

// 좀비 DNA 값을 받아서 이미지를 업데이트한다
function generateZombie(id, name, dna) {
  let dnaStr = String(dna)
  // DNA 값이 16자리 수보다 작은 경우 앞 자리를 0으로 채운다
  while (dnaStr.length < 16)
    dnaStr = "0" + dnaStr

  let zombieDetails = {
    // 첫 2자리는 머리의 타입을 결정한다. 머리 타입에는 7가지가 있다. 그래서 모듈로(%) 7 연산을 하여
    // 0에서 6 중 하나의 값을 얻고 여기에 1을 더해서 1에서 7까지의 숫자를 만든다. 
    // 이를 기초로 "head1.png"에서 "head7.png" 중 하나의 이미지를 불러온다:
    headChoice: dnaStr.substring(0, 2) % 7 + 1,
    // 두번째 2자리는 눈 모양을 결정한다. 눈 모양에는 11가지가 있다:
    eyeChoice: dnaStr.substring(2, 4) % 11 + 1,
    // 셔츠 타입에는 6가지가 있다:
    shirtChoice: dnaStr.substring(4, 6) % 6 + 1,
    // 마지막 6자리는 색깔을 결정하며, 360도(degree)까지 지원하는 CSS의 "filter: hue-rotate"를 이용하여 아래와 같이 업데이트된다:
    skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),
    eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),
    clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),
    zombieName: name,
    zombieDescription: "A Level 1 CryptoZombie",
  }
  return zombieDetails
}
```

![image-20220910233900787](Solidity(1).assets/image-20220910233900787.png)
