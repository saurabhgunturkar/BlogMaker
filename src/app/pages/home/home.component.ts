import { Component } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public blogService:BlogsService){}

  ngOnInit():void{
    this.blogService.fetchBlogs().then((res)=>{
      console.log(res);
      this.blogService.blogsData=res;
    }).catch((err)=>{
      console.log(err);
    })
  }

}
