import React from 'react';
import Spinner from './components/Spinner';
import './assets/App.scss';

import Navbar from './components/Navbar';
import Store from './util/store';
import API from './util/API';
import Hero from './components/Hero';
import Post, { PostContainer } from './components/PostCard';
import PostPage from './pages/Post';
import styled from 'styled-components';

import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import theme from './assets/theme';
import Search from './components/Search';

const AllPosts = styled.h2`
  margin: 15px 0;
`;

const Home = () => {
  const store = Store.useStore();
  const posts = store.get('posts');

  return (
    <>
      <Hero
        title={'Sneaker Vault'}
        paragraph={new Date().getFullYear() + "'s hottest Sneakers, biggest releases & vast archive of shoes."}
      />
      <AllPosts>All Posts</AllPosts>
      <PostContainer>
        {posts.map(post => {
          return <Post key={post.id} post={post} />;
        })}
      </PostContainer>
    </>
  );
};

const Content = styled.div`
  padding: 0 20px;
`;

const App = withRouter(props => {
  const store = Store.useStore();
  const posts = store.get('posts');

  if (posts.length === 0) {
    API.exec('/api/posts').then(store.set('posts'));

    return <Spinner />;
  }

  return (
    <>
      <Navbar>
        <h3 onClick={() => props.history.push('/')}>The Sneaker Vault</h3>
        <Search posts={posts} />
      </Navbar>
      <Content>
        <Route path={'/'} exact component={Home} />
        <Route path={'/post/:id'} component={PostPage} />
      </Content>
    </>
  );
});

const Wrapper = () => {
  console.log(
    '%c[Megaphone] %cWritten by Alistair Smith (https://aabbccsmith.dev).',
    `color: ${theme.palette.red}; font-weight: bold; font-size: 150%`,
    'color: white; font-weight: bold; font-family: sans-serif; font-size: 150%;',
  );

  console.log(
    "%c[For Developers] %c We're open source! Check it out at https://github.com/aabbcscmith/sneakervault",
    `color: ${theme.palette.red}; font-weight: bold; font-size: 110%`,
    'color: white; font-weight: bold; font-family: sans-serif; font-size: 110%;',
  );

  return (
    <BrowserRouter>
      <Store.Container>
        <App />
      </Store.Container>
    </BrowserRouter>
  );
};

export default Wrapper;
