let LitElement, html, css;

import("https://esm.sh/lit").then(ex => {
    LitElement = ex.LitElement, html = ex.html, css = ex.css;
    class SearchBar extends LitElement {
        static styles = css`
        input {
            background-color: #151515;

            width: 100%;

            padding-left: var(--content-description);
            padding-right: var(--content-description);
            padding-top: var(--content-description);
            padding-bottom: var(--content-description);

            margin-right: 0.5rem;
            
            border: 3px solid #212121;
            border-radius: 5px;

            color: #f0f0f0;
            font-family: Roboto Mono;
            font-size: var(--content-description);

            user-select: none;

            transition: background-color 150ms ease-in-out, border 150ms ease-in-out;
        }

        input:hover {
            background-color: #212121;
            border: 3px solid #ff9a51;
        }

        input:focus {
            background-color: #212121;
            border: 3px solid #ff9a51;
            outline: none;
        }
        `;

        redirect(e) {
            e.preventDefault();
            const input = this.shadowRoot.children[0].children[0], path = input.value;
            location.href = `/wiki/${path}`;
        }

        render() {
            return html`
            <form @submit=${(e) => this.redirect(e)} action=".">
                <input type="search" name="text" placeholder="Search the universe..." list="popularpages" autocorrect="off" enterkeyhint="search">
                <datalist id="popularpages">
                  <option value="starship">
                  <option value="mars">
                  <option value="electron">
                  <option value="raptor">
                </datalist>
                <input type="submit" style="display: none">
            </form>
            `;
        }
    }
    customElements.get("wiki-searchbar") || customElements.define("wiki-searchbar", SearchBar);
})