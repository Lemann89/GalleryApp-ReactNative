import { IPhotos } from "../models/photos";

export class HttpService {

    private readonly baseUrl: string = "https://jsonplaceholder.typicode.com/photos?_page=2&_limit=20";

    getAllPhotos(): Promise<IPhotos>{
        return fetch(this.baseUrl).then(res => res.json());
    }
}