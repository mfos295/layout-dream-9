// AnalyticsIntegration.js
import analytics from "@react-native-firebase/analytics";

const logScreenView = (screenName) => {
  // Log screen views for analytics
  analytics().logEvent("screen_view", { screen_name: screenName });
};

export default logScreenView;
