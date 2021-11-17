import React from 'react';
import { Stack } from '@mui/material';
import { PostItem } from '../PostItem';
import CustomPagination from '../Pagination';

export const PostList = ({ data }) => (
  <Stack
    direction="row"
    display="flex"
    flexWrap="wrap"
    justifyContent="space-evenly"
    pt="70px"
  >
    <CustomPagination data={data} itemComponent={<PostItem />} />
  </Stack>
);
