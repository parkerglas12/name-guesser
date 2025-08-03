import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const isProd = window.location.hostname !== "localhost";

    if (isProd) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);
}

export default usePageTracking;
