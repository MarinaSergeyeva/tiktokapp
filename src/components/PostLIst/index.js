import React, { useState } from 'react';
import { Divider, Pagination, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { PostItem } from '../PostItem';

export const PostList = ({ data }) => {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [numOfPages] = useState(data.length / itemsPerPage);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <Stack>
      <Stack
        direction="row"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-evenly"
        pt="70px"
      >
        {data
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(item => (
            <PostItem key={item.id} item={item} />
          ))}
      </Stack>
      {data.length > 6 && (
        <Stack>
          <Divider sx={{ mb: '10px' }} />
          <Box component="span">
            <Pagination
              count={numOfPages}
              page={page}
              onChange={handleChange}
              defaultPage={1}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
          </Box>
        </Stack>
      )}
    </Stack>
  );
};
