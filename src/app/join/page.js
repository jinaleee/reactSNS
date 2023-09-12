"use client"

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../menubar';
import { SlTag } from 'react-icons/sl';


const Container = styled.div`
    margin: 0 auto;
    max-width: 400px;
    padding: 20px 0;
    padding-bottom: 50px;
    @font-face {
        font-family: 'KOTRA_GOTHIC';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/KOTRA_GOTHIC.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    font-family: 'KOTRA_GOTHIC';
    font-size : 15px;
    
    .btn{
        width: 400px;
        height: 50px;
        border: none;
        border-radius: 5px;
        color: white;
        background: #5c4571;
        box-shadow: 3px 3px 8px -2px #2e2e2f;
        cursor: pointer;
        margin : 20px 0;
        font-size : 15px;
        margin-bottom : 80px;
      }
`;

const Hr = styled.hr`
  width: 100%
  border : none;
  border-bottom : 1px solid #756f7f;
  margin : 10px auto;
`;

const Title = styled.div`
  margin : 10px 0;
  font-size : 17px;
`;

const Input = styled.input`
    border: none;
    border-radius: 4px;
    width : 370px;
    height: 32px;
    padding: 0 15px;
    background: #706777;
    margin-bottom: 10px;
    color : white;

    &:focus{
        outline: none;
    }
`;

const Input1 = styled.input`
    border: none;
    border-radius: 4px;
    width : 160px;
    height: 32px;
    padding: 0 15px;
    background: #706777;
    margin-bottom: 5px;
    color : white;

    &:focus{
        outline: none;
    }
`;

const Select = styled.select`
    border: none;
    border-radius: 4px;
    width : 187px;
    height: 32px;
    padding: 0 15px;
    background: #706777;
    margin-bottom: 5px;
    color : white;
    
    &:focus{
        outline: none;
    }
`

const Span = styled.div`
    font-size : 13px;
    color : #b5b5b5;
`
const Head = styled.div`
@font-face {
  font-family: 'Yeongdo-Rg';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/Yeongdo-Rg.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
font-family: 'Yeongdo-Rg';
  font-size: 30px;
  margin: 0 auto;
  max-width: 600px;
  padding: 20px 0;
  padding-bottom: 50px;
  text-align : center;
`;

const AllCheck = styled.div`
    margin-top : 15px;
`

export default function Join(){
    return(
        <div>
            <Container>
            <Head><div><a> 오늘 뭐 볼래¿</a></div></Head>
                <h2>회원가입</h2>
                <div>
                    <Title>이메일</Title>
                    <Input1></Input1> @ <Select><option>선택</option></Select>
                </div>
                <div>
                    <Title>비밀번호</Title>
                    <Input type='password'></Input>
                </div>
                <div>
                    <Title>비밀번호 확인</Title>
                    <Input type='password'></Input>
                </div>
                <div>
                    <Title>닉네임</Title>
                    <Input></Input>
                </div>
                <div>
                    <Title>약관 동의</Title>
                    <Span>가입을 하시려면 다음의 정책에 대한 동의가 필요합니다.</Span>
                    <AllCheck><input type='checkbox' /> 모두 동의</AllCheck>
                    <Hr />
                    <div><input type='checkbox' /> [필수] 이용약관에 동의합니다.</div>
                    <div><input type='checkbox' /> [필수] 개인정보 수집 및 이용에 동의합니다.</div>
                    <div><input type='checkbox' /> [필수] 본인은 만 14세 이상입니다.</div>
                    <div><input type='checkbox' /> [선택] 이벤트 등 알림 수신에 동의합니다.</div>
                </div>
                <button className='btn'>회원가입하기</button>
            </Container>
        </div>
    )
}