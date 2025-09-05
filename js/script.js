// Example: Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dashboard section toggle
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Donation form simulation
const donationForm = document.getElementById("donationForm");
if (donationForm) {
  donationForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    const method = document.getElementById("payment-method").value;

    if (amount && method) {
      document.getElementById("thankMsg").innerText = 
        `🎉 Thank you for donating ₹${amount} via ${method.toUpperCase()}! Your support means a lot.`;
      donationForm.reset();
    }
  });
}

// Join Teacher simulation
function joinTeacher(subject) {
  document.getElementById("joinMsg").innerText = 
    `✅ You have successfully joined a ${subject} session! A teacher-student will connect with you soon.`;
}

// Download Certificate (basic simulation)
function downloadCertificate() {
  alert("📜 Your certificate is being prepared for download! (Feature to be connected later with PDF generator)");
}

// Review System
function submitReview(event) {
  event.preventDefault();
  
  const teacher = document.getElementById("teacher").value;
  const rating = document.getElementById("rating").value;
  const feedback = document.getElementById("feedback").value;

  const reviewsList = document.getElementById("reviewsList");
  
  const reviewEntry = document.createElement("div");
  reviewEntry.classList.add("review-entry");
  reviewEntry.innerHTML = `<p><strong>${teacher}</strong> rated <strong>${rating}⭐</strong></p>
                           <p>${feedback}</p>
                           <hr>`;
  
  reviewsList.appendChild(reviewEntry);

  document.querySelector(".review-form").reset();
}
