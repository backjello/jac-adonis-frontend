import { Apiservice } from "../../services/api"



async function main() {
    const api = new Apiservice()
    const cats = await api.get('categories')
    const div = document.getElementById('cats')

    cats.data.forEach((cat: any) => {
        div!.innerHTML += `
            <a href="/category.html?id=${cat.id}">
                ${cat.name}
            </a><br>
        `
    })

}

main()