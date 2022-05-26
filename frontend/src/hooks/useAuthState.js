import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function useAuthState() {
  const [logedIn, setLogedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      setLogedIn(true);
    }
    setLoading(false);
  }, [user]);

  return [logedIn, loading];
}

export default useAuthState;
