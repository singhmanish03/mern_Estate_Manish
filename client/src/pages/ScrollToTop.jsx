import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location.pathname]); // Trigger the effect only when the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
