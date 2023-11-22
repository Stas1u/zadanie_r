function getData(el, search){     //pobiera dane z atrybutów wskazanego elementu
    const data = Object.create(null)

    for(const name of search)
        data[name] = el.getAttribute(name) ?? "none"

    return data
}

class Pakiet extends HTMLElement{
    constructor(){
        super()

        this.classList.add("card", "rounded-0", "mx-auto")
        this.addContent()

    }
    addContent(){
        const { price, type} = getData(this, ["price", "type"])
        const type_fs = type.length <= 10? 5: "6 fw-bolder"
        this.innerHTML += `
            <div class="card-body d-flex flex-column justify-content-center">
                <div class="pakiet-num h6 text-center mb-1 fw-bold text-uppercase">pakiet</div>
                <div class="h2 text-center fw-normal	border-bottom border-bottom-1 border-bottom-dark py-1">
                    ${price}<sup>zł</sup>
                </div>
                <div class="h${type_fs} text-uppercase text-center my-3">
                    ${type}
                </div>
                <button class="btn border border-2 border-dark rounded-0 w-100 fs-6" >Rejestracja</button>
            </div>
        `
    }

}
class NavItem extends HTMLElement{
    constructor(){
        super()

        this.classList.add("nav-item", "d-flex")
        this.addContent()
    }
    addContent(){
        const {title, icon, link} = getData(this, ["icon", "link", "title"])
        this.innerHTML = `
            <div class="nav-icon">
                <img src="icons/${icon}.png" alt="${icon}_icon" class="img">
            </div>
            <div class="nav-link text-light fs-6 text-uppercase align-items-center">${title}</div>
        `
    }
}

customElements.define('custom-pakiet', Pakiet)
customElements.define("nav-element", NavItem)
