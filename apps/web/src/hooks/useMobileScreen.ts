import { useEffect, useState } from "react";

export function useWindowSize() {
  // Initialize a default size, adjust as needed
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Ensure the code runs on the client side
    if (typeof window !== 'undefined') {
      // Define the resize function
      const onResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener('resize', onResize);

      // Update the size immediately
      onResize();

      // Clean up the event listener
      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  return size;
}

export const MOBILE_MAX_WIDTH = 600;
export function useMobileScreen() {
  const { width } = useWindowSize();

  return width <= MOBILE_MAX_WIDTH;
}
