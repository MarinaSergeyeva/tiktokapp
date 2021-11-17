import React, { useState } from 'react';
import { Divider, Pagination } from '@mui/material';
import { Box } from '@mui/system';
// import { PostItem } from '../PostItem';

const CustomPagination = ({ data, itemComponent }) => {
  console.log(`itemComponent`, itemComponent);
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [numOfPages] = useState(data.length / itemsPerPage);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <>
      {data.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(item => (
        // <PostItem key={item.id} item={item} />
        <div key={item.id}>
          <p>{item.id}</p>
          {itemComponent}
        </div>
      ))}
      {data.length > 6 && (
        <>
          <Divider />
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
            />
          </Box>
        </>
      )}
    </>
  );
};

export default CustomPagination;
