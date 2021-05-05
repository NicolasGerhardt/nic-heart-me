import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blog-post';

@Injectable({
  providedIn: 'root'
})
export class BlogRepositoryService {

  constructor() { }

  getBlogPosts() : BlogPost[] {
    return [
      {
        title:"May the 4th",
        createdAt: new Date(2021, 4, 4),
        content: "Time to come at this with full force. Hello from service!"
      },
      {
        title:"Hello World (again)",
        createdAt: new Date(2020, 11, 9),
        content: "Taking some time to recreate my website and making while using a lot of the new skills that I've aquired in my journey to become a Full Stack Software Engineer.\n\nI've created this site using Anuglar and I'm hosting it on Firebase with the intention of turning this into a full blog/content delivery appication. I know there are plenty of tools that would allow for me to create this in no time, but I've never been on to back down from a challange."
      }
    ];
  }
}
