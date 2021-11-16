import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardHeader } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const UserPostCard = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
      <CardActionArea>
        <CardHeader
          avatar={<VisibilityIcon />}
          subheader={post.stats.playCount}
        />
        <CardMedia
          sx={{ objectFit: 'cover' }}
          component="video"
          height="450"
          src={post.video.playAddr}
          alt="video"
          muted
          controls
          contentEditable
        />
      </CardActionArea>
    </Card>
  );
};

export default UserPostCard;
