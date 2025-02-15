# Introduce

이 프로젝트는 **IMDb API**를 활용하여 다양한 영화를 소개하는 웹사이트를 개발한 프로젝트입니다. 프로젝트에서 이미지가 많이 사용되는 점 때문에 이미지 최적화에 용이한 nextjs를 선택하여 개발을 진행했습니다. 최신 **Next.js 15** 버전에서 **App Router**를 활용하여, 최적화된 라우팅 및 서버 사이드 렌더링을 구현했습니다.상위 리스트에 영화 중에서 선택하여 상세 영화 정보를 확인할 수 있습니다.

- **주요 기능**:
  - 영화 상세 정보 조회
  - 반응형 디자인을 통한 모바일 최적화
  - ShadCN을 활용한 UI 컴포넌트 디자인

## 🛠 Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)  
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![ShadCN](https://img.shields.io/badge/ShadCN-000000?style=flat-square&logo=shadcn&logoColor=white)

# 🗂️ 파일구조

```
📦app
 ┣ 📂(home)
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂(movie)
 ┃ ┗ 📂movie
 ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┣ 📂about-us
 ┃ ┣ 📂[id]
 ┃ ┣ 📜loading.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📜globals.css
 ┗ 📜layout.tsx

 📦components
 ┣ 📂ui
 ┃ ┣ 📜badge.tsx
 ┃ ┣ 📜button.tsx
 ┃ ┣ 📜card.tsx
 ┃ ┣ 📜carousel.tsx
 ┃ ┣ 📜scroll-area.tsx
 ┃ ┗ 📜skeleton.tsx
 ┣ 📜Button.tsx
 ┣ 📜Gerers.tsx
 ┣ 📜Header.tsx
 ┣ 📜Loader.tsx
 ┣ 📜Non-Profile.tsx
 ┣ 📜Profile.tsx
 ┣ 📜SkeletonCard.tsx
 ┣ 📜StarRating.tsx
 ┣ 📜getSimilarMovie.tsx
 ┣ 📜movie-info.tsx
 ┣ 📜movie-videos.tsx
 ┗ 📜movie.tsx

 📦utils
 ┗ 📜wait.tsx
```
# 📌 렌더링 최적화
Header 컴포넌트가 스크롤할 이미지 컴포넌트에 만나는 지점에서 사라지게 만들었습니다. 이 과정에서 useEffect 특성상 렌더링이 많이 발생하게 되면 무한 렌더링이 발생하기 때문에 useCallback으로 무한 렌더링 문제를 해결하고 최적화를 할 수 있습니다.
<img width="709" alt="Image" src="https://github.com/user-attachments/assets/c0e6d08e-2cf7-4e31-9c91-b260076e542a" />


- handleScroll 함수는 스크롤 이벤트가 발생할 때 window.scrollY 값을 체크하여 setIsHidden 상태를 업데이트하는 역할을 함.
- useCallback을 사용하면 handleScroll 함수가 불필요하게 다시 생성되는 것을 방지할 수 있음.
- 이렇게 하면 useEffect 내부에서 handleScroll의 참조값이 변하지 않아서 불필요한 이벤트 리스너 재등록을 줄여 메모리 누수 방지.
```typescript
const handleScroll = useCallback(() => {
        if (window.scrollY > scrollThreshold) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    }, [scrollThreshold]);
```

## ✍️ useCallback이란?
useCallback은 리액트에서 함수를 메모이제이션(memoization)하여 불필요한 렌더링을 방지하는 훅이다.
즉, 이전에 생성한 함수를 기억하고 의존성이 변경되지 않으면 재사용함으로써 성능을 최적화할 수 있다.

# 📌 clean-up을 추가해서 메모리 누수 방지
Header 컴포넌트가 언마운트될 때, 이전에 등록된 이벤트 리스너가 정리되지 않으면 불필요한 메모리를 차지할 수 있습니다.
특히, 이벤트 리스너 같은 리소스를 정리하지 않으면 메모리 누수가 발생할 수 있습니다.이를 방지하기 위해 useEffect에서 clean-up 함수를 추가하여 리소스를 정리해 주어야 합니다.
```typescript
useEffect(() => {
    if (typeof window !== undefined) {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
}, [handleScroll]);
```
## ✍️ 왜 clean-up이 필요한가?
(1) 메모리 누수를 방지하기 위해
리액트에서 컴포넌트가 언마운트(unmount)되면 더 이상 필요하지 않은 이벤트 리스너가 남아있으면 불필요한 메모리를 차지할 수 있습니다.
이 상태에서 다른 페이지로 이동하거나 새로운 컴포넌트를 마운트하면, 이전의 불필요한 리스너가 계속 실행될 수도 있습니다.
이걸 방치하면 handleScroll이 더 이상 사용되지 않는데도 계속 실행되면서 메모리 누수가 발생할 가능성이 있습니다.

# 📌이미지 최적화
## 🟢 next/image 사용
next/image는 Next.js에서 제공하는 최적화된 이미지 컴포넌트로, 이미지의 크기와 포맷을 자동으로 조정하여 로딩 성능을 향상시킵니다. 기본적으로 이미지는 뷰포트에 맞게 자동으로 크기를 조정하고, 필요한 경우 WebP와 같은 최신 이미지 포맷을 제공해 브라우저에서 최적화된 형식으로 표시됩니다. next/image를 사용하면 이미지 로딩 시간과 네트워크 비용을 줄여 페이지의 초기 로딩 속도를 개선할 수 있습니다.

```jsx
<Image
        className="w-full h-3/4 object-cover rounded-2xl"
        width={500}
        height={500}
        src={poster_path}
        alt={title}
        placeholder="empty"
        loading="lazy"
/>
```
## 🧑‍💻 이미지 로딩 최적화
a. Lazy Loading (지연 로딩)
next/image는 기본적으로 Lazy Loading을 지원합니다. 즉, 이미지는 화면에 표시될 때까지 로드되지 않습니다. 이를 통해 초기 페이지 로딩 속도를 개선할 수 있습니다.

### movie-info(영화 상세 페이지)를 우선적으로 로딩
✍️ priority 속성 사용
priority 속성은 중요한 이미지를 우선적으로 로드하기 위해 사용됩니다.

- 상세페이지에 들어가면 우선적으로 로드해서 보여줘야 되기 때문에 priority 속성을 적용

```jsx
//movie-info 컴포넌트
// componenets/movie-info.tsx
<Image
width={400}
height={700}
src={movie.poster_path}
alt={movie.title}
priority
className="max-lg:w-screen h-auto max-h-full rounded-2xl lg:h-[100vh] md:h-[60vh] sm:h-[50vh]
xl:absolute xl:left-20
lg:absolute lg:-top-20 lg:left-13
md:relative md:-top-20
sm:relative "
/>
```
- 아래에 "비슷한 영화"들은 user가 가장 먼저 눈에 들어오지 않기 때문에 loading="lazy"를 명시적으로 적용
  <img width="1123" alt="Image" src="https://github.com/user-attachments/assets/a61951b3-c5f0-4bca-8be6-55c5da622051" />



## 🧑‍💻이미지 사이즈 최적화
a. 적절한 이미지 크기 설정
- next/image는 width와 height 속성을 통해 이미지를 최적화할 수 있도록 도와줍니다. 특히, 화면 크기나 디바이스에 따라 다른 이미지 크기를 제공할 수 있도록 설계되었습니다.
- srcSet이나 sizes 속성 없이 next/image는 브라우저의 화면 크기에 맞는 이미지를 자동으로 선택합니다. 이 덕분에 크기가 맞지 않는 이미지를 불필요하게 로드하는 일이 줄어듭니다.
  
c. WebP와 AVIF 포맷 사용
- WebP와 AVIF는 최신 이미지 포맷으로, JPEG나 PNG보다 훨씬 더 작은 파일 크기를 제공하면서도 비슷한 화질을 유지할 수 있습니다.
- Next.js는 브라우저 호환성에 맞게 자동으로 WebP와 AVIF 포맷을 제공합니다. 브라우저가 지원할 경우, 이 포맷을 사용하여 이미지 용량을 최소화할 수 있습니다.
  <img width="1898" height="80" alt="Image" src="https://github.com/user-attachments/assets/3beaf1cd-49a6-4248-8b8c-66929fa8f3d5" />
