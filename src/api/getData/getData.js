import { getDataBase } from "../Api";

export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFkMDkxYjJjYjIwNTY2MzM1ZjVmMCIsImV4cCI6MTY5MjAwMjk4NiwiaWF0IjoxNjg2ODE4OTg2fQ.IXRWQpeGB-5D3U3iN4FSKNf2F92wGVA_FLw4SpqLc20';


// homepost
 export const GetHomePostData = async () => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/post/nigonego/userpost`)
    return response
  } catch (err) {
    console.log("오류")
  }
};












// 복붙코드 

// const homePost = () => {
  
// try {
//   axios({
//     method: 'GET',
//     url: `https://api.mandarin.weniv.co.kr/post/nigonego/userpost`,

//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-type': 'application/json',
//     },
//   }).then(response => {
//     setUserData(response.data.post);
//     // console.log(userData);
//   });
// } catch (err) {
//   console.log('에러');
// }
// }









