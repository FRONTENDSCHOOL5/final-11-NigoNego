import createAxiosInstance from '../Api';

const {instance, getDataBase} = createAxiosInstance();


// homepost
export const GetHomePostData = async (accountname) => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/post/${accountname}/userpost`)
    console.log(accountname);
    return response
  } catch (error) {
    console.error("error가 떴음",error)
  }
};

export const GetHomeFeedData = async (skip) => {
  try {
    // id부분 props 로 재작업하
    const response = await getDataBase.get(`/post/feed/?limit=5&skip=${skip}`)
    return response
  } catch (error) {
    console.error("error가 떴음",error)
  }
};


// homepost
export const GetMyProfileData = async () => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/profile/nigonego`)
    return response
  } catch (err) {
    console.log("오류")
  }
};


// 팔로워, 팔로잉 리스트
export const GetFollowerData = async (accountname,getData,skip) => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/profile/${accountname}/${getData}/?limit=10&skip=${skip}`)
    return response
  } catch (err) {
    console.log("오류")
  }
};



// 리스트 고치기
// 내 상품리스트 무한스크롤 가져오기
export const GetProDuctListLimit = async (skip,accountname) => {
  try {
    // const response = await getDataBase.get(`/product/nigonego/?limit=5&skip=${skip}`)
    const response = await getDataBase.get(`/product/${accountname}/?limit=5&skip=${skip}`)
    return response
  } catch (err) {
    console.log("오류")
  }
};



// 포스트 무한스크롤 가져오기
export const GetPostListLimit = async (skip,accountName) => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    // const response = await getDataBase.get(`/product/${accountName}/?limit=${limit}&skip=${skip}`)

    // const response = await getDataBase.get(`/post/nigonego/userpost/?limit=2&skip=${skip}`)
    const response = await getDataBase.get(`/post/${accountName}/userpost/?limit=3&skip=${skip}`)
    return response
  } catch (error) {
    console.error("오류????", error);
  }
};

//댓글 리스트
export const GetCommentData = async (postId) => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.get(`/post/${postId}/comments`)
    return response
  } catch (err) {
    console.log("오류")
    console.log(postId.postId);
  }
};


//좋아요 기능
export const PostHeartData = async () => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.post(`/post/649a3cf6b2cb205663f545d9/heart`)
    return response
  } catch (err) {
    console.log("오류")
  }
};



//좋아요 삭제
export const DeleteHeart = async () => {
  try {
    // id부분 props 로 재작업하기
    // const res = await getDataBase.get(`/post/${id}`);
    const response = await getDataBase.delete (`/post/649a3cf6b2cb205663f545d9/unheart`)
    return response
  } catch (err) {
    console.log("오류")
  }
};

