import { getLocalStorageToken } from "../utils/local-storage-fn";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogined = getLocalStorageToken();
  return isLogined ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
