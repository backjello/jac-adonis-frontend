import axios from "axios"

export class Apiservice {

    private instance

    constructor() {
        this.instance = axios.create({
            baseURL: "http://localhost:3333/",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('TOKEN')
            }
        })
    }

    public async post(url: string, data: any) {
        return this.instance.post(url, data)
    }

    // aggiornamento - update
    public async put(url: string, data: any) {
        return this.instance.put(url, data)
    }


    public async get(url: string) {
        return this.instance.get(url)
    }

    public async delete(url: string, id: number | string) {
        return this.instance.delete(url + "/" + id)
    }



}