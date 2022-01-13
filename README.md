# Today I learned

## Git bash를 사용한 git 사용.
> - 폴더를 mkdir를 사용해 git_practice 폴더를 만들어줬다.

>- 1. **git init** : 깃으로 폴더를 관리함을 선언해 초기화함. 폴더 뒤 (master)라고 써있는데 브랜치가 마스터 브랜치라는 소리다.
- 2. **rm -rf .git** : 레포지토리를 삭제함. (master)브랜치를 날려버림. 다시 init하면 됨.


## VScode 터미널을 이용한 Git 사용

### 1. repository로 저장
> - 레포지토리에 git add를 통해 저장해줘야만한다.
git status라는 명령어로 현재 상태, 변경사항 등을 확인이 가능하다.
```
git add first.txt
```
로 메모장을 레포지토리에 저장해줬다.

- 그 후에 git status로 확인해보면 정상적으로 커밋가능한 파일로 추가되었음을 알 수 있다. 이는 임시 보관이므로 실제 저장을 위해서는 commit을 통해 서버에 저장할 준비를 해줘야한다.

### 2. 저장 공간의 호스트 설정 및 커밋
> - 이제 내가 누군지 저장을 해야한다.
```
git config --global user.name 'wonwoo'
git config --global user.email 'magicmars123@gmail.com
git commit -m "first_commit" # 커밋
```




- - - 
### *Git 명령어
### 사용자 정보 설정
>- `git config --global user.name "<사용자이름>"`
- `git config --global user.email "<이메일주소>"`

- `~/.gitconfig` 파일에 저장됩니다.
- gitconfig 내용을 출력하는 코드
>`git config --global --list`

### 로컬 저장소
- 작업 공간(working directory) : 사용자의 일반적인 작업을 하는 공간
- 스테이지(staging area) : 커밋을 할 파일/폴더들이 등록되는 공간 
- 저장소(commits) : staging area의 변경사항들이 저장되는 곳.

### Git 초기화

>`git init`

- 현재 디렉토리를 Git으로 관리하겠다는 명령어
- `.git`이라는 숨긴폴더가 생성된다.
- 터미널에 `(master)'가 표시된다.

>- **주의 사항!**
  - 이미 git에 의해 관리되는 내부에서 다시 init을 실행하지 않는다.
  - 홈 디렉토리(~)에서 실행하지 않는다.


### git status
- working directory와 staging area에 있는 파일의 현재 상태를 알려주는 명령어
- 어떤 작업을 하기전에 수시로 status를 확인하는 습관 필요.
 - 파일의 상태
 	
    1. untracked: Git이 관리하지 않는 파일들(한번도 staging field에 등록되지 않은 파일들)
   2. tracked: Git이 관리하는 파일들
  
 
 

### git add

- working directory의 파일을 staging area에 등록
- 등록된 파일을 Git이 추적 관리한다.
>```bash 
git add a.txt
git add my_folder
git add my_folder/a.txt
#모든 파일들을 등록
git add .

### git commit
- Staging area에 등록된 파일의 변경사항을 하나의 버전(커밋)으로 저장하는 명령어
- **커밋 메세지** -m을 작성해야 한다.
	
    - 변경사항을 잘 표현할 수 있도록 의미있게 작성한다.
	
    - 최초 커밋 시에 (root-commit) 이 출력된다. 

>``` bash
git commit
# 커밋 메세지 작성을 위해 vim 에디터가 오픈
git commit -m '커밋 메시지'
```

### git log
- 현재 커밋들의 정보를 표시
>```bash
git log
git log --online


### git restore 파일명

- staging area에 올라간 modified된 파일을 지운다.

```bash
git restore first.txt
```

### git설명 링크 명령어
```bash
git --help commit
git --help
```

### 원격 저장소 등록

```bash
git remote add origin 깃허브(레포지토리)주소.
```

- 저장소 정보 조회
> ```git remote -v```
