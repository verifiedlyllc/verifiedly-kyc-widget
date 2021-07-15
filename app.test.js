const template = document.createElement('template')

template.innerHTML=`

  <script  crossorigin="anonymous"  src="https://res.cloudinary.com/verifiedly/raw/upload/v1625849805/webcam_u5dmbv.js"></script>
 
</body>

</html>
`


Webcam.set({
    height: -1,
    width: -1,
    constraints:{
      width: 1000,
      height: 1000
    },
  
  })
  WebCam.attach('#my_camera');



class VerifiedlyKYC extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));


        
    }
    connectedCallback () {
        this.render()            
    
    }

}

customElements.define("verifiedly-kycbtn", VerifiedlyKYC)