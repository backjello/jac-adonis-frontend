import { Apiservice } from "../../services/api";

async function main() {
    const url = new URLSearchParams(window.location.search)
    const catId = url.get('id')
    console.log(catId);

    const api = new Apiservice()
    const cat = await api.get('categories/' + catId)

    document.getElementById('categoryName')!.innerHTML = cat.data.name

    const div = document.getElementById('periodicals')

    cat.data.periodicals.forEach((per: any) => {
        div!.innerHTML += `
            <a href="/periodical.html?id=${per.id}">
                <div>
                    <h3>${per.title}</h3>
                    <div>
                        ${per.type} - ${per.price}€
                    </div>
                </div>
            </a>
        `
    })


}

main()