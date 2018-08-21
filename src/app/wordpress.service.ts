import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './Post.interface';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  // https://v2.wp-api.org/reference/posts/
  private posts = 'http://wp.alexshi.ca/index.php/wp-json/wp/v2/posts?_embed';
  private categoryIds = {
    viewing: 4,
    listing: 5,
    blog: 6,
    howto: 7,
  };

  constructor(private http: HttpClient) { }

  getBySlug(slug: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.posts, {
      params: {
        // context: 'embed',
        'slug': slug,
        per_page: '6',
        // categories: this.categoryIds.howto.toString(),
      }
    });
  }

  getViewings(): Observable<Post[]> {
    return this.http.get<Post[]>(this.posts, {
      params: {
        // context: 'embed',
        per_page: '6',
        categories: this.categoryIds.viewing.toString(),
      }
    });
  }

  getListings(): Observable<Post[]> {
    return this.http.get<Post[]>(this.posts, {
      params: {
        // context: 'embed',
        per_page: '6',
        categories: this.categoryIds.listing.toString(),
      }
    });
  }

  getBlogs(): Observable<Post[]> {
    return this.http.get<Post[]>(this.posts, {
      params: {
        // context: 'embed',
        per_page: '6',
        categories: this.categoryIds.blog.toString(),
      }
    });
  }

  getHowTos(): Observable<Post[]> {
    return this.http.get<Post[]>(this.posts, {
      params: {
        // context: 'embed',
        per_page: '6',
        categories: this.categoryIds.howto.toString(),
      }
    });
  }
}
