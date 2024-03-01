import axios, { AxiosError } from "axios"

async function main() {
    document.getElementById('form')?.addEventListener('submit', async (event) => {
        event.preventDefault()
        const data = new FormData(event.target as any)
        try {
            const res = await axios.post('http://localhost:3333/login', data)
            console.log(res);
            const token = res.data.token.token // il token passato dal BE
            localStorage.setItem('TOKEN', token)
            window.location.href = "/profile.html"
        } catch (error: any) {
            const errorElement = document.getElementById('error')
            errorElement!.innerHTML = error.response.data
            console.log(error);
        }


    })
}

main()