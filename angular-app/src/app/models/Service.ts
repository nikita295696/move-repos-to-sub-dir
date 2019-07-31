export class Service {
    constructor(
        private id: number,
        private title: string,
        private description: string,
        private price: number,
        private baseImage: string,
        private allImages: string[],
        private signature: string = '',
        private  isImage: boolean = true
    ) { }
    public getId() {
        return this.id;
    }
    public getTitle() {
        return this.title;
    }
    public getHtmTitle() {
        let stripText =  this.title ? String(this.title).replace(/<[^>]+>/gm, '') : '';
        const regex = /(?<bold>[[a-zA-Zа-яА-Я])(?<txt1>[a-zA-Zа-яА-Я]+)(\-| )(?<txt2>.+)/gm;
        const result = regex.exec(stripText).groups;
        if (result) {
            return '<span class="service__letter">' + result.bold + '</span>' + result.txt1 + ' <br> <span class="service__word">' + result.txt2 + '</span>';
        }
        return '';
    }
    public getDescription() {
        return this.description;
    }
    public getPrice() {
        return this.price;
    }
    public getBaseImage() {
        return this.getIsImage() ? '<img src="' + this.baseImage + '">' : this.baseImage;
    }
    public getAllImages() {
        return this.allImages;
    }
    public getSignature() {
        return this.signature;
    }
    public getIsImage() {
        return this.isImage;
    }
}
