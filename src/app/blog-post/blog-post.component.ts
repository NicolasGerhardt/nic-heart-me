import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../interfaces/blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() post:BlogPost;

  constructor() { }

  ngOnInit(): void {
    console.log({post: this.post})
  }

}
