import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {

    globalThis.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    globalThis.addEventListener("online", () =>{
        setOnlineStatus(true);
    })
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
