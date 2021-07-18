import { Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../components/Layouts/MainLayout';
import TweetForm from '../../components/Tweet/TweetForm';
import TweetItem from '../../components/Tweet/TweetItem';

const HomeIndex = () => {
  const tweets = useSelector(state => state.tweet.tweets);

  return (
    <MainLayout>
      {/* Tweet Form */}
      <Stack spacing="3">
        <TweetForm />
        {/* Tweet Container */}
        {tweets.map((tweet, index) => {
          return <TweetItem key={index} tweet={tweet} />;
        })}
      </Stack>
    </MainLayout>
  );
};

export default HomeIndex;
