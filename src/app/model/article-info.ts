export class ArticleInfo {
    title: string;
    image: string;
    type: string;
    author: string;
    podcast: string | null;
    date: string;

    constructor(title: string, image: string, type: string, author: string, podcast: string | null, date: string) {
        this.title = title;
        this.image = image;
        this.type = type;
        this.author = author;
        this.podcast = podcast;
        this.date = date;
    }
}
