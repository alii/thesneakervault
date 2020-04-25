import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';

const SearchContainer = styled.div`
  position: relative;
`;

const StyledResults = styled.div`
  position: absolute;
  top: 40px;
  min-width: 15vw;
  right: 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
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
            return <p key={post.id}>{post.title}</p>;
          })}
        </StyledResults>
      ) : (
        <></>
      )}
    </SearchContainer>
  );
};

export default Search;
