import axios from "axios";

async function main() {
    document.getElementById('form')?.addEventListener('submit', async (event) => {
        event.preventDefault() // non carico un'altra pagina
        const errorElement = document.getElementById('error') // prendo il blocco error
        const data = new FormData(event.target as any) // tutti i dati della form
        console.log(data.get('name')); // stampo un singolo dato ('name')
        if (data.get('password') != data.get('password_confirm')) {
            errorElement!.innerHTML = 'Attenzione le password non corrispondono!'
            return
        }
        const response = await axios.post('http://localhost:3333/users', data)
    })
}

main()