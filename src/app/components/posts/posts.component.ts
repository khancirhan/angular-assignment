import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Filter } from '../../models/Filter';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: Post[];
    statusArr: string[] = [];
    years: number[] = [];
    filteredPosts: Post[] = [];
    filter: Filter = new Filter();

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postService.get().subscribe(
            posts => {
                this.posts = posts;

                this.posts.forEach(p => {
                    p.realDate = new Date(p.date.substr(0, 19));

                    if (!this.statusArr.includes(p.status)) {
                        this.statusArr.push(p.status);
                    }

                    if (!this.years.includes(p.realDate.getFullYear())) {
                        this.years.push(p.realDate.getFullYear());
                    }

                    this.years.sort((a, b) => {
                        return b - a;
                    });

                    this.filteredPosts = this.posts;

                });
            },
            err => console.log(err)
        );
    }

    onStatusChange(status: string) {
        this.filter.status = status;
        this.onFilterChange();
    }

    onDateChange(year: number) {
        this.filter.year = year;
        this.onFilterChange();
    }

    private onFilterChange() {
        this.filteredPosts = this.posts;

        if (this.filter.status) {
            this.filteredPosts = this.filteredPosts.filter(p => p.status === this.filter.status);
        }

        if (this.filter.year) {
            this.filteredPosts = this.filteredPosts.filter(p => p.realDate.getFullYear() == this.filter.year);
        }
    }
}

