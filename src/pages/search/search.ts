import { Apiservice } from "../../services/api";

async function main() {

    const api = new Apiservice()

    document.getElementById('form')?.addEventListener('submit', async (event) => {
        event.preventDefault()

        const data = new FormData(event.target as any)

        const res = await api.get('search/' + data.get('string'))

        console.log(res)
    })

}

main()