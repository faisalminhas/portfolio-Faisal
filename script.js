// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Download CV Function
// function downloadCV() {

// //     function downloadCV() {
// //     // Path to your PDF file
// //     const pdfPath = 'Faisal minhas.pdf';

// //     // Create a temporary link
// //     const a = document.createElement('a');
// //     a.href = pdfPath;
// //     a.download = 'Faisal minhas.pdf'; // The name the file will have when downloaded
// //     document.body.appendChild(a);
// //     a.click();
// //     document.body.removeChild(a);
// // }
// // //     const cvContent = `
// // // FAISAL MINHAS
// // // Frontend Developer | Data Analytics | Admin Assistant

// // // Contact Information:
// // // Phone: +92-336-3290763
// // // Email: faisalbangash3737@gmail.com
// // // Location: Islamabad, Pakistan

// // // PROFESSIONAL SUMMARY
// // // Computer Science graduate with a strong foundation in software development, algorithms, databases, and operating systems. Skilled in Frontend Web Development with hands-on experience in creating responsive, user-friendly interfaces using HTML, CSS, Bootstrap, and JavaScript. Proficient in Data Analytics and MS Office Suite, with the ability to interpret and visualize data effectively. Passionate about technology, innovation, and continuous learning. Known for excellent communication, teamwork, and adaptability, seeking to contribute to impactful IT and web development projects.

// // // SKILLS
// // // - Frontend Development: HTML, CSS, Bootstrap, JavaScript, UI/UX Design
// // // - Data Analytics: MS Excel, Power BI, SQL, Data Analytics
// // // - Soft Skills: Communication, Teamwork, Problem Solving, Adaptability, Quick Learning

// // // PROFESSIONAL EXPERIENCE

// // // P92 IT Solutions | Frontend Development Intern (3 Months)
// // // - Designed and developed responsive websites using HTML, CSS, Bootstrap, and JavaScript
// // // - Assisted in debugging, troubleshooting, and fixing front-end issues
// // // - Collaborated with senior developers on UI/UX improvements
// // // - Optimized websites for speed and cross-browser compatibility
// // // - Participated in team meetings and code reviews
// // // - Created reusable components for consistent design
// // // - Supported integration of APIs into web applications
// // // - Tested and validated website functionality across devices

// // // Japan Government Program | Web Development Trainee & Intern (Course + 2 Months)
// // // - Completed an intensive training program in HTML, CSS, Bootstrap, and JavaScript
// // // - Developed multiple mini projects applying core web concepts
// // // - Assisted in creating responsive and interactive layouts
// // // - Learned the fundamentals of frontend frameworks
// // // - Practiced cross-browser compatibility testing
// // // - Implemented basic debugging and troubleshooting methods
// // // - Worked on real-world case studies under supervision
// // // - Collaborated with other trainees on team projects

// // // EDUCATION
// // // - BS Computer Science - Kohat University of Science and Technology (KUST), 2021-2025
// // // - Diploma in Information Technology (DIT) - The Nation Center
// // // - Intermediate (F.Sc. Computer Science) - Paradise Children Academy & Model College, 2019-2021
// // // - Matriculation (Computer Science) - Paradise Children Academy, 2017-2019

// // // PERSONAL DETAILS
// // // Full Name: Faisal Minhas
// // // Father's Name: Masal Khan
// // // Date of Birth: 04 April 2004
// // // CNIC No: 14101-9388973-5
// // // Nationality: Pakistani
// // // Religion: Islam
// // // Marital Status: Unmarried

// // // HOBBIES & INTERESTS
// // // Cricket, Coding & Designing, Reading & Traveling, Watching Tech Tutorials, Learning New Technologies, Exploring Innovative Ideas, Team Sports & Fitness, Volunteering & Community Work
// // //     `;

// // //     const blob = new Blob([cvContent], { type: 'text/plain' });
// // //     const url = window.URL.createObjectURL(blob);
// // //     const a = document.createElement('a');
// // //     a.href = url;
// // //     a.download = 'Faisal_Minhas_CV.txt';
// // //     document.body.appendChild(a);
// // //     a.click();
// // //     document.body.removeChild(a);
// // //     window.URL.revokeObjectURL(url);
//  }
function downloadCV() {

    const pdfPath = 'cv/Faisal minhas.pdf'; // relative path to your PDF
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = 'cv/Faisal minhas.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


// Navbar shadow on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});