import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
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
  console.log(`item`, item);
  const navigate = useNavigate();

  const { text, covers, authorMeta, hashtags } = item;
  return (
    <Card sx={{ width: 345, marginBottom: '60px', marginX: '10px' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ width: 56, height: 56 }}
            aria-label="recipe"
            src={authorMeta.avatar}
          />
        }
        title={authorMeta.name}
      />
      <CardMedia
        component="img"
        alt="green iguana"
        height="350"
        image={covers.default}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hashtags.length > 0 && (
            <Box sx={{ flexGrow: 1 }}>
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
      <CardActions>
        <Button size="small">Share</Button>
        <Button
          size="small"
          onClick={() => {
            navigate(`/posts/${item.id}`);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
