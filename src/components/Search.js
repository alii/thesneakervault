import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';
import { withRouter } from 'react-router-dom';

const SearchContainer = styled.div`
  position: relative;
`;

const StyledResults = styled.div`
  position: absolute;
  top: 40px;
  max-width: 80vw;
  width: 30vw;

  right: 0;
  background: white;
  padding: 20px;
  border-radius: 10px;

  max-height: 70vh;
  overflow: scroll;
  //border: 1px solid ${theme.muted};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Input = styled.input`
  border-radius: 3em;
  padding: 5px 20px;
  border: 1px solid ${theme.muted};
  background: ${theme.alpha.background(0.8)};
  outline: none;

  &:hover {
    border: 1px solid ${theme.gray};
  }
`;

const StyledSearchResult = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.muted};
  }
`;

const SearchResult = withRouter(props => {
  const { post } = props;
  return <StyledSearchResult onClick={() => props.history.push(`/post/${post.id}`)}>{post.title}</StyledSearchResult>;
});

const Search = ({ posts }) => {
  const [results, setResults] = useState([]);

  return (
    <SearchContainer>
      <Input
        placeholder={'Search...'}
        type={'text'}
        onChange={e => {
          const query = e.target.value.toLowerCase().trim();
          if (query === '') return setResults([]);

          const foundPosts = posts.filter(post => {
            return !!(post.title.toLowerCase().includes(query) || post.tags.some(tag => tag.toLowerCase().includes(query)));
          });

          setResults(foundPosts);
        }}
      />

      {results.length > 0 ? (
        <StyledResults>
          {results.map(post => {
            return <SearchResult key={post.id} post={post} />;
          })}
        </StyledResults>
      ) : (
        <></>
      )}
    </SearchContainer>
  );
};

export default withRouter(Search);
