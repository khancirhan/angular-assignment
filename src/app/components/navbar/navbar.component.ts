import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Output('toggleMenu') toggleMenu = new EventEmitter();
    
    constructor() { }

    ngOnInit(): void {
    }

    onClick() {
        console.log("clicked");
        this.toggleMenu.emit("Clicked");
    }
}
