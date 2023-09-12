"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../menubar';
import { BiSearchAlt } from 'react-icons/bi';
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = styled.div`
  padding: 20px;
  @font-face {
    font-family: 'KOTRA_GOTHIC';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/KOTRA_GOTHIC.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'KOTRA_GOTHIC';
  font-size : 15px;

  .cGlass{
    position: absolute;
    top: 37px;
    left: 39px;
    font-size: 24px;
    color: #777479;
  }
`;

const SearchBar = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 0 0 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  background-color : #413947;
  color : white;
  padding-left: 40px;

  &:focus{
    outline: none;
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

const Best = styled.div`
  margin : 20px 0px;
`;

const Sharp = styled.span`
    background-color: #493f51;
    padding: 2px 7px;
    border-radius: 100%;
    font-size: 16px;
    color: #918a95;
    font-weight: bold;
    margin-right: 4px;
}
`;

const Tag = styled.div`
  margin : 6px 0px;
  line-height: 28px;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;

const BestTag = styled.div`
  font-size : 17px;
  margin : 10px 0;
  margin-top : 30px;
  font-weight: bold;
`;


export default function Search(){
  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  // Replace this function with a real API call
  const fetchImages = async () => {
    const newImages = [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ];

    setImages((prevImages) => [...prevImages, ...newImages]);

    // Set 'hasMore' to false when there are no more images to load
    // setHasMore(false);
  };

  const fetchImages2 = async () => {
    const newImages2 = [
      'https://i.namu.wiki/i/aRAQu813Cdn2FJ5Uo3bxqMPqxGnQX7qSHbGsQiiKBbzruZKKKXOjBmVQuietbkSvq54sGhe7RFKa16HqIsLyFQ.webp',
      'https://t1.daumcdn.net/movie/72cfc7293390c63db16779b67097d8703d2a5628',
      'https://upload.wikimedia.org/wikipedia/ko/2/23/%EC%BA%90%EC%B9%98_%EB%AF%B8_%EC%9D%B4%ED%94%84_%EC%9C%A0_%EC%BA%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
    ];

    setImages2((prevImages) => [...prevImages, ...newImages2]);

    // Set 'hasMore' to false when there are no more images to load
    // setHasMore(false);
  };

  const handleSearch = (event) => {
    console.log('Search:', event.target.value);
    // Implement search functionality here
  };

  useEffect(() => {
    fetchImages();
    fetchImages2();
  }, []);

  return (
    <div>
      <Container>
        <BiSearchAlt className='cGlass'/>
        <SearchBar
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={handleSearch}
        />
        <Best>
          <BestTag>인기 태그</BestTag>
          <Tag><A href='#'><Sharp>#</Sharp> 판타지</A></Tag>
          <Tag><A href='#'><Sharp>#</Sharp> 스릴러</A></Tag>
          <Tag><A href='#'><Sharp>#</Sharp> 로맨스</A></Tag>
          <Tag><A href='#'><Sharp>#</Sharp> 액션</A></Tag>
        </Best>

        <BestTag>인기글</BestTag>
        <A href='#'><Grid>
            {images.map((image, index) => (
              <GridItem key={index} src={image} alt="Thumbnail" />
            ))}
          </Grid></A>

        <BestTag>인기 영화</BestTag>
          <A href='#'><Grid>
            {images2.map((image, index) => (
              <GridItem key={index} src={image} alt="Thumbnail" />
            ))}
          </Grid></A>
      </Container>
      <MenuBar />
    </div>
  )
}
