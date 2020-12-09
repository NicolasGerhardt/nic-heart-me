import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../interfaces/blog-post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  post:BlogPost = {
    title:"Hello World",
    createdAt: new Date(2020, 2,24),
    content: "Well I'm creating a website for my Grand Circus class, and we are hard coding html sites. I'm not yet using any sort of content management system, so this is all just written directly into the html and hosted on GitHub. I setup a GitHub pages site a while ago, so I was able to easily get this up and going.\n\nOne big thing that is a challenge for this lab is coming up with content for a website in a short period of time. But Content generation is what I need to do so this is content for you to consume. "
  }
}
