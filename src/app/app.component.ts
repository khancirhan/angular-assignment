import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isSideBarOpen = true;

    onToggle() {
        this.isSideBarOpen = !this.isSideBarOpen;
    }
}
