document.addEventListener("DOMContentLoaded", function () {
  const angleInput = document.getElementById("angle-input");
  const angleSlider = document.getElementById("angle-slider");
  const radioButtons = document.querySelectorAll(
    '#radio-buttons input[type="radio"]'
  );

  // Update slider, radio buttons when the input changes
  angleInput.addEventListener("input", function () {
    let value = parseInt(angleInput.value);
    if (isNaN(value)) value = 0;
    value = Math.max(0, Math.min(360, value));
    angleInput.value = value;
    angleSlider.value = value;

    updateRadioButtons(value);
  });

  // Update input, radio buttons when the slider changes
  angleSlider.addEventListener("input", function () {
    const value = parseInt(angleSlider.value);
    angleInput.value = value;
    updateRadioButtons(value);
  });

  // Update input, slider when a radio button is selected
  radioButtons.forEach(function (radio) {
    radio.addEventListener("change", function () {
      const value = parseInt(radio.value);
      angleInput.value = value;
      angleSlider.value = value;
    });
  });

  // Function to update the radio buttons based on the input or slider value
  function updateRadioButtons(value) {
    radioButtons.forEach(function (radio) {
      radio.checked = parseInt(radio.value) === value;
    });
  }
});
