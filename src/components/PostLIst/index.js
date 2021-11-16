import { Stack } from '@mui/material';
import React from 'react';
import { PostItem } from '../PostItem';

export const PostList = ({ data }) => {
  return (
    <Stack
      direction="row"
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
      pt="70px"
    >
      {data.map(item => (
        <PostItem key={item.id} item={item} />
      ))}
    </Stack>
  );
};
