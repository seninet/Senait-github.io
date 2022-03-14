class Main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
    <div id="home">
      <div class="side-bar"></div>
      <div class="home-page">
          <header> 
              <nav>
              <a class="logo"></a>
              <div class="nav-bar">
                <a href="./contact.html">Contact</a>
                <a href="./project.html">Project</a>
                <a href="./about.html">About</a>
                <a href="./home.html">Home</a>
              </div>
            </nav>
            </header>
        <div class="text-video-container">
          <div class="text-container">
            <h1>Hi,I'm Senait</h1>
            <p>Junior Web developer</p>
            <button>know more about me</button>
            <div class="icon-bar">
              <a href="https://github.com/Senait-coding" target="_blank"><i class="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/senait-b-86944277/" target="_blank"><i class="fa fa-linkedin"></i></a>
              <a href="https://www.instagram.com/yenejojo/"><i class="fa fa-instagram" target="_blank"></i></a>
              <a href="https://www.youtube.com/channel/UCzXfvDKpOJs6QexOd_uXP9Q" target="_blank"><i class="fa fa-youtube"></i></a>
            </div>
          </div>
          <div class="text-video">
            <video autoplay muted loop class="myVideo">
              <source src="./planning/pexels-ekaterina-bolovtsova-7296051 (online-video-cutter.com) (1).mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
  </header>

    `;
  }
}

customElements.define('home-component', Main);





