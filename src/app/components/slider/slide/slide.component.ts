import { 
	Component, 
	OnInit, 
	Input, 
	SimpleChanges, 
	AfterViewInit, 
	Output, 
	ElementRef, 
	EventEmitter,
	ViewChildren,
	QueryList
} from '@angular/core';

import { DataImages } from './../image';
import { ImageService } from './../image.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit, AfterViewInit {
	@Input() left: number;
	@Output() widthSlide = new EventEmitter<number>()
	@Output() slidesLength = new EventEmitter<number>()
	
	@ViewChildren('mySlide') mySlideElem: QueryList<any>;

	private images: DataImages[];
	private slideElemWidth: number;
	private slideElemLength: number;
	

	constructor(
		private imgSrv: ImageService,
		private elRef: ElementRef ){}


  ngOnInit() {
		this.images = this.imgSrv.getImages();
		
	}
	
	ngAfterViewInit(){
		this.slideElemWidth = this.mySlideElem.toArray()[0].nativeElement.clientWidth;
		this.slideElemLength = this.mySlideElem.length;
		
		this.widthSlide.emit(this.slideElemWidth);
		this.slidesLength.emit(this.slideElemLength);
		
		console.log(this.slideElemLength)

	}
}