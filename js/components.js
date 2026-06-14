// NAVBAR

const navbar = `
<nav class="navbar">

    <div class="nav-container">

        <div class="logo">

            <img src="images/gss logo.png"
                 alt="GSS School Logo"
                 class="logo-img">

            <span>GSS SCHOOL</span>

        </div>

        <ul class="nav-links">

            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="admissions.html">Admissions</a></li>
            <li><a href="contact.html">Contact</a></li>

        </ul>

        <div class="right-nav">

            <button class="theme-btn">
                <i class="fas fa-moon"></i>
            </button>

            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>

        </div>

    </div>

</nav>
`;

// FOOTER

const footer = `
<footer>

    <div class="footer-container">

        <h3>GSS SCHOOL</h3>

        <p>
            Quality Education For A Better Future.
        </p>

        <div class="socials">

            <a href="https://instagram.com" target="_blank">
                Instagram
            </a>

            <a href="https://facebook.com" target="_blank">
                Facebook
            </a>

            <a href="https://youtube.com" target="_blank">
                YouTube
            </a>

        </div>

        <p style="margin-top:15px;">
            © 2026 GSS School. All Rights Reserved.
        </p>

    </div>

</footer>
`;

// INSERT COMPONENTS

const navbarContainer = document.getElementById("navbar");
const footerContainer = document.getElementById("footer");

if (navbarContainer) {
  navbarContainer.innerHTML = navbar;
}

if (footerContainer) {
  footerContainer.innerHTML = footer;
}
