"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../menubar';
import { BiSolidBell } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';


const Container = styled.div`
  max-width : 600px;
  margin: 0px auto;
  position: relative;
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

const Bio = styled.p`
  margin: 0;
`;

const Stats = styled.div`
  text-align:center;
  font-size : 14px;
  margin-bottom : 30px;
  color : #9c91a5;
`;

const StatItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StatValue = styled.strong`
  display: block;
`;

const StatLabel = styled.span``;

const EditProfileButton = styled.button`
  background-color: #6f5f7b;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 4px;
`;

const PostTabs = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => (props.active ? 'white' : '#ccc')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  &:hover {
    color: white;
  }
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Post = styled.img`
  width: 100%;
  object-fit: cover;
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
    margin : 20px 0;
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

export default function User(){
  const [activeTab, setActiveTab] = useState('posts');
  const [images, setImages] = useState([]);
  
  const handleEditProfile = () => {
    // Implement edit profile logic here
  };

  const fetchImages = async () => {
    const newImages = [
      'https://i.namu.wiki/i/aRAQu813Cdn2FJ5Uo3bxqMPqxGnQX7qSHbGsQiiKBbzruZKKKXOjBmVQuietbkSvq54sGhe7RFKa16HqIsLyFQ.webp',
      'https://t1.daumcdn.net/movie/72cfc7293390c63db16779b67097d8703d2a5628',
      'https://upload.wikimedia.org/wikipedia/ko/2/23/%EC%BA%90%EC%B9%98_%EB%AF%B8_%EC%9D%B4%ED%94%84_%EC%9C%A0_%EC%BA%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    ];

    setImages((prevImages) => [...prevImages, ...newImages]);

    // Set 'hasMore' to false when there are no more images to load
    // setHasMore(false);
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
      </PostBody>

  </Container>
  <MenuBar />
</div>
  )
}