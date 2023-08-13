import SignUpForm from "../components/organisms/SignUpForm";

const SignUp = () => {
  const handleRegister = () => {
    return alert("회원가입 버튼 누름");
  };
  return <SignUpForm submitRegister={handleRegister} />;
};

export default SignUp;
