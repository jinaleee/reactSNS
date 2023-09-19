"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../menubar';
import { BiSolidBell } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';
import { keyframes } from '@emotion/react';

const Container = styled.div`
  max-width : 600px;
  margin: 0px auto;
  position: relative;
  margin-bottom : 100px;
`;

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

const ProfileHeader = styled.div`
 text-align : center;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  text-align : center;
  margin-bottom: 8px;
  margin-top: 49px;
`;

const UserInfo = styled.div``;

const Username = styled.div`
text-align: center;
font-size: 20px;
margin: 5px 0 5px 0;
`;

const Stats = styled.div`
  text-align:center;
  font-size : 14px;
  margin-bottom : 30px;
  color : #9c91a5;
`;

const Icon = styled.div`
  position: absolute;
  right: 4px;
  top: 7px;
  font-size: 23px;
  letter-spacing: 3px;

  .iconItem{
    color : #9c91a5;
  }
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;

const Like = styled.div`
background-color: #40384b;
max-width: 800px;
height: 58px;
border-radius: 8px;
box-shadow: 2px 3px 11px -3px #302c35;
margin: 10px 0;
padding: 25px;
display: grid;
grid-template-columns: repeat(2, minmax(72px, 370px));
grid-gap: 7px;
text-align: center;

.num{
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.name{
  font-size: 16px;
  color: #a39ba3;
}
.left{
  border-right: 1px solid #5d5065;
}
.right{

}
`;

const PostBody = styled.div`
  .title{
    margin : 40px 0 20px;
    font-size: 17px;
    font-weight : bold;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 5px;
`;

const GridItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Lank = styled.div`
  margin: 0 auto;
  max-width: 564px;
  background: #29252d;
  border-radius: 14px;
  padding: 10px 20px;
  box-shadow: 1px 4px 9px -2px #2b2a2a;
`;

const Animated1 = styled.div`
  animation: ${fadeIn} 2s ease;
  animation-delay: 0s;
`;

const LankBody = styled.div`
  margin : 20px 0px;
`;

const PostSpan = styled.span`
  color : #c5a8d7;
`;

export default function User(){
  const [images, setImages] = useState([]);
  
  const fetchImages = async () => {
    const newImages = [
      'https://images.justwatch.com/poster/240342747/s592/eob',
      'https://t1.daumcdn.net/movie/72cfc7293390c63db16779b67097d8703d2a5628',
      'https://i.namu.wiki/i/J-AwFq-6xzVxDQpE3q3CwCL_QBzYfL6MPINXL1kWPeNlZXWNjayXfzXqqyi8luo4m4GM9Bsh_nhy9Ig3m5a8FQ.webp',
      'https://t1.daumcdn.net/movie/01ad6a3cc60c11cfa581079492d6b121299f36ba'
    ];
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <Container>
      <Icon><A href='/heart'><span className='iconItem'><BiSolidBell /></span></A> <A href='#'><span className='iconItem'><MdSettings /></span></A></Icon>
        <ProfileHeader>
          <Avatar src="/image/mang.jpg" />
          <UserInfo>
            <Username>꿀호떡</Username>
            <Stats>Follow <A href='#'>3</A> Follower <A href='#'>5</A></Stats>
          </UserInfo>
        </ProfileHeader>

      <Like>
        <div className='left'>
          <div className='num'><A href='#'>5</A></div>
          <div className='name'>찜한 작품</div>
        </div>
        <div className='right'>
          <div className='num'><A href='#'>9</A></div>
          <div className='name'>본 작품</div>
        </div>
      </Like>
      
      <PostBody>
        <div className='title'>인생영화</div>
        <Grid>
          {images.map((image, index) => (
            <GridItem key={index} src={image} alt="Thumbnail" />
          ))}
        </Grid>
        <div className='title'>내 게시글</div>
        <Lank>
              <Animated1>
              <LankBody><div><A href='#'><PostSpan>[추천]</PostSpan> 나는요 완젼히 붕괴됐서요</A></div></LankBody>
              <LankBody><div><A href='#'><PostSpan>[추천]</PostSpan> 캐유캔 넷플릭스에서 이번 달까지래요</A></div></LankBody>
              </Animated1>
        </Lank>
      </PostBody>
  </Container>
  <MenuBar />
</div>
  )
}