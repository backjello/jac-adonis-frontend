import { Apiservice } from "../../services/api";

async function main() {

    const api = new Apiservice()
    const periodicals = await api.get('periodicals')

    console.log(periodicals);

}

main()