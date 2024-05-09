# Wiki
Welcome to ltxwiki! Take a look at a few of the latest entries:

<ul id="entries"></ul>

<script>
    let entries = document.getElementById("entries");
    fetch("https://api.github.com/repos/jordanreger/ltx/contents/wiki").then(response => response.json()).then((res) => {
        for(const md in res){
            const name = res[md].name.replace(".md", "");
            if(name !== "test"){
                entries.innerHTML += `<li><a href="/wiki/${name}">${name[0].toUpperCase() + name.slice(1)}</a></li>`;
            }
        }
    })
</script>

<br/>

# Contribute
Take a look at the <a href="https://github.com/jordanreger/ltx#contribute">contribution guide</a>!