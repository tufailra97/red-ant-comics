import { useSelector } from "react-redux";
import { IComic, IState } from "types";
import styled from "styled-components";
import Comic from "components/comic";
import Header from "components/header";
import CloseIcon from "icons/close.svg";

const Container = styled.div`
  width: 80%;
  height: 80%;
  position: fixed;
  padding-bottom: 50px;
  top: 50%;
  left: 50%;
  background-color: white;
  justify-content: flex-end;
  transform: translate(-50%, -50%);
  overflow: scroll;
  overflow-x: hidden;
  box-shadow: 0px 1px 8px 1px #000000;
`;

const ComicsContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

interface IComicProps {
  onClose: () => void;
}

const FavouritePanel: React.FC<IComicProps> = ({ onClose }) => {
  const { data, favourites } = useSelector(
    (state: any) => state.state
  ) as IState;

  return (
    <Container>
      <Header headerText="Favourites" onClick={onClose} icon={CloseIcon} />
      <ComicsContainer>
        {favourites.length ? (
          data
            .filter((comicItem) => favourites.includes(comicItem.id))
            .map((comicItem: IComic) => (
              <Comic
                key={comicItem.id}
                comic={comicItem}
                showActionButton
                isInFavouriteList={favourites.includes(comicItem.id)}
              />
            ))
        ) : (
          <div>Nothing to show</div>
        )}
      </ComicsContainer>
    </Container>
  );
};

export default FavouritePanel;
