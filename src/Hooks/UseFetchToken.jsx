import authAtom from '../atom/authToken';
import { useRecoilValue } from 'recoil';
import createAxiosInstance from '../api/Api';

const UseFetchToken = () => {
  const UserToken = useRecoilValue(authAtom);

  const { instance, getDataBase, postDataBase, imageInstance } =
    createAxiosInstance(UserToken);

  // 로그인 페이지 api 요청
  const postLogin = async data => {
    try {
      const response = await instance.post('/user/login', data);
      console.log(response);
      return response;
    } catch (error) {
      console.error('로그인 에러', error);
    }
  };

  // 로그인 페이지 followingData get 요청
  const getUserInfo = async () => {
    try {
      const response = await getDataBase.get('/user/myinfo');
      console.log(response);
      return response;
    } catch (error) {
      console.error('팔로잉데이터 요청 에러', error);
    }
  };

  //회원가입 페이지 post 요청
  const postJoin = async data => {
    try {
      const response = await instance.post('/user/emailvalid', data);
      return response;
    } catch (error) {
      console.error('회원가입 에러', error);
    }
  };

  // 프로필 설정 페이지 api 요청
  const postJoinMemberValid = async data => {
    try {
      const response = await instance.post('/user/accountnamevalid', data);
      console.log(response);
      return response;
    } catch (error) {
      console.error('프로필 설정 에러', error);
    }
  };

  // 프로필 설정 페이지 프로필 이미지 api 요청
  const postJoinImage = async data => {
    try {
      const response = await imageInstance.post('/image/uploadfile', data);
      console.log(response);
      return response;
    } catch (error) {
      console.error('이미지 업로드 에러', error);
    }
  };
  //회원가입창
  const postJoinMember = async userInfo => {
    const { username, email, password, accountname, intro, image } = {
      ...userInfo,
    };
    console.log(userInfo);
    try {
      const response = await instance.post(`/user`, userInfo);
      console.log('회원가입성공:', response.data);
      console.log(userInfo.username);
      return response;
    } catch (error) {
      console.error('API 요청 실패:', error);
    }
  };

  //팔로잉 게시글 목록
  const GetHomeFeedData = async (number, skip) => {
    try {
      const response = await getDataBase.get(
        `/post/feed/?limit=${number}&skip=${skip}`,
      );
      return response;
    } catch (error) {
      console.error('error가 떴음', error);
    }
  };

  const yourAccount = async () => {
    try {
      const response = await getDataBase.get('/post/feed');
      return response;
    } catch (error) {
      console.error('error가 떴음', error);
    }
  };

  const getPostListLimit = async accountName => {
    try {
      const response = await getDataBase.get(`/post/${accountName}/userpost`);
      return response;
    } catch (error) {
      console.error('post오류');
    }
  };

  const getProfileData = async () => {
    try {
      const response = await getDataBase.get(`/user/myinfo`);
      console.log('작동');
      return response;
    } catch (error) {
      console.error('Profile오류');
    }
  };

  const getProductListLimit = async (skip, accountname) => {
    try {
      const response = await getDataBase.get(
        `/product/${accountname}/?limit=5&skip=${skip}`,
      );
      return response;
    } catch (err) {
      console.error('product오류');
    }
  };

  const getFollowData = async (accountname, follower) => {
    try {
      const response = await getDataBase.get(
        `/profile/${accountname}/${follower}`,
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserFeed = async accountname => {
    try {
      const response = await getDataBase(`/profile/${accountname}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const postHeart = async id => {
    try {
      const response = await postDataBase.post(`/post/${id}/heart`);
      return response;
    } catch (error) {
      console.error('좋아요에러', error);
    }
  };

  const deleteHeart = async id => {
    try {
      const response = await postDataBase.delete(`/post/${id}/unheart`);
      return response;
    } catch (error) {
      console.error('좋아요에러', error);
    }
  };

  const postPostUpload = async (content, image) => {
    try {
      const response = await postDataBase.post('/post', {
        data: {
          post: {
            content: content,
            image: image,
          },
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const postProductUpload = async (itemName, price, link, itemImage) => {
    try {
      const response = await postDataBase.post('/product', {
        data: {
          product: {
            itemName: itemName,
            price: Number(price), //1원 이상
            link: link,
            itemImage: `${itemImage}`,
          },
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async postId => {
    try {
      const response = await getDataBase.get(`/post/${postId}`);
      return response;
    } catch (error) {
      console.error('좋아요에러', error);
    }
  };

  const getCommentData = async postId => {
    try {
      const response = await getDataBase.get(`/post/${postId}/comments`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    GetHomeFeedData,
    getPostListLimit,
    getProfileData,
    getProductListLimit,
    getFollowData,
    getUserFeed,
    yourAccount,
    postHeart,
    deleteHeart,
    postJoin,
    postJoinMemberValid,
    postJoinImage,
    postJoinMember,
    postLogin,
    getUserInfo,
    postPostUpload,
    postProductUpload,
    getUserData,
    getCommentData,
  };
};

export default UseFetchToken;
