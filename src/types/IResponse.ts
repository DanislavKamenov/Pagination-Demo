import IDocument from "./IDocument";

export default interface IResponse {
    response: {
        docs: Array<IDocument>,
        numFound: number,
        start: number,
    }
}