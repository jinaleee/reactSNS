"use client"
import React, { useState } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../menubar';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const Container = styled.div`
  width : 400px;
  margin : 0 auto;
`;

const Form = styled.form``;

// const Input = styled.input`
//   display: block;
//   width: 100%;
//   padding: 12px 20px;
//   margin: 0 0 20px;
//   box-sizing: border-box;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top : 20px;
`;

const Button = styled.button`
  background-color: #5c4571;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 30px 0px;
  cursor: pointer;
  border-radius: 4px;
  width : 100%
`;

const SocialShare = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SocialIcon = styled.div`
  color: #fff;
  background-color: #3b5998;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #4c70ba;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 15px;
  background: #483e51;
  color: white;
  width : 92%;
  box-shadow: 2px 3px 8px -2px #1c1c1c;

    &:focus{
        outline: none;
    }
`;

export default function PlusSquare(){
  const [file, setFile] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [croppedImage, setCroppedImage] = useState(null);

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setFile(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoaded = (image) => {
    setCroppedImage(image);
  };

  const onCropComplete = (crop) => {
    if (croppedImage && crop.width && crop.height) {
      // Implement image cropping logic here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the rest of the form submission logic here
  };

  const handleSocialShare = (platform) => {
    // Implement social sharing logic here
  };
  return(
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="file-input">썸네일 선택</Label>
          <Input
            type="file"
            id="file-input"
            accept="image/*,video/*"
            onChange={onFileChange}
            />
            {file && (
            <ReactCrop
            src={file}
            crop={crop}
            onChange={(newCrop) => setCrop(newCrop)}
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            />
            )}
            <Label htmlFor="caption">제목</Label>
            <Input type="text" id="caption" placeholder="제목" />
            <Label htmlFor="location">내용</Label>
            <Input
                     type="text"
                     id="location"
                     placeholder="내용"
                   />
            <Label htmlFor="tags">태그 선택</Label>

            <Button type="submit">등록</Button>
            </Form>
            {/* <SocialShare>
            <SocialIcon onClick={() => handleSocialShare('facebook')}>
            <FaFacebookF />
            </SocialIcon>
            <SocialIcon onClick={() => handleSocialShare('twitter')}>
            <FaTwitter />
            </SocialIcon>
            <SocialIcon onClick={() => handleSocialShare('instagram')}>
            <FaInstagram />
            </SocialIcon>
            </SocialShare> */}
            </Container>
            <MenuBar />
            </div>
        );
    };