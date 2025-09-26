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

            <!-- Cartoon replaces video -->
            <div class="text-video">
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
            <!-- End cartoon -->

          </div>
        </div>
      </div>
    </header>

    <style>
      /* Match old video container */
      .text-video-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .text-container {
        flex: 1;
      }
      .text-video {
        flex: 1;
        display: flex;
        justify-content: flex-end; /* cartoon on right */
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 600px; /* same as old video max */
      }

      /* Cartoon fills container like video */
      .cartoon-animation {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .desk {
        position: relative;
        width: 100%;
        aspect-ratio: 4 / 3;
        background: #acc6aa;
        border-radius: 8px;
      }

      .laptop {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 40%;
        background: #acc6aa;
        border-radius: 4px 4px 0 0;
        overflow: hidden;
      }

      .screen {
        width: 100%;
        height: 100%;
        background: #2d2d2d;
        color: #00ff00;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: monospace;
        font-size: 1rem;
        padding: 5px;
      }

      .typing {
        border-right: 2px solid #00ff00;
        white-space: nowrap;
        overflow: hidden;
        animation: blink 0.8s step-end infinite;
      }

      @keyframes blink { 50% { border-color: transparent; } }

      .character {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: float 2s ease-in-out infinite;
      }

      @keyframes float { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(-5px); } }

      .character .head {
        width: 25%;
        height: 25%;
        background: #f1c27d;
        border-radius: 50%;
        margin-bottom: 5px;
        animation: head-bob 1.5s ease-in-out infinite;
      }

      @keyframes head-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

      .character .arm-left, .character .arm-right {
        width: 25%;
        height: 8%;
        background: #5c715e;
        margin: 2px;
        transform-origin: top center;
        animation: typing 1s ease-in-out infinite;
      }
      .character .arm-left { animation-delay: 0s; }
      .character .arm-right { animation-delay: 0.5s; }

      @keyframes typing { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-15deg); } }

      .character .body {
        width: 20%;
        height: 40%;
        background: #5c715e;
        margin: 0 auto;
        border-radius: 5px;
      }

      /* Responsive like old video */
      @media screen and (max-width: 480px) {
        .text-video-container { flex-direction: column; }
        .text-video { justify-content: center; margin-top: 15px; max-width: 300px; }
        .screen { font-size: 0.8rem; }
        .character .body { width: 30%; height: 35%; }
        .character .arm-left, .character .arm-right { width: 30%; height: 8%; }
        .character .head { width: 35%; height: 20%; }
      }
    </style>

    <script>
      const codeSnippets = [
        'console.log("Hello there, I\\'m Senait!");',
        'const sum = (a, b) => a + b;',
        'function greet(name) { return \`Hi \${name}!\`; }'
      ];
      let typingText = document.getElementById('typingText');
      let snippetIndex = 0;
      let charIndex = 0;
      function typeCode() {
        const currentSnippet = codeSnippets[snippetIndex];
        typingText.textContent = currentSnippet.slice(0, charIndex + 1);
        charIndex++;
        if(charIndex < currentSnippet.length) {
          setTimeout(typeCode, 100);
        } else {
          setTimeout(() => {
            charIndex = 0;
            snippetIndex = (snippetIndex + 1) % codeSnippets.length;
            typingText.textContent = '';
            typeCode();
          }, 1500);
        }
      }
      typeCode();
    </script>
    `;
  }
}

customElements.define('home-component', Main);






