"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'; // @emotion/styled를 사용하는 경우 유지하십시오
import MenuBar from '../menubar';
import { GoHeart } from 'react-icons/go';
import { SlBubble } from 'react-icons/sl';
import { Container } from 'postcss';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
    visibility: hidden;
  }
  to {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
`;

const Animated1 = styled.div`
  animation: ${fadeIn} 2s ease;
  animation-delay: 0s;
`;
const Animated2 = styled.div`
  animation: ${fadeIn} 2s ease;
  animation-delay: 0s;
`;
const Animated3 = styled.div`
  animation: ${fadeIn} 2s ease;
  animation-delay: 0s;
`;

const ContainerBox = styled.div`
@font-face {
  font-family: 'KOTRA_GOTHIC';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/KOTRA_GOTHIC.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
font-family: 'KOTRA_GOTHIC';
.btn{
  width: 50px;
  height: 35px;
  border: none;
  border-radius: 5px;
  color: white;
  background: #5c4571;
  box-shadow: 2px 3px 8px -2px #1c1c1c;
  cursor: pointer;
  margin: 0 10px;
  }
`;

const Lank = styled.div`
  margin: 0 auto;
  max-width: 564px;
  background: #29252d;
  border-radius: 14px;
  padding: 20px;
  margin-top: 32px;
  box-shadow: 1px 4px 9px -2px #2b2a2a;
`;

const Feed = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 20px 0;
  padding-bottom : 50px;
`;

const Post = styled.div`
  margin-bottom: 20px;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: #29252d;
  box-shadow: 1px 4px 9px -2px #2b2a2a;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 5px 20px 23px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 7px;
`;

const CAvatar = styled.img`
      width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    top: -2px;
    left: 21px;
`;

const Username = styled.span`
      font-size: 14px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostContent = styled.div`
  padding : 30px 20px;
`

const PostActions = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
//   border-bottom: 1px solid #efefef;
`;

const ActionButton = styled.button`
   background: none;
  border: none;
  font-size: 23px;
  margin-right: 15px;
  cursor: pointer;
  color : white;
  position: relative;
`;

const Head = styled.div`
@font-face {
  font-family: 'Yeongdo-Rg';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
font-family: 'Yeongdo-Rg';
  font-size: 30px;
  width: 600px;
  margin: 0px auto;
  margin-top : 20px;
  margin-bottom : 10px;
`;

const LankTitle = styled.div`
  margin : 0px 0;
  font-size : 18px;
`;

const LankBody = styled.div`
  margin : 20px 0px;
`;

const LankNum = styled.span`
  font-size : 17px;
`;

const Poster = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
box-shadow: 1px 3px 8px -1px #1c1c1c;
`;

const Hr = styled.hr`
  border : none;
  border-bottom : 1px solid #756f7f;
  margin : 35px 0 0 0px;
`;

const LankMTitle = styled.div`
  margin : 20px 0;
  font-weight : bold;
  font-size : 16px;
`;

const PostSpan = styled.span`
  color : #c5a8d7;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 185px));
  grid-gap: 15px;
  padding: 0 5px;
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 185px));
  grid-gap: 15px;
  padding: 0 5px;
  text-align : center;
`;

const PostTitle = styled.div`
  padding: 23px 23px 17px 24px;
  font-size: 18px;
  font-weight: bold;
`;

const Num = styled.span`
  font-size: 15px;
  position: absolute;
  top: 4px;
  left: 35px;
`;

const PostCommentHead = styled.div`
  position: relative;
  min-height: 100px;
  padding-bottom : 10px;
`;

const PostComment = styled.div`
  position: relative;
`;

const CUser = styled.div`
  margin: 19px 34px 19px 56px;

  .cUdate{
    display: inline-block;
    float: right;
    font-size: 12px;
    font-weight: 100;
    color: #a7a7a7;
    line-height: 21px;
  }
`;

const CUsername = styled.span`
  margin-right : 10px;
`;

const Comment = styled.div`
  margin : 8px 22px;
  font-size : 17px;
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  height: 35px;
  padding: 0 15px;
  background: #483e51;
  color: white;
  width: 80%;
  box-shadow: 2px 3px 8px -2px #1c1c1c;

    &:focus{
        outline: none;
    }
`;

const CommentPut = styled.div`
  display: flex;
  padding: 0 10px 18px 23px;
`;

const Udate = styled.div`
  display: inline-block;
  float: right;
  font-size: 13px;
  font-weight: 100;
  color: #a7a7a7;
  line-height: 28px;
