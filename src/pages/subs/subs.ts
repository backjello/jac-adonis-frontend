import { Apiservice } from "../../services/api";

async function main() {
    const api = new Apiservice()
    const subs = await api.get('subscriptions')
    console.log(subs);

    const div = document.getElementById('subs')

    if (div) {
        div.innerHTML = ''
    }

    subs.data.data.forEach((sub: any) => {
        let html = `
            <div>
                <h3>${sub.periodical.title}</h3>
                <div>${sub.periodical.type} - ${sub.periodical.price}€ </div>
                <div>
                    Abbonamento ${sub.duration}
                    <button style="background:red" onclick="deleteSub(${sub.id})">
                        Cancella abbonamento
                    </button>
                </div>
            </div>
        `
        div!.innerHTML += html
    })

}

main()

async function deleteSub(id: number) {
    const api = new Apiservice()
    await api.delete('subscriptions', id)
    await main()
}