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
                <a href="./index.html">Home</a>
              </div>
            </nav>
          </header>

          <div class="text-video-container">
            <div class="text-container">
              <h1>Hi, I'm Senait</h1>
              <p>Junior Web developer</p>
              <button>know more about me</button>
              <div class="icon-bar">
                <a href="https://github.com/seninet" target="_blank"><i class="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/in/senait-b-86944277/" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="https://www.instagram.com/yenejojo/" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCzXfvDKpOJs6QexOd_uXP9Q" target="_blank"><i class="fa fa-youtube"></i></a>
              </div>
            </div>

            <div class="text-video">
              <!-- Cartoon Animation replacing video -->
              <div class="cartoon-animation">
                <div class="desk">
                  <div class="laptop">
                    <div class="screen">
                      <span class="typing" id="typingText"></span>
                    </div>
                  </div>
                  <div class="character">
                    <div class="head">
                      <div class="eye left"></div>
                      <div class="eye right"></div>
                    </div>
                    <div class="arms">
                      <div class="arm-left"></div>
                      <div class="arm-right"></div>
                    </div>
                    <div class="body"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>

    <style>
      /* (same CSS as before, no change) */
    </style>
    `;
    
    // ✅ Typing effect logic moved here (outside innerHTML)
    const codeSnippets = [
      'console.log("Hello there, I\\'m Senait!");',
      'const sum = (a, b) => a + b;',
      'function greet(name) { return \`Hi \${name}!\`; }'
    ];

    const typingText = this.querySelector('#typingText');
    let snippetIndex = 0;
    let charIndex = 0;

    const typeCode = () => {
      const currentSnippet = codeSnippets[snippetIndex];
      typingText.textContent = currentSnippet.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex < currentSnippet.length) {
        setTimeout(typeCode, 100);
      } else {
        setTimeout(() => {
          charIndex = 0;
          snippetIndex = (snippetIndex + 1) % codeSnippets.length;
          typingText.textContent = '';
          typeCode();
        }, 1500);
      }
    };

    typeCode();
  }
}

customElements.define('home-component', Main);






