export default interface ComicInterface {
  id: number;
  title: string;
  description: string;
  images: Array<{
    path: string;
    extension: string;
  }>;
}
