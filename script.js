// Loan Calculator
function calculateEMI() {
  const principal = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const tenure = parseInt(document.getElementById('tenure').value);

  if (!principal || !rate || !tenure) {
    document.getElementById('result').innerText = "Please fill all fields!";
    return;
  }

  const emi = (principal * rate * Math.pow(1 + rate, tenure)) /
              (Math.pow(1 + rate, tenure) - 1);

  document.getElementById('result').innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
}

// EmailJS Integration
(function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      document.getElementById('form-msg').innerText = "Message sent to ppcrahul2412@gmail.com!";
    }, function(error) {
      document.getElementById('form-msg').innerText = "Failed to send. Please try again.";
      console.error('FAILED...', error);
    });
});
