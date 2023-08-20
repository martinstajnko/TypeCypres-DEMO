"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(camera, lens, filter) {
        this.camera = camera;
        this.lens = lens;
        this.filter = filter;
    }
}
class TakePhotoWithSonyCamera extends TakePhoto {
    takePhoto() {
        console.log('Take a photo');
    }
}
const martin = new TakePhotoWithSonyCamera('Sony', '50mm', 'UV');
martin.takePhoto();
