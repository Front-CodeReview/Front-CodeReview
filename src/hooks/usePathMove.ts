import { useNavigate } from "react-router-dom";

const usePathMove = () => {
  const setMoveUrl = useNavigate();

  const pathMove = (url: string) => {
    setMoveUrl(url);
  };

  return pathMove;
};

export default usePathMove;
