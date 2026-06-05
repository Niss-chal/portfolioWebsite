const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 110;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }

      const subject = encodeURIComponent("Portfolio Message from " + name);
      const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
      window.location.href = "mailto:niachaldahal2062@gmail.com?subject=" + subject + "&body=" + body;
      contactForm.reset();
    });
