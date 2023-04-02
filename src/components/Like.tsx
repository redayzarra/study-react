import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(true);

  if (status) return <AiFillHeart color="#ff6b81" size="40" onClick={() => setStatus(false)}/>;
  return <AiOutlineHeart color="#ff6b81" size="40" onClick={() => setStatus(true)}/>;
};

export default Like;
