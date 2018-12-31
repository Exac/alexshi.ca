import { Component, OnInit } from '@angular/core';
import { Post } from '../Post.interface';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  investing: Post[] = []; // how-tos
  investingURI = '/investing/';
  listings: Post[] = []; // how-tos
  viewings: Post[] = []; // how-tos


  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.wp.getHowTos().subscribe(result => {
      this.investing = result;
    });
    this.wp.getListings().subscribe(result => {
      console.log(result);
      this.listings = result;
    });
  }

}
