// Wait until page is loaded
window.onload = function() {
  var newsletterForm = document.getElementById("newsletterForm");

  // On newsletter form submit
  newsletterForm.onsubmit = function(event) {
    event.preventDefault(); // Prevent form refresh

    var email = document.getElementById("newsletterEmail").value;

    if (email) {
      alert("Thank you for subscribing! We'll keep you posted.");
      newsletterForm.reset();
    } else {
      alert("Please enter a valid email.");
    }
  };
};
