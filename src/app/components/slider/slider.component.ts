import {
	Component,
	ElementRef,
	ViewChild,
	ViewChildren,
	OnInit,
	AfterViewInit,
	QueryList,
	HostListener
} from '@angular/core';

import { SlideComponent } from './slide/slide.component';
import { ImageService } from './image.service';
import { DataImages } from './image';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css'],
	providers: [ImageService]
})

export class SliderComponent implements OnInit, AfterViewInit {
	constructor(
		private mySlider: ElementRef,
		private imagesService: ImageService,
	) { }

	public images: DataImages[];
	public left: any = 0;
	public widthViewport: number;
	public sliderElemLength: number;
	public slideElemWidth: number;
	public numberSlidesInViewport: number;
	public sliderModule: number;
	public positionSlider: number;
	public windowHeight: number;
	public sliderHeight: number;
	public widthAllSlider: number;
	public multiplyModuleElemWidth: number;
	public startInterval: any;
	public scrollDocument: number;

	ngOnInit(): void { }

	public ngAfterViewInit() {
		this.widthViewport = this.mySlider.nativeElement.querySelector(".slider_container").clientWidth;
		this.numberSlidesInViewport = this.widthViewport / this.slideElemWidth;
		this.sliderModule = this.sliderElemLength % this.numberSlidesInViewport;
		this.positionSlider = this.mySlider.nativeElement.querySelector(".slider_container").offsetTop;
		this.windowHeight = window.innerHeight;
		this.sliderHeight = this.mySlider.nativeElement.querySelector(".slider_container").offsetHeight;
		this.widthAllSlider = this.sliderElemLength * this.slideElemWidth;
		this.multiplyModuleElemWidth = this.slideElemWidth * this.sliderModule;
	}

	startMove() {
		this.startInterval = setInterval(() => {
			console.log("I am moving")
			this.left = this.left - this.widthViewport;
			if (this.left < -((this.widthAllSlider - this.widthViewport) - this.multiplyModuleElemWidth) &&
				this.sliderModule > 0) {
				this.left = this.left + this.widthViewport - this.multiplyModuleElemWidth;
			}
			if (this.left < -(this.widthAllSlider - this.widthViewport)) {
				this.left = 0;
			}
		}, 3000);
	}

	@HostListener("window:scroll", ["$event"]) stopMove() {
		this.scrollDocument = window.pageYOffset;
		if (this.scrollDocument < this.positionSlider - this.windowHeight +
			this.sliderHeight || this.scrollDocument > this.positionSlider + this.sliderHeight / 2) {
			if (this.startInterval) {
				clearInterval(this.startInterval);
				this.startInterval = 0;
			}
		}
		else if (!this.startInterval) {
			this.startMove();
		}
	}
}
