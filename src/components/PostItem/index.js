import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const PostItem = ({ item }) => {
  const navigate = useNavigate();

  const navigateToUserPage = () => {
    navigate(`/user/${item.authorMeta.id}`);
  };

  const { text, authorMeta, hashtags, videoUrl } = item;
  return (
    <Card sx={{ width: 345, marginBottom: '60px', marginX: '10px' }}>
      <CardHeader
        sx={{ cursor: 'pointer' }}
        avatar={
          <Avatar
            sx={{ width: 56, height: 56 }}
            aria-label="recipe"
            src={authorMeta.avatar}
          />
        }
        title={authorMeta.name}
        onClick={navigateToUserPage}
      />
      <CardMedia
        sx={{ objectFit: 'cover' }}
        component="video"
        alt="video"
        height="450"
        src={videoUrl}
        controls
        contentEditable
        muted
        autoPlay
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
          {hashtags.length > 0 && (
            <Box>
              <Grid container spacing={3}>
                {hashtags.map(tag => {
                  <Grid item xs="auto">
                    <Item>{tag.name}</Item>
                  </Grid>;
                })}
              </Grid>
            </Box>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};
