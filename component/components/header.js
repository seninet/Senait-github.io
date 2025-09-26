class Nav extends HTMLElement {
  constructor() {
    super();

    
  }

  connectedCallback() {
    this.innerHTML = `
    
    <nav>
    <a class="logo"></a>
    <div class="nav-bar">
      <a href="./contact.html">Contact</a>
      <a href="./project.html">Project</a>
      <a href="./about.html">About</a>
      <a href="./index.html">Home</a>
    </div>
  </nav>
    `;
  }
}

customElements.define('header-component', Nav);




