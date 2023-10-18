import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent {

  constructor(public blogService:BlogsService, public router:Router){}

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "350px",
    placeholder: "Enter text here...",
    translate: "no",
    defaultParagraphSeparator: "p",
    defaultFontName: "Arial",
    toolbarHiddenButtons: [["bold"]],
    sanitize: true,
    customClasses: [
      {
        name: "quote",
        class: "quote"
      },
      {
        name: "redText",
        class: "redText"
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1"
      }
    ]
  };

  username:String='';
  title:String='';
  content:String='';

  post(){
    let obj={
      author:this.username,
      title:this.title,
      content:this.content,
      comments:[]
    }
    this.blogService.postBlog(obj).then((res)=>{
      console.log(res);
      this.router.navigate(['/Home']);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
