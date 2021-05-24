import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { comicService } from "services";
import { setData } from "actions";
import { IComic, IState } from "types";
import styled from "styled-components";
import Comic from "components/comic";
import FavouriteIcon from "icons/star.svg";
import FavouritePanel from "components/favourites";
import Header from "components/header";

const Container = styled.div`
  padding-bottom: 30px;
  position: relative;
`;

const ComicsContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 24px;
`;

const App = () => {
  const dispatch = useDispatch();
  const [showFavourites, setShowFavourites] = useState(false);
  const [hasError, setError] = useState(false);
  const { data, favourites } = useSelector(
    (state: any) => state.state
  ) as IState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { data }
        } = await comicService.get(
          `comics?apikey=${process.env.REACT_APP_API_KEY}&ts=redant&hash=${process.env.REACT_APP_HASH}`
        );

        const comics: Array<IComic> = data.results;

        setError(false);
        dispatch(setData(comics));
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="App">
      <Header
        icon={FavouriteIcon}
        headerText="RED ANT COMICS"
        onClick={() => {
          setShowFavourites(true);
        }}
      />
      {hasError && <div>Something went wront, please try again</div>}
      <ComicsContainer>
        {data.length > 0 &&
          data.map((comicItem: IComic) => (
            <Comic
              key={comicItem.id}
              showActionButton
              comic={comicItem}
              isInFavouriteList={favourites.includes(comicItem.id)}
            />
          ))}
      </ComicsContainer>
      {showFavourites && (
        <FavouritePanel onClose={() => setShowFavourites(false)} />
      )}
    </Container>
  );
};

export default App;
