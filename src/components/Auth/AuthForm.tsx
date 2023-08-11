// Custom Hooks
import useAuthInput from "@/hooks/useAuthInput";

// Compoennts
import Input from "@/common/Input";
import Button from "@/common/Button";

const AuthForm = () => {
  const [inputValue, onChange] = useAuthInput({
    name: "",
    email: "",
    password: "",
  });
  return (
    <form>
      <Input
        type="text"
        placeholder="닉네임"
        required={true}
        name="name"
        onChange={onChange}
      />
      <Input
        type="text"
        placeholder="아이디"
        required={true}
        name="id"
        onChange={onChange}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        required={true}
        name="password"
        onChange={onChange}
      />
      <Button title="회원가입" />
    </form>
  );
};

export default AuthForm;
