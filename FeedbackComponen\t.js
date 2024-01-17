// FeedbackComponent.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState("");

  const submitFeedback = () => {
    // Send feedback to a server or analytics service
    // Include user comments, device information, and app version
    Alert.alert("Feedback Submitted", "Thank you for your feedback!");
  };

  return (
    <View>
      <Text>Please share your thoughts:</Text>
      <TextInput
        multiline
        numberOfLines={4}
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
      />
      <Button title="Submit Feedback" onPress={submitFeedback} />
    </View>
  );
};

export default FeedbackComponent;
