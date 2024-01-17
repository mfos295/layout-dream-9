// UsabilityTestingHooks.js
import { useEffect } from "react";

const useUsabilityTesting = () => {
  useEffect(() => {
    // Log user interactions or events for usability testing
    // Example: Log screen views
    console.log("User viewed screen: HomeScreen");
  }, []);

  const logError = (error) => {
    // Log errors for debugging
    console.error("Error occurred:", error);
  };

  return { logError };
};

export default useUsabilityTesting;
