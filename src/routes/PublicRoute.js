import { Navigate } from "react-router-dom";
import { getLocalStorageToken } from "../utils/local-storage-fn";

const PublicRoute = ({ children }) => {
  const isLogined = getLocalStorageToken();
  return isLogined ? <Navigate to="/todo" /> : children;
};

export default PublicRoute;
