import { Injectable } from '@angular/core';

import { DataImages } from './image';
import { DATA_IMAGES } from './mock-images'

@Injectable()
export class ImageService {
	getImages(): DataImages[] {
		return DATA_IMAGES;
	}
}