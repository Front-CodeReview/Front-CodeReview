interface DBtype {
  name: string;
  email: string;
  password: string;
  tel: string;
}

const inquireEmailValue = (email: string) => {
  const db = localStorage.getItem("join");
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // 정규 표현식을 사용하여 이메일 형식 검사
  if (!isEmail) return alert("이메일 형식이 올바르지 않습니다.");
  if (db) {
    const dbData = JSON.parse(db);
    const isDuplicate = dbData.some((data: DBtype) => data.email === email);
    if (isDuplicate) return alert("중복된 이메일이 있습니다.");
  }
  return alert("사용가능한 이메일 입니다.");
};
export default inquireEmailValue;
