interface ValueType {
  name: string;
  email: string;
  password: string;
  password2: string;
  tel: string;
}

const validateInputValue = (value: ValueType) => {
  const { name, email, password, password2, tel } = value;
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // 정규 표현식을 사용하여 이메일 형식 검사
  const isTel = /^[0-9\b -]{0,13}$/.test(tel); // 정규 표현식을 사용하여 휴대폰 형식 검사
  const isPassword = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password); // 정규 표현식을 사용하여 특수문자 검사

  if (name.length < 2) return alert("닉네임 길이가 작습니다.");
  if (!isEmail) return alert("이메일 형식이 올바르지 않습니다.");
  if (password !== password2)
    return alert("비밀번호가 서로 동일하지 않습니다.");
  if (!isPassword) return alert("비밀번호에 특수문자가 들어가야 합니다.");
  if (!isTel) return alert("핸드폰 번호 형식이 아닙니다.");
  return true;
};

export default validateInputValue;
