let LitElement, html, css;

import("https://esm.sh/lit").then(ex => {
    LitElement = ex.LitElement, html = ex.html, css = ex.css;
    class Menu extends LitElement {
        static properties = {
            links: {}
        }

        static styles = css`
        #menu-toggle {
            user-select: none;

            position: absolute;
            top: 50%;
            right: 1.25rem;
            transform: translateY(-50%);
            z-index: 2;

            cursor: pointer;
        }

        #menu-close {
            visibility: hidden;

            opacity: 0%;
            transition: opacity 150ms ease-in-out;

            width: 100%;
            height: 100%;

            position: fixed;
            left: 0;
            top: 0;
            z-index: 0;
        }

        #menu {
            position: inherit;
            top: 0;
            right: 0;
            z-index: 1;
        }

        #menu-content {
            visibility: hidden;
            opacity: 0%;
            transition: opacity 150ms ease-in-out;

            width: min-content;
            height: min-content;

            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15), -3px 3px 3px rgba(0, 0, 0, 0.15);
            border-radius: 5px;

            position: absolute;
            top: 75%;
            right: 1.25rem;
            z-index: 1;

            background-color: #212121;
        }

        #menu-links {
            margin-top: 1rem;
            margin-bottom: 1rem;
            margin-left: 1.5rem;
            margin-right: 1.5rem;

            text-align: left;
        }

        #menu-links div {
            margin-bottom: 0.75rem;
        }

        #menu-links a {
            user-select: none;
            
            text-decoration: none;
            color: #f0f0f0;
            font-size: var(--menu-link);

            z-index: 2;

            cursor: pointer;

            transition: color 200ms ease-in-out;

            font-family: Inter;
        }

        #menu-content a:hover {
            color: #ff9a51;
        }

        .menu-content-bottom {
            position: absolute;
            right: 0;
            bottom: 0;
        }

        #menu-content hr {
            border: none;
            height: 2px;
            background-color: #424242;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }

        @media only screen and (orientation: landscape) and (max-width: 1000px) {
            :host {
                --menu-link: 1.5rem;

                --content-catchphrase: 2.5rem;
                --content-description: 1rem;
                --tagline: 0.75rem;
            }

            #logo {
                height: 65%;
            }

            #menu-toggle {
                height: 40%;
            }
        }

        @media only screen and (orientation: portrait) and (max-width: 1000px) {
            :host {
                --menu-link: 1.5rem;
                --menu-width: 5rem;
                --menu-height: 5rem;

                --content-catchphrase: 2.5rem;
                --content-description: 1rem;
                --tagline: 0.75rem;
            }

            #logo {
                height: 65%;
            }

            #menu-toggle {
                height: 50%;
            }
        }

        @media only screen and (orientation: landscape) and (min-width: 1000px) {
            :host {
                --menu-link: 1.5rem;
                --menu-width: 5rem;
                --menu-height: 5rem;
                
                --content-catchphrase: 4rem;
                --content-description: 1.5rem;
                --tagline: 1.25rem;
            }

            #logo {
                height: 50%;
            }

            #menu-toggle {
                height: 40%;
            }
        }
        `;

        constructor() {
            super();
            this.open = false;
        }


        // var menu_close = document.getElementById("menu-close");
        // var menu = document.getElementById("menu");
        // var menu_content = document.getElementById("menu-content");

        toggleMenu() {
            const menu = this.shadowRoot.children[0].children[1];
            const menu_close = menu.children[0];
            const menu_content = menu.children[1];
            this.open = !this.open;
            if(this.open) {
                menu_content.style.visibility = "visible";
                setTimeout(() => { menu_content.style.opacity = "100%" }, 150);
                menu_close.style.visibility = "visible";
                menu_close.style.opacity = "100%";
            } else {
                setTimeout(() => { menu_content.style.visibility = "hidden" }, 50);
                menu_content.style.opacity = "0%";
                setTimeout(() => { menu_close.style.visibility = "hidden" }, 150);
                menu_close.style.opacity = "0%";
            }
        }

        closeMenu() {
            if(this.open) {
                this.toggleMenu();
            }
        }

        render() {
            return html`
            <div class="menu">
                <img id="menu-toggle" src="/bin/more_vert_white_48dp.svg" draggable="false" @click=${this.toggleMenu}/>
                <div id="menu">
                    <div id="menu-close" @click=${this.closeMenu}></div>
                    <div id="menu-content">
                        <div id="menu-links">
                            <div><a href="/">Home</a></div>
                            <div><a href="/launches">Launches</a></div>
                            <div><a href="/streams">Streams</a></div>
                            <div><a href="/wiki">Wiki</a></div>
                            <div><a href="/about">About</a></div>
                            <hr/>
                            <div><a href="https://github.com/jordanreger/LTX">Github</a></div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    }
    customElements.get("ltx-menu") || customElements.define("ltx-menu", Menu);
})