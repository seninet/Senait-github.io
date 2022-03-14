class Aside extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <aside>
    <div id="projects">
      <div class="container3"></div>
      <div class="project-page">
        <div class="project-container">
          <div class="project-text">
            <h1>Projects</h1>
            "Behelp" as a final project for my study in "Hack Your Future Belgium" me and my class mates have created a platform that connects
            refugees and asylum seekers to volunteers.<br><br>
            <button onclick="window.location.href= 'https://behelp.herokuapp.com/'" ; class="project-btn">Check Demo</button>
            <button onclick="window.location.href='https://github.com/BeHelp/BeHelp'" ; class="project-btn">Github repo</button>
          </div>
          <div>
            <div class="slideshow-container2">
                <video autoplay muted loop>
                  <source src="./planning/BeHelp P (online-video-cutter.com) (1).mp4">
                  Your browser does not support HTML5 video.
                </video>
                </div>
       </div>
      </aside>

    `;
  }
}

customElements.define('project-component', Aside);






