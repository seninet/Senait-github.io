class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
     <footer>
     <div id="contact">
       <div class="footer-bar"></div>
       <div class="contact-page">
         <div class="contact-container">
           <div class="contact-box">
             <h2 class="contact-text">Contact Me</h2>
             <form>
               <div class="contact-form">
                 <label for="name">Name:</label>
                 <input id="name" name="fullname" type="text" placeholder="Your full Name" /><br /><br />
                 <label for="email">Email:</label>
                 <input id="email" name="email" placeholder="Your email" />
                 <label for="message">Message:</label>
                 <textarea id="message"></textarea>
                 <button class='contact-btn' type="button" value="Send Mail" onclick="sendMail()">Send</button>
                 <div>
                   <p id="result-text"></p>
                 </div>
               </div>
             </form>
           </div>
           <div class="icon">
             <a href="http://127.0.0.1:5503/index.html/hiding-email-addresses#unicode"></a>
             <a href="https://github.com/Senait-coding" target="_blank"><i class="fa fa-github"></i></a>
             <a href="https://www.linkedin.com/in/senait-b-86944277/" target="_blank"><i class="fa fa-linkedin"></i></a>
             <a href="https://www.instagram.com/yenejojo/"><i class="fa fa-instagram" target="_blank"></i></a>
             <a href="https://www.youtube.com/channel/UCzXfvDKpOJs6QexOd_uXP9Q" target="_blank"><i class="fa fa-youtube"></i></a>
           </div>
         </div>
       </div>
     </div>
   </footer>
   

    `;
  }
}

customElements.define('footer-component', Footer);

