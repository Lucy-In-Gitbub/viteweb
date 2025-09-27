class Post {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public status: string,
    ) {}
}
interface Postinterface {
    id: number;
    title: string;
    content: string;
    status: string;
}
export  {
    Post,
};
export type {
    Postinterface,
};