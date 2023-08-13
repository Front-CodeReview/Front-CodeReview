import Main from "../components/organisms/Main";

type HomePropsType = {
  setIsInLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = (props: HomePropsType) => {
  return <Main setIsInLogged={props.setIsInLogged} />;
};

export default Home;
