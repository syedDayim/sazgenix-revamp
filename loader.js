// Fetch the content from the external file
fetch('../master/footer.html')
    .then(response => response.text())
    .then(data => {
        // Find the footer with class 'main-footer'
        const footer = document.querySelector('.main-footer');
        // Insert the fetched content inside the footer
        footer.innerHTML = data;
    })
    .catch(error => console.error('Error fetching footer content:', error));
console.log('Footer fetched')

// injects the topbar
fetch('../master/topbar.html')
    .then(response => response.text())
    .then(data => {
        const topbar = document.querySelector('.topbar');
        topbar.innerHTML = data;
    })
    .catch(error => console.error("Error fetching topbar content:", error));
console.log('Topbar fetched')
// Loads the header
fetch('../master/header.html')
    .then(response => response.text())
    .then(data => {
        const header = document.querySelector('.main-header');
        header.innerHTML = data;
    })
    .catch(error => console.error("Error fetching header content:", error));
    console.log('header fetched')
// loads the sticky header
fetch('../master/sticky-header.html')
    .then(response => response.text())
    .then(data => {
        const sticky = document.querySelector('.stricky-header');
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(".sticky-header__content");
        mobileNavContainer.innerHTML = navContent;
    })
    .catch(error => console.error("Error fetching header content:", error));
    console.log('sticky-header fetched')

// injected the copyright thingy
fetch('../master/copyright.html')
    .then(response => response.text())
    .then(data => {
        const copyright = document.querySelector('.copyright')
        copyright.innerHTML = data;
    })
    .catch(error => console.error("Error fetching the copyright section:", error))
    console.log('copyright fetched')


// injects the color section sazgenix image

fetch('../master/color-logo.html')
    .then(response => response.text())
    .then(data => {
        const colLogo = document.querySelectorAll('.saz-logo');
        for (item of colLogo) {
            item.innerHTML = data;
        }
    })
    .catch(error => console.error("Error fetching the logo section", error));

    console.log('color logo fetched')

// loads the preloader image
fetch('../master/preloader-image.html')
    .then(response => response.text())
    .then(data => {
        const preloader = document.querySelector('.preloader');
        preloader.innerHTML = data;
    })
    .catch(error => console.error("Error fetching the preloader", error));


    console.log('preloader fetched')

// loads the testimonial

fetch('../master/testimonials.html')
    .then(response => response.text())
    .then(data => {
        const testimonial = document.querySelector('.testimonial-one');
        testimonial.innerHTML = data;
    })
    .catch(error => console.error("Error fetching the preloader", error));

    console.log('testimonials fetched')




