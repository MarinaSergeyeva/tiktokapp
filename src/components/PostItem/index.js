import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: '4px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const PostItem = ({ item }) => {
  const navigate = useNavigate();

  const navigateToUserPage = () => {
    navigate(`/user/${item.authorMeta.id}`);
  };

  const { text, authorMeta, hashtags, videoUrl, commentCount, shareCount } =
    item;
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 345,
        marginBottom: '60px',
        marginX: '10px',
      }}
    >
      <CardHeader
        sx={{ paddingY: '10px' }}
        avatar={
          <Avatar
            sx={{ cursor: 'pointer', width: 56, height: 56 }}
            aria-label="recipe"
            src={authorMeta.avatar}
            onClick={navigateToUserPage}
          />
        }
        title={
          <Typography sx={{ cursor: 'pointer' }} onClick={navigateToUserPage}>
            {authorMeta.name}
          </Typography>
        }
        subheader={
          <Stack display="flex" direction="row" spacing={1} paddingY={1}>
            <ThumbUpIcon />
            <Typography>{shareCount}</Typography>
            <CommentIcon />
            <Typography>{commentCount}</Typography>
          </Stack>
        }
      />
      <CardContent sx={{ paddingY: '10px' }}>
        {text && (
          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
            fontWeight="700"
            mb={1}
          >
            {text}
          </Typography>
        )}
        {hashtags.length > 0 && (
          <Grid container spacing={1}>
            {hashtags.map(tag => (
              <Grid key={tag.id} item xs="auto">
                <Item>#{tag.name}</Item>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContent>
      <CardMedia
        sx={{ objectFit: 'cover', flexGrow: 1 }}
        component="video"
        alt="video"
        height="450"
        src={videoUrl}
        controls
        contentEditable
        muted
        autoPlay
      />
    </Card>
  );
};
