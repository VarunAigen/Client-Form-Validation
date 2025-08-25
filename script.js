document.getElementById("rotaractForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let isValid = true;

  // Full Name
  const name = document.getElementById("fullname").value.trim();
  if(!/^[A-Za-z ]{4,}$/.test(name)) {
    document.getElementById("nameError").textContent = "Name must be at least 4 letters.";
    isValid = false;
  } else { document.getElementById("nameError").textContent = ""; }

  // Email (KPRIET or personal)
  const email = document.getElementById("email").value.trim();
  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  } else { document.getElementById("emailError").textContent = ""; }

  // Phone
  const phone = document.getElementById("phone").value.trim();
  if(!/^(\+91-)?[6-9]\d{9}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Enter valid phone number.";
    isValid = false;
  } else { document.getElementById("phoneError").textContent = ""; }

  // ZIP
  const zip = document.getElementById("zip").value.trim();
  if(!/^\d{6}$/.test(zip)) {
    document.getElementById("zipError").textContent = "ZIP code must be 6 digits.";
    isValid = false;
  } else { document.getElementById("zipError").textContent = ""; }

  // DOB (18+)
  const dob = document.getElementById("dob").value;
  if(dob) {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if(age < 18) {
      document.getElementById("dobError").textContent = "Age must be at least 18.";
      isValid = false;
    } else { document.getElementById("dobError").textContent = ""; }
  } else {
    document.getElementById("dobError").textContent = "Select your DOB.";
    isValid = false;
  }

  // Password
  const password = document.getElementById("password").value;
  if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
    document.getElementById("passwordError").textContent = "Weak password.";
    isValid = false;
  } else { document.getElementById("passwordError").textContent = ""; }

  // Confirm Password
  const confirmPassword = document.getElementById("confirmPassword").value;
  if(password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "Passwords do not match.";
    isValid = false;
  } else { document.getElementById("confirmError").textContent = ""; }

  // Gender
  const gender = document.querySelector('input[name="gender"]:checked');
  if(!gender) {
    document.getElementById("genderError").textContent = "Select gender.";
    isValid = false;
  } else { document.getElementById("genderError").textContent = ""; }

  // Department
  if(document.getElementById("dept").value === "") {
    document.getElementById("deptError").textContent = "Select department.";
    isValid = false;
  } else { document.getElementById("deptError").textContent = ""; }

  // Year
  if(document.getElementById("year").value === "") {
    document.getElementById("yearError").textContent = "Select year.";
    isValid = false;
  } else { document.getElementById("yearError").textContent = ""; }

  // Domains
  const domains = document.querySelectorAll('input[name="domain"]:checked');
  if(domains.length === 0) {
    document.getElementById("domainError").textContent = "Select at least one domain.";
    isValid = false;
  } else { document.getElementById("domainError").textContent = ""; }

  // Terms
  if(!document.getElementById("terms").checked) {
    document.getElementById("termsError").textContent = "You must agree to terms.";
    isValid = false;
  } else { document.getElementById("termsError").textContent = ""; }

  // Success
  if(isValid) {
    document.getElementById("successMsg").textContent = "Registration Successful!";
    this.reset();
  } else {
    document.getElementById("successMsg").textContent = "";
  }
});
