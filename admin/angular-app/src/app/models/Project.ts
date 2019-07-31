export class Project {
    constructor(
        private id: number,
        private title: string,
        private description: string,
        private signature: string,
        private baseImage: string,
        private images: string[],
        private isLeft: boolean = true,
    ) { }
    public getId() {
        return this.id;
    }
    public getTitle() {
        return this.title;
    }
    public getDescription() {
        return this.description;
    }
    public getSignature() {
        return this.signature;
    }
    public getBaseImage() {
        return this.baseImage;
    }
    public getImages() {
        return this.images;
    }
    public getIsLeft() {
        return this.isLeft;
    }
}
