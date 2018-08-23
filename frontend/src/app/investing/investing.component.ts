import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WordpressService } from '../wordpress.service';
import { Post } from '../Post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-investing',
  templateUrl: './investing.component.html',
  styleUrls: ['./investing.component.scss']
})
export class InvestingComponent implements OnInit {

  public slug: string;
  public articles: Post[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private wp: WordpressService) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    console.log('slug: ', this.slug);

    if (!this.slug) {
      // list all articles
      this.wp.getHowTos().subscribe(result => {
        console.log(result);
        this.articles = result;
      });
    } else if (typeof this.slug !== 'undefined') {
      // show selected article
      console.log('else use slug:', this.slug, this.wp.getBySlug);
      this.wp.getBySlug(this.slug).subscribe(result => {
        console.log(result);
        this.articles = result;
      });
    }

  }

}
