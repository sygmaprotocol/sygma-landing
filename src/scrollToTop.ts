import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// restores scroll to the top of the page when clicking a Link component.

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
