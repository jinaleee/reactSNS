"use client"
import React, { useState } from 'react';
import styled from '@emotion/styled';
import MenuBar from '../menubar';

const Container = styled.div`
  width : 600px;
  margin : 0 auto;
`;

const ActivityTabs = styled.div`
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
  color: ${(props) => (props.active ? 'white' : '#6d6273')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

  &:hover {
    color: white;
  }
`;

const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ActivityContent = styled.div``;

export default function Heart(){
  const [activeTab, setActiveTab] = useState('you');
  const [activities] = useState([
    { type: 'like', user: 'bongsoon2', content: '님이 당신의 글을 좋아합니다.' },
    { type: 'comment', user: '망치', content: '님이 댓글을 남겼습니다.' },
    { type: 'follow', user: '부릅뜨니숲이었으', content: '님이 팔로잉하였습니다.' },
    { type: 'mention', user: '레몬나르고빚갚으리오', content: '님이 댓글을 남겼습니다.' },
  ]);

  const filteredActivities = activities.filter((activity) => {
    if (activeTab === 'you') {
      return true;
    }
    return activity.type !== 'mention';
  });

  return (
    <div>
      <Container>
        <ActivityTabs>
          <Tab
            active={activeTab === 'you'}
            onClick={() => setActiveTab('you')}
          >
            You
          </Tab>
          <Tab
            active={activeTab === 'following'}
            onClick={() => setActiveTab('following')}
          >
            Following
          </Tab>
        </ActivityTabs>
        <ActivityList>
          {filteredActivities.map((activity, index) => (
            <ActivityItem key={index}>
              <Avatar src={`https://via.placeholder.com/150?text=${activity.user}`} />
              <ActivityContent>
                <strong>{activity.user}</strong> {activity.content}
              </ActivityContent>
            </ActivityItem>
          ))}
        </ActivityList>
      </Container>
      <MenuBar />
    </div>
  )
}