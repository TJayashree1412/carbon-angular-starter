import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
	selector: 'app-edit-ibmi',
	templateUrl: './edit-ibmi.component.html',
	styleUrls: ['./edit-ibmi.component.scss']
})
export class EditIBMIComponent implements OnInit {
	name = 'Angular';
	left = 0;
	@ViewChild('parentTag', {static: false})
	parentTag: ElementRef;

	@ViewChild('target', {static: false})
	target: ElementRef;

	constructor(private el: ElementRef, private renderer: Renderer2) {

	}
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}

	move() {
		console.log(this.parentTag.nativeElement.clientWidth);
		console.log(this.target.nativeElement.scrollWidth);
		const left = this.target.nativeElement.scrollWidth -
		this.parentTag.nativeElement.clientWidth;
		this.renderer.setStyle(this.target.nativeElement, 'margin-left', '-' + left + 'px');
	}


}

