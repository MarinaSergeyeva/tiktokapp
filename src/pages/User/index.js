import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Avatar, Divider, Pagination, Stack, Typography } from '@mui/material';
import Loader from '../../components/Loader';
import {
  fetchUserInfoThunk,
  fetchUserPostsThunk,
} from '../../redux/slices/user/thunk';
import UserPostCard from '../../components/UserPostCard';
import { Box } from '@mui/system';

export const User = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { status, info, posts } = useSelector(state => state.user);
  const { itemList } = posts;
  const timeLinePosts = useSelector(state => state.posts?.posts);

  const { user, stats } = useSelector(state => state.user.info);
  const post = timeLinePosts.find(post => post.authorMeta.id === slug);

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [numOfPages] = useState(itemList.length / itemsPerPage);
  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (slug !== info?.user?.id) {
      dispatch(fetchUserInfoThunk(post.authorMeta.name));
      dispatch(fetchUserPostsThunk(post.authorMeta.name));
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <Stack
          direction="row"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          pt="70px"
        >
          <Stack sx={{ marginBottom: '20px' }}>
            {user && stats && posts && (
              <>
                <Avatar
                  alt={user.nickname || ''}
                  src={user.avatarMedium || ''}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography variant="h6">{user.nickname || ''}</Typography>
                <Typography variant="subtitle2">
                  {user.signature || ''}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Typography variant="subtitle1">
                    Follower: {stats.followerCount || ''}
                  </Typography>
                  <Typography variant="subtitle1">
                    Following: {stats.followingCount || ''}
                  </Typography>
                  <Typography variant="subtitle1">
                    Video posted: {stats.videoCount || ''}
                  </Typography>
                </Stack>
              </>
            )}
          </Stack>
          {itemList && (
            <>
              <Stack
                direction="row"
                display="flex"
                flexWrap="wrap"
                justifyContent="space-evenly"
              >
                {itemList
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map(post => (
                    <UserPostCard key={post.id} post={post} />
                  ))}
              </Stack>
              {itemList.length > 6 && (
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
            </>
          )}
        </Stack>
      )}
    </div>
  );
};
