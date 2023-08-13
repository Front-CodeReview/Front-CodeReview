import SignUpForm from "../components/organisms/SignUpForm";

type SignUpFormPropsType = {
  setIsInLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = (props: SignUpFormPropsType) => {
  return <SignUpForm setIsInLogged={props.setIsInLogged} />;
};

export default SignUp;
