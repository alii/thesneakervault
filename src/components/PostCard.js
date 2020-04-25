import React from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';
import { withRouter } from 'react-router-dom';

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  .fade-in-row {
    flex: 1;
    display: flex;
    flex-wrap: wrap;

    .fade-in-child {
      flex: 1;
      min-width: 300px;
    }
  }
`;

const StyledPost = styled.div`
  margin: 5px;
  padding: 15px;

  display: flex;
  flex-direction: column;

  cursor: pointer;
  position: relative;
  transition: all 0.4s;

  border-radius: 10px;
  border: 1px solid transparent;

  img {
    border-radius: 5px;

    height: 150px;
    width: 100%;

    max-height: 140px;
    object-fit: cover;
  }

  &:hover {
    border: 1px solid ${theme.muted};
  }

  .tags {
    font-size: 70%;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: ${theme.gray};
    margin-bottom: 10px;
    display: flex;

    span {
      padding: 0 5px;
      border-right: 1px solid ${theme.gray};

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  .title-container {
    margin: 10px 0;
    display: flex;

    h3 {
      flex: 1;
    }

    h5 {
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-size: 75%;
      padding: 2px 0 5px;
    }
  }

  p {
    color: ${theme.gray};

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const truncator = num => str => {
  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num) + '...';
};

const truncate = truncator(140);

const Post = props => {
  const {
    post: { image, title, content, tags, date: dbDate, id },
  } = props;

  const date = new Date(dbDate);
  const f = num => ('0' + num).slice(-2); // Formats numbers

  return (
    <StyledPost onClick={() => props.history.push(`/post/${id}`)}>
      <p className={'tags'}>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </p>

      <img src={image} alt={title} />
      <div className={'title-container'}>
        <h3>{title}</h3>
        <h5>
          {date.getFullYear()}/{f(date.getMonth() + 1)}/{f(date.getDate() + 1)}
        </h5>
      </div>
      <p>{truncate(content)}</p>
    </StyledPost>
  );
};

export default React.memo(withRouter(Post));
