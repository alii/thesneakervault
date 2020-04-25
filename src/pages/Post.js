import React from 'react';
import { withRouter } from 'react-router-dom';
import Store from '../util/store';
import styled from 'styled-components';
import theme from '../assets/theme';

const StyledPost = styled.div`
  padding-top: 40px;
  margin: 0 auto;
  max-width: 70vw;

  h1 {
    font-size: 250%;
  }
`;

const StyledBack = styled.button`
  padding-right: 80px;
  padding-top: 40px;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  background: none;
  outline: none;
  font-family: ${theme.font};
  letter-spacing: 1.2px;
`;

const Back = ({ history }) => {
  return <StyledBack onClick={() => history.push('/')}>Back</StyledBack>;
};

const HeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  max-height: 70vh;
  border-radius: 10px;
`;

const Post = props => {
  const store = Store.useStore();

  const postID = props.match.params.id;
  const post = store.get('posts').find(post => post.id === postID);
  if (!post) {
    props.history.replace('/');
    return null;
  }

  return (
    <StyledPost>
      <HeaderImage src={post.image} alt={post.title} />
      <Back history={props.history} />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </StyledPost>
  );
};

export default withRouter(Post);
