
abstract class TakePhoto {
    constructor(
        public camera: string,
        public lens: string,
        public filter: string
    ) {}

    abstract takePhoto(): void
}



class TakePhotoWithSonyCamera extends TakePhoto {
    takePhoto() {
        console.log('Take a photo');
    }
}

const martin = new TakePhotoWithSonyCamera('Sony', '50mm', 'UV');
martin.takePhoto()

export{}