"use client"
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../menubar';
import { keyframes } from '@emotion/react';


const Container = styled.div`
  width : 600px;
  margin : 0 auto;
  margin-bottom : 100px;
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

const A = styled.a`
  color: white;
  text-decoration: none;
`;

const LankBody = styled.div`
  margin : 20px 0px;
`;

const LankNum = styled.span`
  font-size : 17px;
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

const Lank = styled.div`
  max-width: 564px;
  background: #29252d;
  border-radius: 14px;
  padding: 20px;
  margin : 20px 0;
  box-shadow: 1px 4px 9px -2px #2b2a2a;
`;

const LankTitle = styled.div`
  margin : 0px 0;
  font-size : 18px;
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 185px));
  grid-gap: 15px;
  padding: 0 5px;
`;

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 185px));
  grid-gap: 15px;
  padding: 0 5px;
`;

const Hr = styled.hr`
  border : none;
  border-bottom : 1px solid #756f7f;
  margin : 35px 0 0 0px;
`;

const Poster = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
box-shadow: 1px 3px 8px -1px #1c1c1c;
`;

const MoviePart = styled.div`
 margin : 30px 0;
`;

const PartTitle = styled.div`
    font-size : 17px;
    margin : 30px 5px 15px;
    font-weight : bold;
`;

