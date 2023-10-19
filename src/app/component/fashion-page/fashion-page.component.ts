import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fashion-page',
  templateUrl: './fashion-page.component.html',
  styleUrls: ['./fashion-page.component.scss']
})
export class FashionPageComponent implements AfterViewInit {


  @Input() products: any;

  @Output() emitColor = new EventEmitter<any>();

  constructor() {
  }

  ngAfterViewInit(){
    console.log(this.products);
  }

  ngOnChanges() {
    console.log(this.products);
    this.emitColor.emit("black");
  }
}
