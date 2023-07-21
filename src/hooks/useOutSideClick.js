import { useEffect, useRef } from "react";

function useOutSideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    // the third argument -true-  is because to make it capturing, not bubbling.
    //on bubbling modal will open but close immediately since the close will call
    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutSideClick;
