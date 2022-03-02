export class Article{
    constructor(
        public _id:string,
        public title:string,
        public category:string,
        public date :string,        
        public subInfo:string,
        public content:string,
        public url:string
    ){}
}