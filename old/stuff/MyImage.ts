export default interface MyImage {
  name: string;
  left?: MyImage;
  right?: MyImage;
  above?: MyImage;
  below?: MyImage;
}