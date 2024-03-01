import { Apiservice } from "../../services/api";

async function main() {

    const api = new Apiservice()
    const periodicals = await api.get('periodicals')

    let html = ''
    periodicals.data.data.forEach((periodical: any) => {
        html += `<div>
            <h2>${periodical.title}</h2>
            <span>${periodical.type}</span> - 
            <span>prezzo: ${periodical.price}€</span>
        </div>`

        periodical.categories.forEach((cat: any) => {
            html += `
                <span>${cat.name}</span>
            `
        })
    });
    document.getElementById('periodicals')!.innerHTML = html
}

main()