export default function Movie(){
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [images2, setImages2] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [showAnimated1, setShowAnimated1] = useState(false);
  const [showAnimated2, setShowAnimated2] = useState(false);
  const [showAnimated3, setShowAnimated3] = useState(false);

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
      'https://upload.wikimedia.org/wikipedia/ko/2/23/%EC%BA%90%EC%B9%98_%EB%AF%B8_%EC%9D%B4%ED%94%84_%EC%9C%A0_%EC%BA%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
      'https://blog.kakaocdn.net/dn/dhKOde/btrFKaOPHty/K9VwEhKR1zCY2NFC9BvHmk/img.jpg',
      'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/G64/image/r7ez7N9sPsPCc0rpVzgzpKe-YZc.jpg',
      'https://i.namu.wiki/i/TeucTQgV1aNI9G689xOVdQIGigvIupVh_D2Uuxx4Fo60RiiVazfS12TiZNZAFTWEz3fkx2-Pzy0iTAbLFUwtwQ.webp',
      'https://an2-img.amz.wtchn.net/image/v2/7XggjGXoZ_CZeKIXlPDPpA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk56STVlREV3T0RCeE9EQWlYU3dpY0NJNklpOTJNaTl6ZEc5eVpTOXBiV0ZuWlM4eE5qTXpNRFkwTURBeE9EQTVNamczTkRFNUluMC5SaWhLc1l1YkpURm9oMHNqdlJVa01UX3RYbFJCWVlmQXEtcmlka1lFMElV',
      'https://i.namu.wiki/i/tXdgJll8uUQepguqSSBIMWK45ogiJ8PIsfw0YyGMyTtglqjlzljqfAxb1H7PutrdSpi2gs4FYXp-uFAiCB-vRA.webp',
      'https://www.bntnews.co.kr/data/bnt/image/201104/5c2908fab0de00aec50b528de3621884.jpg',
      'https://i.namu.wiki/i/STm3z_Ds11VSEXQ2Rff0B7wxt5SYSDOXYigj9wScJ5X56jrn49tfuaPcWC_RtNSbfbFfaReCmajlirWPxcTs8A.webp',
      'https://www.themoviedb.org/t/p/original/7k1ZjHAA1CqQ2PEH94Hf5ir2hMz.jpg',
      'https://i.namu.wiki/i/_d6Ra_qW5y99EdBtAD3liIEitpayAFxeRpCt2wD_W6rfdt1VQ9sDT9S-838rihfsKn8VMh5P3rq1QQT50emB9g.webp',
      'https://i.namu.wiki/i/GgVW09vANIKoSod7xVHc7SRhPrEQUb0fVaY_wIhhsALuwz4QKR_npbcSSt6ZcaD8rz3T9CSERh_hL98rutO0TA.webp',
      'https://t1.daumcdn.net/cfile/1566BB1049E81057EE',
      'https://upload.wikimedia.org/wikipedia/ko/thumb/1/1d/%EC%9D%B8%EC%85%89%EC%85%98.jpg/220px-%EC%9D%B8%EC%85%89%EC%85%98.jpg',
      'https://i.namu.wiki/i/a-MtSCEn_30i2BrmKzTJCdFpatSorB8EK9Zn48XVwJiz1PfLkwfN9MB9xMbNCVLftPr9m517yCr0zAcrC_gqeA.webp',
      'https://d3ihz389yobwks.cloudfront.net/1597418094843889019436555800.jpg',
      'https://file2.nocutnews.co.kr/newsroom/image/2019/05/22/20190522222255192726_0_777_1111.jpg',
      'https://i.namu.wiki/i/VxbCgVAZHGbAS5CYYJe9FPPvLvo4YvwcnknCCB7iUZD_H_zjzV7HMjYUhefdxB2M08Xa8_g_JWVSs2oj0fBidw.webp',
    ];

    setImages2((prevImages) => [...prevImages, ...newImages2]);

    // Set 'hasMore' to false when there are no more images to load
    // setHasMore(false);
  };


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

  useEffect(() => {
    fetchImages();
    fetchImages2();
  }, []);

  return (
    <div>
      <Container>
        <Head>
            <div>영화</div>
        </Head>
        <Lank>
            <LankTitle><b>인기 영화</b></LankTitle>
              <LankBody><div><Grid2><LankNum><b><i>1 🥇</i></b></LankNum><LankNum><b><i>2 🥈</i></b></LankNum><LankNum><b><i>3 🥉</i></b></LankNum></Grid2> </div></LankBody>
              <LankBody><div><Grid2>
              {showAnimated1 && <Animated1>
                  <A href='#'><Poster src="https://i.namu.wiki/i/aRAQu813Cdn2FJ5Uo3bxqMPqxGnQX7qSHbGsQiiKBbzruZKKKXOjBmVQuietbkSvq54sGhe7RFKa16HqIsLyFQ.webp"></Poster></A>
                </Animated1>}
              {showAnimated2 && <Animated2>
                  <A href='#'><Poster src="https://t1.daumcdn.net/movie/72cfc7293390c63db16779b67097d8703d2a5628"></Poster></A>
                </Animated2>}
              {showAnimated3 && <Animated3>
                  <A href='#'><Poster src="https://upload.wikimedia.org/wikipedia/ko/2/23/%EC%BA%90%EC%B9%98_%EB%AF%B8_%EC%9D%B4%ED%94%84_%EC%9C%A0_%EC%BA%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"></Poster></A>
                </Animated3>}
                </Grid2></div></LankBody>
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
        </Lank>
        <MoviePart>
            <PartTitle>애니메이션 🎠</PartTitle>
            <Grid3>
            <Poster src="https://i.namu.wiki/i/aRAQu813Cdn2FJ5Uo3bxqMPqxGnQX7qSHbGsQiiKBbzruZKKKXOjBmVQuietbkSvq54sGhe7RFKa16HqIsLyFQ.webp"></Poster>
            <Poster src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C576C45BC778FEDE0C59F276078CC5399D9E3CDD14BB187796FB201A4B0BBF31/scale?width=506&aspectRatio=2.00&format=jpeg"></Poster>
            <Poster src="https://i.namu.wiki/i/-B6mlCu66RkrhbSDhvB5lKAoomwWZXsPvCSFxK20aBGaOLhGv9Byx5lKGhY87YWkkPmA67GT3T8hGP402olemQ.webp"></Poster>
            <Poster src="https://upload.wikimedia.org/wikipedia/ko/d/d9/%EC%9B%94e_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"></Poster>
            </Grid3>
        </MoviePart>
        <MoviePart>
            <PartTitle>영화제 수상 작품 🏆</PartTitle>
            <Grid3>
            <Poster src="https://t1.daumcdn.net/movie/72cfc7293390c63db16779b67097d8703d2a5628"></Poster>
            <Poster src="https://i.namu.wiki/i/x5Sw0SbGisZZfV7hMmarI7Yu3jAJD1kTl7DQjwiZEfvEsusTU6tng5SVnQFt9pyVT_fcSSBaHbk31STAll_HeA.webp"></Poster>
            <Poster src="https://i.namu.wiki/i/J-AwFq-6xzVxDQpE3q3CwCL_QBzYfL6MPINXL1kWPeNlZXWNjayXfzXqqyi8luo4m4GM9Bsh_nhy9Ig3m5a8FQ.webp"></Poster>
            <Poster src="https://t1.daumcdn.net/movie/01ad6a3cc60c11cfa581079492d6b121299f36ba"></Poster>
            </Grid3>
        </MoviePart>
        <MoviePart>
            <PartTitle>음악이 멋진 영화 🎶</PartTitle>
            <Grid3>
            <Poster src="https://i.namu.wiki/i/6pCH-rfcoQnn-ZwSEfuKQBaURv0qwz0lqNMsTe2z2j8G6SDP6JvsmOAAAXoDG5PoM9AObTHIFOEdM3iU3Fq5vA.webp"></Poster>
            <Poster src="https://t1.daumcdn.net/movie/640d568ed10fc4cd26cc72c18ac3079de901d1a8"></Poster>
            <Poster src="https://i.namu.wiki/i/B9FJyCEBX0NBWgO9-RyUBBhA35vTZvs5zlupdaGwbT8akX8hiXHkNreqqQGxQjUvYuoWkzzMtONJdsSxtM-EHg.webp"></Poster>
            <Poster src="https://upload.wikimedia.org/wikipedia/ko/1/12/La_la_land.jpg"></Poster>
            </Grid3>
        </MoviePart>
        <MoviePart>
            <PartTitle>시리즈 영화 📚</PartTitle>
            <Grid3>
            <Poster src="https://i.namu.wiki/i/kCl6N7uOwDN3EAzl7hRjouXiOPWajThFWy6V7BJ1s0W00k-LtKIXunQTIpd2npiN1hsPGr-XYWnE-uca4DiWnQ.webp"></Poster>
            <Poster src="https://dispatch.cdnser.be/cms-content/uploads/2019/03/30/361aeab3-bf32-47ca-b8a5-959bf44a8614.jpg"></Poster>
            <Poster src="https://upload.wikimedia.org/wikipedia/ko/1/15/%ED%97%9D%EA%B1%B0%EA%B2%8C%EC%9E%84%ED%8C%90%EC%97%A0%EC%9D%98%EB%B6%88%EA%BD%83_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"></Poster>
            <Poster src="https://upload.wikimedia.org/wikipedia/ko/d/dd/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg"></Poster>
            </Grid3>
        </MoviePart>
        <MoviePart>
            <PartTitle>힐링 또는 킬링 영화 🍷</PartTitle>
            <Grid3>
            <Poster src="https://upload.wikimedia.org/wikipedia/ko/d/d3/%EB%A6%AC%ED%8B%80%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B82018_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"></Poster>
            <Poster src="https://t1.daumcdn.net/movie/1c660d016c4d414926a062d2393bdb8e94ee37ce"></Poster>
            <Poster src="https://t1.daumcdn.net/movie/d3720c60629495fd5ef599c46b00636868da267e"></Poster>
            <Poster src="https://t1.daumcdn.net/cfile/tistory/99EDC1475B77987606"></Poster>
            </Grid3>
        </MoviePart>
      </Container>
      <MenuBar />
    </div>
  )
}
