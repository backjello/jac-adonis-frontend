import { Apiservice } from "../../services/api";

async function main() {

    const api = new Apiservice()
    const user = await api.get('users/me')
    console.log(user);

    if (user.data.picture) {
        document.getElementById('profile_picture')?.setAttribute('src', user.data.picture)
    }

    document.getElementById('name')?.setAttribute('value', user.data.name)
    document.getElementById('surname')?.setAttribute('value', user.data.surname)

    document.getElementById('form')?.addEventListener('submit', async (event) => {
        event.preventDefault()
        const data = new FormData(event.target as any)

        // chiamo users/3 (users/:id)
        const res = await api.put('users/' + user.data.id, data)

        console.log(res)
    })

}

main()