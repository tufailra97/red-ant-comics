import ComicInterface from "./comic";

export default interface StateInterface {
  data: Array<ComicInterface>;
  favourites: Array<number>;
}
