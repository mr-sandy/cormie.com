import { NextPage } from 'next';
import { Menu } from '../components/Menu';


const Home: NextPage = () => {
  return (
    <>
      <style global jsx>{`
body {
  background-image: url(./sandy.jpg);
  background-size: cover;
}`}</style>
      <Menu />
      <h1>hello</h1>
    </>
  );
}
export default Home;