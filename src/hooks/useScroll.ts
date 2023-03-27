import { useCallback, useEffect, useState } from "react";

const useScroll = (threshold: number = 100) => {
  const [show, setShow] = useState(false);
  const controlNavbar = useCallback(() => {
    if (window.scrollY > threshold) setShow(true);
    else setShow(false);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);
  return show;
};

export default useScroll;
