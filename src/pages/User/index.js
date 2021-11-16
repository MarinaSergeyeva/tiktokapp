import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Avatar, Stack, Typography } from '@mui/material';
import Loader from '../../components/Loader';
import {
  fetchUserInfoThunk,
  fetchUserPostsThunk,
} from '../../redux/slices/user/thunk';
import UserPostCard from '../../components/UserPostCard';

export const User = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { status, info, posts } = useSelector(state => state.user);
  const { itemList } = posts;
  const timeLinePosts = useSelector(state => state.posts?.posts);

  const { user, stats } = useSelector(state => state.user.info);
  const post = timeLinePosts.find(post => post.authorMeta.id === slug);

  useEffect(() => {
    if (slug !== info?.user?.id) {
      dispatch(fetchUserInfoThunk(post.authorMeta.name));
      dispatch(fetchUserPostsThunk(post.authorMeta.name));
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {status === 'loading' && <Loader />}
      {status === 'resolved' && (
        <>
          <Stack sx={{ marginBottom: '20px' }}>
            {user && stats && posts && (
              <>
                <Avatar
                  alt={user.nickname || ''}
                  src={user.avatarMedium || ''}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography>{user.nickname || ''}</Typography>
                <Typography>{user.signature || ''}</Typography>
                <Stack direction="row" spacing={2}>
                  <Typography>Follower: {stats.followerCount || ''}</Typography>
                  <Typography>
                    Following: {stats.followingCount || ''}
                  </Typography>
                  <Typography>
                    Video posted: {stats.videoCount || ''}
                  </Typography>
                </Stack>
              </>
            )}
          </Stack>
          {itemList && (
            <Stack
              direction="row"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              {console.log(`itemList`, itemList)}
              {itemList.map(post => (
                <UserPostCard key={post.id} post={post} />
              ))}
            </Stack>
          )}
        </>
      )}
    </div>
  );
};
