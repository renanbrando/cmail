import { Component, OnInit } from "@angular/core";
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', 'header-search.css']
})

export class HeaderComponent implements OnInit {
    isMenuOpen: Boolean
    title = 'Cmail'
    user = {
        name: '',
        email: '',
        avatarUrl: ''
    }

    constructor (private pageService: PageService, private headerService: HeaderService, private router: Router){
        this.isMenuOpen = false;
        this.pageService.title.subscribe(newTitle => { 
            this.title = newTitle
        });
    }

    ngOnInit() {
        this.user = this.getUser();
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    toggleMenu () {
        this.isMenuOpen = !this.isMenuOpen;
    }

    handleInput({target}) {
        this.headerService.updateFilterValue(target.value);
    }

    handleLogout(){
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}