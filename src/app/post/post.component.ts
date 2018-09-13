import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle : string;
  @Input() postDescription : string;
  @Input() postNbLike : number;
  @Input() postCreated_at : Date;

  constructor() { }

  ngOnInit() { }

  addLike(){ this.postNbLike += 1; }

  removeLike(){ this.postNbLike -= 1; }

  getColor(){
    if(this.postNbLike > 0)
      return 'green'
    else if(this.postNbLike < 0)
      return 'Crimson'
  }

}
