# 1. 환경 세팅

### 1) remix 설치

`npm install -g @remix-project/remixd`



### 2) extensions 설치

- solidity 검색 후 설치



### remix 실행

- `.`은 경로를 나타내고, 현재 경로이므로 `.`

`remixd -s . --remix-ide https://remix.ethereum.org` 리믹스





### 민팅하기

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintAnimalToken is ERC721Enumerable {
  constructor() ERC721("h662Animals", "HAS") {}
  
  //animalTokenId => animalTypes 임.
  //이를 통해 animalTokenId를 입력하면 animalTypes가 나온다.
  mapping(uint256 => uint256) public animalTypes;

  function mintAnimalToken() public {
    //totalSupply는 지금까지 민팅된 양
    uint256 animalTokenId = totalSupply() + 1;

    //keccak 해시 알고리즘으로 abi 바이트 값을 시간, 생성하는 사람, 토큰 인덱스로 중복없게 해준다.
    uint256 animalType = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, animalTokenId))) % 5 + 1;
    
    animalTypes[animalTokenId] = animalType;
    //ERC721이 제공.
    //이 (민팅을 누른사람, 유니크한 ID)
    _mint(msg.sender, animalTokenId);
  }

  
}
```



### 판매 컨트랙트 작성

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "MintAnimalToken.sol";

contract SaleAnimalToken {
    MintAnimalToken public mintAnimalTokenAddress;
    
    constructor (address _mintAnimalTokenAddress) {
        //이 함수가 실행되면 deploy한 주소를 담아옴.
        mintAnimalTokenAddress = MintAnimalToken(_mintAnimalTokenAddress);
    }
    
    //가격을 관리하는 매핑
    mapping(uint256 => uint256) public animalTokenPrices;
    //프론트에서 어느 토큰이 판매중인지 확인 가능
    uint256[] public onSaleAnimalTokenArray;

    function setForSaleAnimalToken(uint256 _animalTokenId, uint256 _price) public {
        //.을 쓰면 MintAnimalToken에서 썼던 함수를 쓸 수 있음.(ERC721)
        address animalTokenOwner = mintAnimalTokenAddress.ownerOf(_animalTokenId);
        
        //주인이 맞는지 확인
        //이 주소의 사람이 보내는 사람과 같은가? 맞다면 다음줄 아니면 error
        require(animalTokenOwner == msg.sender, "Caller is not animal token owner");
        require(_price > 0, "Price is zero or lower.");
        //mapping으로 작품 토큰id에 가격을 담는데 만약 0이 아니라면 이미 팔고 있는 상품! 
        require(animalTokenPrices[_animalTokenId] == 0, "This animal token is already on sale");
        //(첫인자로 토큰의 주인, 두번째로 현재 SaleAnimalToken의 스마트 컨트랙트)
        //isApprovedForAll은 animalTokenOwner 즉, 주인이 현재 판매중인 계약서에 판매권한을 넘겼는지이다.
        //파일이라 이상한 스마트 컨트랙트에 코인 보내면 묶여서 영원히 못찾음.
        require(mintAnimalTokenAddress.isApprovedForAll(animalTokenOwner, address(this)), "Animal token owner did not approve token.");

        animalTokenPrices[_animalTokenId] = _price;

        //가격을 넣어줬으면 배열에 넣어 프론트에서 확인할 수 있게함.
        onSaleAnimalTokenArray.push(_animalTokenId);
    }
}
```



### 구매 컨트랙트

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "MintAnimalToken.sol";

contract SaleAnimalToken {
    MintAnimalToken public mintAnimalTokenAddress;
    
    constructor (address _mintAnimalTokenAddress) {
        //이 함수가 실행되면 deploy한 주소를 담아옴.
        mintAnimalTokenAddress = MintAnimalToken(_mintAnimalTokenAddress);
    }
    
    //가격을 관리하는 매핑
    mapping(uint256 => uint256) public animalTokenPrices;
    //프론트에서 어느 토큰이 판매중인지 확인 가능
    uint256[] public onSaleAnimalTokenArray;

    function setForSaleAnimalToken(uint256 _animalTokenId, uint256 _price) public {
        //.을 쓰면 MintAnimalToken에서 썼던 함수를 쓸 수 있음.(ERC721)
        address animalTokenOwner = mintAnimalTokenAddress.ownerOf(_animalTokenId);
        
        //주인이 맞는지 확인
        //이 주소의 사람이 보내는 사람과 같은가? 맞다면 다음줄 아니면 error
        require(animalTokenOwner == msg.sender, "Caller is not animal token owner");
        require(_price > 0, "Price is zero or lower.");
        //mapping으로 작품 토큰id에 가격을 담는데 만약 0이 아니라면 이미 팔고 있는 상품! 
        require(animalTokenPrices[_animalTokenId] == 0, "This animal token is already on sale");
        //(첫인자로 토큰의 주인, 두번째로 현재 SaleAnimalToken의 스마트 컨트랙트)
        //isApprovedForAll은 animalTokenOwner 즉, 주인이 현재 판매중인 계약서에 판매권한을 넘겼는지이다.
        //파일이라 이상한 스마트 컨트랙트에 코인 보내면 묶여서 영원히 못찾음.
        require(mintAnimalTokenAddress.isApprovedForAll(animalTokenOwner, address(this)), "Animal token owner did not approve token.");

        animalTokenPrices[_animalTokenId] = _price;

        //가격을 넣어줬으면 배열에 넣어 프론트에서 확인할 수 있게함.
        onSaleAnimalTokenArray.push(_animalTokenId);
    }

    //payable로 인해 matic 거래 함수를 실행 가능.
    function purchaseAnimalToken(uint256 _animalTokenId) public payable {
        uint256 price = animalTokenPrices[_animalTokenId];
        address animalTokenOwner = mintAnimalTokenAddress.ownerOf(_animalTokenId);

        require(price > 0, "Animal token not sale");
        require(price <= msg.value, "Caller sent lower than price.");
        require(animalTokenOwner != msg.sender, "Caller is animal token owner.");
        
        payable(animalTokenOwner).transfer(msg.value);
        //(보내는 이(판매자), 구매자(구매 버튼을 누른사람), NFT토큰)
        mintAnimalTokenAddress.safeTransferFrom(animalTokenOwner, msg.sender, _animalTokenId);
        
        //가격을 팔았으므로 0으로 만들어준다.
        animalTokenPrices[_animalTokenId] = 0;

        for(uint256 i = 0; i < onSaleAnimalTokenArray.length; i++) {
            if(animalTokenPrices[onSaleAnimalTokenArray[i]] == 0) {
                onSaleAnimalTokenArray[i] = onSaleAnimalTokenArray[onSaleAnimalTokenArray.length-1];
                onSaleAnimalTokenArray.pop();
            }
        }
    }
    //판매중인 토큰 배열의 길이
    function getOnSaleAnimalTokenArrayLength() view public returns (uint256) {
        return onSaleAnimalTokenArray.length;
    }
}
```

