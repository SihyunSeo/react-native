import React from 'react'
import { SafeAreaView, Text } from 'react-native'

// // if문을 JSX문  바깥에 두어 JSX문 안에서 실행문을 호출하지 않도록 설정한 case
// export default function App() {
//   const text = "This is test of JSX grammer"
//   console.log("App_called")

//   const isLoading = true
//   if (isLoading) {
//     return (
//       <SafeAreaView>
//         <Text>Loading.....</Text>
//       </SafeAreaView>
//     )
//   }
//   return (
//     <SafeAreaView>
//       {/* 직접 자식요소의 값을 넣은 경우 */}
//       <Text>Hello JSX Wolrd!!!!!</Text>

//       {/* XML에 자바스크립트 코드를 삽입한 경우(변수값을 활용해서 화면에 뿌려줄 경우) */}
//       <Text>{text}</Text>


//     </SafeAreaView>
//   )
// }

// //조건문을 단축 평가 코드로 바꿔 문제를 해결한 case
// export default function App() {
//   const isLoading = false

//   return (
//     <SafeAreaView>
//       {isLoading && <Text>Loading.....</Text>}
//       {!isLoading && <Text>Hello wolrd!!</Text>}
//     </SafeAreaView>
//   )
// }

// // JSX 문을 children 배열에 담아 자식 컴포넌트로 렌더링하기

// export default function App() {
//   const children = [
//     <Text>Hello first</Text>,
//     <Text>Hello second</Text>,
//     <Text>Hello third</Text>
//   ]
//   //반드시 부모 컴포넌트의 자식 컴포넌트 형태로 작성해야 한다.
//   // return children, return {children} -> 다음과 같이 자식 컴포넌트 단독으로 return 시킬 수 없음
//   return <SafeAreaView>{children}</SafeAreaView>
// }

// 조금씩 다른 100개의 컴포넌트 배열을 만드는 예
export default function App() {
  console.log("Component with children")
  const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hello Wolrd- {index}</Text>)

    return <SafeAreaView>{children}</SafeAreaView>
}