`;

const PostTag = styled.div`
  margin: 10px 17px;

  .sharp{
    font-size: 15px;
    color: darkgrey;
    font-weight: bold;
    background: #38323d;
    padding: 4px 8px 3px 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

const PostTagItem = styled.div`
  display: inline-block;
    background-color: #38323d;
    padding: 5px 9px 4px 9px;
    border-radius: 9px;
    margin: 3px 3px;
    font-size: 12px;
    color: #ded6e3;
    box-shadow: 2px 3px 7px -3px #212121;
`

export default function Home(){

  const [posts, setPosts] = useState([]);

  // 댓글창 열림/닫힘 상태 관리
  const [commentOpen, setCommentOpen] = useState(false);
  // 현재 선택된 게시물의 ID를 저장
  const [selectedPostId, setSelectedPostId] = useState(null);

  const [showAnimated1, setShowAnimated1] = useState(false);
  const [showAnimated2, setShowAnimated2] = useState(false);
  const [showAnimated3, setShowAnimated3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAnimated1(true);
    });

    setTimeout(() => {
      setShowAnimated2(true);
    }, 500);

    setTimeout(() => {
      setShowAnimated3(true);
    }, 1000);
  }, []);

  const openComment = (postId) => {
    setSelectedPostId(postId);
    setCommentOpen(true);
  };

  const closeComment = () => {
    setSelectedPostId(null);
    setCommentOpen(false);
  };

  // Replace this function with a real API call
  useEffect(() => {
    // Fetch posts from API here
    const fetchPosts = async () => {
      const dummyPosts = [
        {
          id: 1,
          user: {
            username: 'bongsoon2',
            avatar: '/image/bongsoon.jpg',
          },
          imageUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/bKrs/image/ZcK48STGL2PfaDpfeSFhyf6eD80.gif',
          storyHead : "추천",
          title : "엘리멘탈 잼써요",
          content : "감독이 한국계 미국인이라 한국적인 요소를 많이 넣었대요",
          Udate : "58분 전",
          commentCnt : 3,
          likeCnt : 5,
          comment: [
            {
              username: '내가그렇게나쁩니가',
              avatar: 'https://img.hankyung.com/photo/202205/01.29874054.1.jpg',
              comm: '와 잼겟다',
              cUdate: "30분 전"
            },
            {
              username: '레몬나르고빚갚으리오',
              avatar: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MThfMjY2/MDAxNTYzMzgwNjcxOTAy.TpWBwm4jORLb_4A0GQPMW5VQzRut7wEWV3yQIke1_eUg.EaG0AdaC7pikldzeFeYNOE7jkXWnx5LBYlhcPQpuc9Yg.JPEG.chickilling/IMG_4806.jpg?type=w800',
              comm: '웨이드 커여웡',
              cUdate: "7분 전"
            }
          ],
          tag : ["디즈니플러스","판타지","픽사","애니메이션","동심","OST","웨이브"]
        },
        {
          id: 2,
          user: {
            username: '내가그렇게나쁩니가',
            avatar: 'https://img.hankyung.com/photo/202205/01.29874054.1.jpg',
          },
          imageUrl: 'https://i.namu.wiki/i/pBiDXzxOVJ9UuwNgF23Of_tsYa2eEajPIKkiFaGG_Zu23_Ogn0YZYhYK6tgCTVoigZ_3lQBa4xVJmAwIzM_C1w.gif',
          storyHead : "리뷰",
          title : "헤결 인생 영화라더니",
          content : "ㄹㅇ임 다섯 번 봤음",
          Udate : "23시간 전",
          commentCnt : 2,
          likeCnt : 6,
          comment: [
            {
              username: 'bongsoon2',
              avatar: '/image/bongsoon.jpg',
              comm: 'ㅇㅈ',
              cUdate: "3시간 전"
            },
            {
              username: '영철',
              avatar: 'https://item.kakaocdn.net/do/1ce61fe91e13f4121dac22893225ef9bf43ad912ad8dd55b04db6a64cddaf76d',
              comm: 'ㅇㅇ',
              cUdate: "45분 전"
            }
          ],
          tag : ["넷플릭스", "드라마","로맨스","멜로", "범죄","왓챠","웨이브","티빙"]
        },
        {
          id: 3,
          user: {
            username: '레몬나르고빚갚으리오',
            avatar: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MThfMjY2/MDAxNTYzMzgwNjcxOTAy.TpWBwm4jORLb_4A0GQPMW5VQzRut7wEWV3yQIke1_eUg.EaG0AdaC7pikldzeFeYNOE7jkXWnx5LBYlhcPQpuc9Yg.JPEG.chickilling/IMG_4806.jpg?type=w800',
          },
          imageUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDJfMjk5/MDAxNjA5NTMxMDUwMTE3.TV7r4X5XjA8dDKtpowE1rnAoNx3jX4smzr15SFjfZwUg.EcukZ0i-4ztlFd9przOobygN8y-DMmUoyqb22OZkCgEg.JPEG.doun0112/IMG_4315.jpg?type=w800',
          storyHead : "추천",
          title : "캐유캔 넷플릭스에서 이번 달까지래요",
          content : "디카프리오 20대의 마지막 영화,,, 이때부터였을까요 디카프리오가 역변하기 시작한 게...",
          Udate : "3일 전",
          commentCnt : 1,
          likeCnt : 3,
          comment: [
            {
              username: '부릎뜨니숲이었섬',
              avatar: 'https://i.pinimg.com/1200x/ae/93/c0/ae93c08efba7ec010d2b9ed2e023c7c4.jpg',
              comm: '이거 실화 바탕이래융',
              cUdate: "2일 전"
            }
          ],
          tag : ["넷플릭스", "범죄", "드라마", "실화","왓챠","티빙","웨이브"]
        },
        
      ];

      setPosts(dummyPosts);
    };

    fetchPosts();
  }, []);
  return (
    <div style={{fontSize:'15px'}}>
      <ContainerBox>
        <Head>
            <div><a> 오늘 뭐 볼래¿</a></div>
        </Head>
        <Lank>
            <LankTitle><b>오늘의 랭킹 🏆</b></LankTitle>
              <LankMTitle>🎬 MOVIE</LankMTitle>
              <LankBody><div><Grid><LankNum><b><i>1 🥇</i></b></LankNum><LankNum><b><i>2 🥈</i></b></LankNum><LankNum><b><i>3 🥉</i></b></LankNum></Grid> </div></LankBody>
              <LankBody><div><Grid>
              {showAnimated1 && <Animated1>
                  <A href='#'><Poster src="https://i.namu.wiki/i/aRAQu813Cdn2FJ5Uo3bxqMPqxGnQX7qSHbGsQiiKBbzruZKKKXOjBmVQuietbkSvq54sGhe7RFKa16HqIsLyFQ.webp"></Poster></A>
                </Animated1>}
              {showAnimated2 && <Animated2>
                  <A href='#'><Poster src="https://t1.daumcdn.net/movie/72cfc7293390c63db16779b67097d8703d2a5628"></Poster></A>
                </Animated2>}
              {showAnimated3 && <Animated3>
                  <A href='#'><Poster src="https://upload.wikimedia.org/wikipedia/ko/2/23/%EC%BA%90%EC%B9%98_%EB%AF%B8_%EC%9D%B4%ED%94%84_%EC%9C%A0_%EC%BA%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"></Poster></A>
                </Animated3>}
                </Grid></div></LankBody>
              <LankBody><div><Grid2>
              {showAnimated1 && <Animated1>
                <div><A href='#'>엘리멘탈</A></div>
                </Animated1>}
                {showAnimated2 && <Animated2>
                <div><A href='#'>헤어질 결심</A></div>
                </Animated2>}
                {showAnimated3 && <Animated3>
                <div><A href='#'>캐치 미 이프 유 캔</A></div>
                </Animated3>}
                </Grid2></div></LankBody>
              <Hr></Hr>
              <LankMTitle>📝 POST</LankMTitle>
              {showAnimated1 && <Animated1>
              <LankBody><div><LankNum><b><i>1</i></b></LankNum> 　<A href='#'><PostSpan>[추천]</PostSpan> 엘리멘탈 잼써요</A></div></LankBody>
              </Animated1>}
              {showAnimated2 && <Animated2>
              <LankBody><div><LankNum><b><i>2</i></b></LankNum> 　<A href='#'><PostSpan>[리뷰]</PostSpan> 헤결 인생 영화라더니</A></div></LankBody>
              </Animated2>}
              {showAnimated3 && <Animated3>
              <LankBody><div><LankNum><b><i>3</i></b></LankNum> 　<A href='#'><PostSpan>[추천]</PostSpan> 캐유캔 넷플릭스에서 이번 달까지래요</A></div></LankBody>
              </Animated3>}
              
        </Lank>
      <Feed>
        {posts.map((post) => (
          <Post key={post.id}>
            <PostTitle><PostSpan>[{post.storyHead}]</PostSpan> {post.title} <Udate>{post.Udate}</Udate></PostTitle>
            <PostHeader>
              <User>
                <Avatar src={post.user.avatar} alt={post.user.username} />
                <Username>{post.user.username}</Username>
              </User>
            </PostHeader>
            
            <PostImage src={post.imageUrl} alt="Post" />
            <PostContent>{post.content}</PostContent>
            <PostTag> <span className='sharp'>#</span>
            {post.tag.map((tag, index) => (
              <A href='#' key={index}><PostTagItem>{tag}</PostTagItem></A>
            ))}
            </PostTag>
            <PostActions>
              <ActionButton><span style={{color:'#e24747'}}><GoHeart /></span> <Num>{post.likeCnt}</Num> </ActionButton>
              <ActionButton onClick={() => (selectedPostId === post.id && commentOpen ? closeComment() : openComment(post.id))}><span style={{color:'#c5a8d7'}}><SlBubble /></span> <Num>{post.commentCnt}</Num> </ActionButton>
            </PostActions>
            {selectedPostId === post.id && commentOpen && (
            <PostCommentHead>
              <Comment>댓글 <span style={{color:'#c5a8d7'}}>{post.commentCnt}</span></Comment>
              {post.comment.map((comment, index) => (
              <PostComment key={index}>
                <CAvatar src={comment.avatar} />
                <CUser>
                  <CUsername><PostSpan>{comment.username}</PostSpan></CUsername> {comment.comm} <div className='cUdate'>{comment.cUdate}</div>
                </CUser>
              </PostComment>
            ))}
            <CommentPut><Input placeholder='댓글을 입력하세요'></Input><button className='btn'>입력</button></CommentPut>
            </PostCommentHead>
              )}
          </Post>
        ))}
      </Feed>
      </ContainerBox>
      <MenuBar />
    </div>
  )
}