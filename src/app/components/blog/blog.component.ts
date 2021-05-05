import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../interfaces/blog-post';
import { BlogRepositoryService } from "../../services/blog-repository.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogRepositoryService: BlogRepositoryService) { }

  posts: BlogPost[];

  ngOnInit(): void {
    this.posts = this.blogRepositoryService.getBlogPosts();
  }

}
