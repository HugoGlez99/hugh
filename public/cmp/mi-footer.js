class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `
            <center>
            Copyright &copy;2020
             
             <li>Gonzalez Perez Hugo Alberto</li>
             </center>
            `;   
    }
}
customElements.define("mi-footer", MiFooter);

