"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var IMAGES = [
    { imgSrc: 'img/images_1.jpg', imgTitle: 'Slide_1' },
    { imgSrc: 'img/images_2.jpg', imgTitle: 'Slide_2' },
    { imgSrc: 'img/images_3.jpg', imgTitle: 'Slide_3' },
    { imgSrc: 'img/images_4.jpg', imgTitle: 'Slide_4' },
    { imgSrc: 'img/images_5.jpg', imgTitle: 'Slide_5' },
    { imgSrc: 'img/images_6.jpg', imgTitle: 'Slide_6' },
    { imgSrc: 'img/images_7.jpg', imgTitle: 'Slide_7' },
    { imgSrc: 'img/images_8.jpg', imgTitle: 'Slide_8' },
    { imgSrc: 'img/images_9.jpg', imgTitle: 'Slide_9' }
];
var SliderComponent = (function () {
    function SliderComponent(mySlider) {
        this.mySlider = mySlider;
        this.images = IMAGES;
        this.left = 0;
    }
    SliderComponent.prototype.ngOnInit = function () {
        // this.slideElemWidth = this.mySlide.toArray()[0].nativeElement.clientWidth;
        // console.log(this.slideElemWidth)
        // this.widthViewport = this.mySlider.nativeElement.querySelector(".slider_container").clientWidth;
        // console.log(this.widthViewport);
        // this.sliderElemLength = this.mySlider.nativeElement.querySelectorAll(".slide").length;
        // console.log(this.sliderElemLength)
        // this.sliderElemLength2 = this.mySlider.nativeElement.querySelectorAll(".slide")
        // console.log(this.sliderElemLength2);
        // this.numberSlidesInViewport = this.widthViewport / this.slideElemWidth;
        // this.sliderModule = this.sliderElemLength % this.numberSlidesInViewport;
        // this.positionSlider = this.mySlider.nativeElement.querySelector(".slider_container").offsetTop;
        // this.windowHeight = window.innerHeight;
        // this.sliderHight = this.mySlider.nativeElement.querySelector(".slider_container").clientHight;
        // console.log("sliderHight2" +this.sliderHight)
        // this.widthAllSlider = this.sliderElemLength * this.slideElemWidth;
        // this.multiplyModuleElemWidth = this.slideElemWidth * this.sliderModule;
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        // this.slideElemWidth = this.mySlide.toArray()[0].nativeElement.clientWidth;
        // console.log(this.slideElemWidth)
        this.widthViewport = this.mySlider.nativeElement.querySelector(".slider_container").clientWidth;
        console.log(this.widthViewport);
        this.sliderElemLength = this.mySlider.nativeElement.querySelectorAll(".slide").length;
        console.log(this.sliderElemLength);
        this.slideElemWidth = this.mySlider.nativeElement.querySelectorAll(".slide")[0].clientWidth;
        console.log(this.slideElemWidth);
        this.numberSlidesInViewport = this.widthViewport / this.slideElemWidth;
        console.log(this.numberSlidesInViewport);
        this.sliderModule = this.sliderElemLength % this.numberSlidesInViewport;
        console.log(this.sliderModule);
        this.positionSlider = this.mySlider.nativeElement.querySelector(".slider_container").offsetTop;
        console.log("POS" + this.positionSlider);
        this.windowHeight = window.innerHeight;
        console.log(this.windowHeight);
        // this.sliderHight = this.mySlider.nativeElement.querySelector(".slider_container").clientHight;
        this.sliderHight = this.mySlider.nativeElement.querySelector(".slider_container").clientHight;
        console.log("sliderHight:" + this.sliderHight);
        this.widthAllSlider = this.sliderElemLength * this.slideElemWidth;
        console.log(this.widthAllSlider);
        this.multiplyModuleElemWidth = this.slideElemWidth * this.sliderModule;
        console.log(this.multiplyModuleElemWidth);
        this.interv();
    };
    SliderComponent.prototype.startMove = function () {
        // for (var i = 0; i < slideElemLength; i++) {
        // 		slideElem[i].style.left = left + 'px';
        // }
        // document.addEventListener('scroll', function() {
        // 		var scrollDocument = window.pageYOffset
        // 		if (scrollDocument < positionSlider - windowHeight +
        // 				sliderHeight || scrollDocument > positionSlider + sliderHeight / 2) {
        // 				if (startMove) {
        // 						clearInterval(startMove);
        // 						startMove = 0;
        // 				}
        // 			} else if (!startMove) {
        // 					startMove = setInterval(move, 3000);
        // 			}
        // 	});
        // }
    };
    SliderComponent.prototype.interv = function () {
        var _this = this;
        this.startInterval = setInterval(function () {
            _this.left = _this.left - _this.widthViewport;
            if (_this.left < -((_this.widthAllSlider - _this.widthViewport) - _this.multiplyModuleElemWidth) &&
                _this.sliderModule > 0) {
                _this.left = _this.left + _this.widthViewport - _this.multiplyModuleElemWidth;
            }
            if (_this.left < -(_this.widthAllSlider - _this.widthViewport)) {
                _this.left = 0;
            }
        }, 3000);
    };
    SliderComponent.prototype.stop = function () {
        clearInterval(this.startInterval);
    };
    __decorate([
        core_1.ViewChildren("myImage")
    ], SliderComponent.prototype, "mySlide");
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'app-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.css']
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
