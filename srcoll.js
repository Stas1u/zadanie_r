document.body.onwheel = e =>{
    const d = window.getComputedStyle(document.querySelector(".nav-link")).getPropertyValue("display")

    if(d !== "none")
        document.body.style["overflow"] = (changeNav(e), "hidden")
    else
        document.body.style["overflow"] = "auto"    //żeby zawortość strony nie uciakała
}


//przesuwa elementy znajdujące się w .nav
async function changeNav(e){
    const site = e.deltaY > 0? "first": "last"
    const parent = document.querySelector(".nav")
    const el = document.querySelector(`.nav-item:${site}-of-type`)

    el.remove()
    parent[site === "first"? "appendChild": "prepend"](el)
}