// Components
import AuthForm from "@/components/Auth/AuthForm";

interface Props {
  userLoginLogout: (prev: boolean) => void;
}

const SignUp = (props: Props) => {
  return <AuthForm userLoginLogout={props.userLoginLogout} />;
};

export default SignUp;
