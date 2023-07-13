import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  clrVerticalNavCollapsible:boolean = false;
  clrVerticalNavCollapsed: boolean = false;
  clrVerticalNavCollapsedChange(event: any){}

  _isIndex!: boolean;
  
  post!:string;
  href!:string;

  posts!:any;

  constructor(private route: ActivatedRoute, private http: HttpClient){
    if (this.route.snapshot.paramMap.get('postid') == null) {
      this._isIndex = true;
    }
  }

  async ngOnInit() {
    let articleName = this.route.snapshot.paramMap.get('postid');
    this.href = window.location.href;
    this.post = `./assets/posts/${articleName}.md`;
    try {
      await this.http.get('./assets/posts/index.json').subscribe((data:any)=>{
        console.log(data);
        this.posts = data;
        console.log(this.posts);
      });
    } catch (error) {}
  }

  changePost(articleid: string){
    console.log(articleid);
    this.href = window.location.href;
    this.post = `./assets/posts/${articleid}.md`;
    
  }

}
