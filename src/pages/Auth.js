import { useState } from "react";
import { SIGN_UP } from "../utils/constants";

function Auth() {
  const [signState, setSignState] = useState(SIGN_UP);

  return <div>Auth</div>;
}

export default Auth;
