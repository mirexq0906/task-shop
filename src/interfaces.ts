interface productInterface {
  id: number;
  img: string;
  title: string;
  count: number;
  price: number;
  oldPrice: number;
}
interface sortInterface {
  [key: string]: string;
}
export { productInterface, sortInterface };
