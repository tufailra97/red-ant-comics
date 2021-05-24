import { addToFavourites, removeFromFavourites } from "actions";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IComic } from "types";

interface IComicProps {
  comic: IComic;
  isInFavouriteList: boolean;
  showActionButton?: boolean;
}

const Container = styled.div`
  width: 300px;
  height: auto;
  padding: 20px;
  box-shadow: 0px 1px 8px 1px #000000;
  display: flex;
  flex-direction: column;

  h2 {
    overflow: hidden;
    white-space: nowrap;

    text-align: center;
    font-size: 18px;
    font-weight: 300;
    margin: 10px 0;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const Button = styled.button`
  display: block;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  color: #fff;
  border: 0;
  background: #575757;

  &:hover {
    background: #464646;
  }
`;

const Comic: React.FC<IComicProps> = ({
  comic,
  isInFavouriteList,
  showActionButton = false
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isInFavouriteList) {
      dispatch(removeFromFavourites(comic.id));
    } else {
      dispatch(addToFavourites(comic.id));
    }
  };

  const hasImage = comic.images.length;
  return (
    <Container>
      <ImageContainer>
        {hasImage ? (
          <img
            src={`${comic.images[0].path}/portrait_uncanny.${comic.images[0].extension}`}
            alt={comic.title}
          />
        ) : (
          <div>Image not available</div>
        )}
      </ImageContainer>
      <h2>{comic.title}</h2>
      {showActionButton && (
        <Button onClick={handleClick}>
          {isInFavouriteList ? "Remove from favourites" : "Add to favourites"}
        </Button>
      )}
    </Container>
  );
};

export default Comic;
