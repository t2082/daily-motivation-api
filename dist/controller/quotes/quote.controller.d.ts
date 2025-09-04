export declare class QuoteController {
    findAll(): {
        id: number;
        author: string;
        content: string;
        tags: string[];
    }[];
    findOne(id: string): {
        id: number;
        author: string;
        content: string;
        tags: string[];
    } | {
        message: string;
    };
}
