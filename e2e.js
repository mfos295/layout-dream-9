// e2e/DreamApp.e2e.js
const { device, expect, element, by } = require("detox");

describe("Dream AI App", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should allow the user to input a dream and generate content", async () => {
    // Find the input field and enter a dream
    await element(by.id("dream-input")).typeText("Test Dream Input");

    // Tap the "Generate" button
    await element(by.id("generate-button")).tap();

    // Wait for the generated content to appear
    await expect(element(by.id("dream-content"))).toBeVisible();
  });

  it("should display an error message for invalid input", async () => {
    // Find the input field and enter an invalid input
    await element(by.id("dream-input")).typeText("");

    // Tap the "Generate" button
    await element(by.id("generate-button")).tap();

    // Wait for the error message to appear
    await expect(element(by.id("error-message"))).toBeVisible();
  });
});
