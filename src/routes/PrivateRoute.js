import { Navigate } from "react-router-dom";
import { getLocalStorageToken } from "../utils/local-storage-fn";

const PrivateRoute = ({ children }) => {
  const isLogined = getLocalStorageToken();
  if (!isLogined) alert("유효한 토큰이 아닙니다.");
  return isLogined ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
