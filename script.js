document.addEventListener("DOMContentLoaded", function () {
  var weddingDate = new Date("Sep 28, 2024 16:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-timer").innerHTML =
        "get to the wedding now!";
    }
  }, 1000);

  var copyAddressButton = document.getElementById("copyAddress");
  var addressText = document.getElementById("address");

  copyAddressButton.addEventListener("click", function () {
    navigator.clipboard
      .writeText(addressText.innerText)
      .then(function () {
        // Provide visual feedback or alert the user (optional)
        alert("Address copied to clipboard: " + addressText.innerText);
      })
      .catch(function (err) {
        console.error("Unable to copy text to clipboard", err);
      });
  });
});
