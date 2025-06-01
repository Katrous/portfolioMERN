<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Web Dev: Laura</title>
  <link rel="stylesheet" href="assets/styles.css"/>
  <link rel="icon" href="assets/images/LargeLrLogoSvg.svg" type="image/icon type"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@700&display=swap" rel="stylesheet"/>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://kit.fontawesome.com/4f8be11c15.js" crossorigin="anonymous"></script>
</head>
<body>

  <header class="header">
    <div class="container flex container header-container">
      <div class="navbrand">
        <a href="index.html"><img src="assets/images/LrLogoSvg.svg" alt="Logo"/></a>
      </div>
      <nav class="nav">
        <ul class="navList flex nav-menu">
          <li class="navItem nav-item"><a class="navA active" href="index.html">Home</a></li>
          <li class="navItem nav-item"><a class="navA active" href="#about">About Me</a></li>
          <li class="navItem nav-item"><a class="navA active" href="#projects">Projects</a></li>
          <li class="navItem nav-item"><a class="navA active" href="#contact">Contact Me</a></li>
          <li class="navItem nav-item"><a class="navA active" href="resume.pdf">Resume</a></li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </div>
  </header>

  <div class="header-main flex">
    <div class="headings">
      <h1>Hi, I'm Laura</h1>
      <h3>A Web Developer</h3>
      <a href="#contact">
        <button class="contactButton">Contact Me</button>
      </a>
      <div class="links">
        <a href="https://github.com/Katrous?tab=repositories"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/laura-richards-4562aa226/"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  <main>
    <div class="wrapper">

      <section id="about" class="container about-me">
        <h2 class="sectionTitle-text">About Me</h2>
        <div id="d3-container">
          <h3 class="d3Graph-header">Experience In Languages/Technologies I Know</h3>
        </div>

        <div class="d3Graph-header">
          <div class="about-met-text">
            <p>Hey There! I'm a web developer based in Perth with a passion to learn new languages and skills.</p>
            <p>I enjoy frontend and backend development. I like building things from scratch and understanding the theory behind each line of code.</p>
          </div>

          <div class="list-wrap">
            <label class="Language-cell">Languages I Speak</label>
            <ul class="lang-list">
              <li>CSS3</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>Node.js</li>
            </ul>
            <label class="dev-cell">Developer Tools</label>
            <ul class="dev-list">
              <li>Github</li>
              <li>Terminal</li>
              <li>Bootstrap</li>
              <li>Jquery</li>
              <li>Express</li>
            </ul>
          </div>

          <div class="links links-about">
            <a href="https://github.com/Katrous?tab=repositories"><i class="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/laura-richards-4562aa226/"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </section>

      <section class="projectContainer container grey-container" id="projects">
        <div class="container sectionTitle">
          <h2>Projects</h2>
        </div>

        <div class="grid desktop container photoGrid">
          <!-- Repeat this structure for each project -->
          <div class="project">
            <a href="Demo/index.html">
              <div class="project-span brown">
                <div class="project-span-text">
                  <h3>Swirlfeed</h3>
                  <p>A fully functional social media website using OOP with AJAX for smooth UX.</p>
                  <p>Languages Used: PHP, CSS3, Javascript, Jquery, HTML5</p>
                </div>
              </div>
              <img src="assets/images/swirlfeed-thumbnail.PNG" class="project-img" />
            </a>
          </div>
          
          <!-- Add other projects the same way -->

        </div>
      </section>

      <section id="contact" class="container contact">
        <h2 class="sectionTitle-text">Contact Me</h2>
        <!-- Placeholder contact form or instructions -->
        <p>If you’d like to work together or just want to say hi, feel free to reach out to me on <a href="mailto:richardslaura24@gmail.com">richardslaura24@gmail.com</a> or connect with me on LinkedIn.</p>
      </section>

    </div>
  </main>

</body>
</html>
