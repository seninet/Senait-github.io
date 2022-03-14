class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <main>
    <div id="about">
    <div class="container2"></div>
    <div class="about-page">
        <div class="skill-container">
          <h2>About Me</h2>
        <p class="about-me">Hello, <b>I'm Senait,</b>I'm Junior web developer ,I am a creative designer and developer,I offer both design and development services of websites.</p>
          <h2 class="my-skills">Technical-Skills</h2>
          <div class="bar">
            <div class="skills html">HTML<span>85%</span></div>
          </div>
          <div class="bar">
            <div class="skills css">CSS<span>80%</span></div>
          </div>
          
          <div class="bar">
            <div class="skills js">JavaScript<span>65%</span></div>
          </div>
      
          <div class="bar">
            <div class="skills php">PHP<span>60%</span></div>
          </div>
    
          <div class="bar">
            <div class="skills node">Node.js<span>75%</span></div>
          </div>
        
          <div class="bar">
            <div class="skills vue">Vue.js<span>65%</span></div>
          </div>
      
          <div class="bar">
            <div class="skills mongo">MongoDB<span>65%</span></div>
          </div>
          
          <div class="bar">
            <div class="skills sql">SQL<span>65%</span></div>
          </div>
  
          <div class="bar">
            <div class="skills github">Github<span>90%</span></div>
          </div>
      
          <div class="bar">
            <div class="skills git">GIT<span>75%</span></div>
          </div>
        </div>
          </div>
        </div>
      </div>
  <script>
  let htm = function(){
      document.querySelector(".html").className = "html1";
  };
  let css = function(){
      document.querySelector(".css").className = "css1";
  };
  let js = function(){
  document.querySelector(".js").className = "js1";	
  };
  let php = function(){
  document.querySelector(".php").className = "php1";	
  };
  
  let node = function(){
  document.querySelector(".node").className = "node1";	
  };
  let vue = function(){
  document.querySelector(".vue").className = "vue1";	
  };
  let mongo = function(){
  document.querySelector(".mongo").className = "mongo1";	
  };
  let sql = function(){
  document.querySelector(".sql").className = "sql1";	
  };
  let github = function(){
  document.querySelector(".github").className = "github1";	
  };
  var gi = function(){
  document.querySelector(".git").className = "git1";	
  };
  setTimeout(htm,4000);
  setTimeout(css,3000);
  setTimeout(js,2000);
  setTimeout(php,1500);
  setTimeout(node,1800);
  setTimeout(vue,1500);
  setTimeout(mongo,1800);
  setTimeout(sql,1500);
  setTimeout(github,5000);
  setTimeout(gi,2500);
  
  
  </script>
  </main>
    `;
  }
}

customElements.define('about-component', Header);



