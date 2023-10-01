import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.scss']
})
export class BlogInfoComponent implements OnInit, OnChanges{
  @Input() nameBlog: string = '';
  @Input() author: any = {};

  img: string = '';

  ngOnInit(): void {
    this.setImg();
  }

  ngOnChanges() {
    this.setImg();
  }

  setImg() {
    if(this.author?.key) {
      this.img = '../../assets/img/authors/' + this.author?.key + '.jpg';
    }
  }
}
