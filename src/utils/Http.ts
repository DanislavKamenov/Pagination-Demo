import config from '../config/index';

export default class Http {
    async getData<T>(type: string, start: number, rows: number): Promise<T> {
        const url = `${config.BASE_URL}?q=${type}&start=${start}&rows=${rows}`;

        return this.request(url);
    }

    private async request(url: string) {
        const response = await fetch(url);
        return await response.json();
    }
}