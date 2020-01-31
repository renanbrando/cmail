import { Component } from "@angular/core";
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', 'header-search.css']
})

export class HeaderComponent {
    isMenuOpen: Boolean
    title = 'Cmail'

    constructor (private pageService: PageService, private headerService: HeaderService){
        this.isMenuOpen = false
        this.pageService.title.subscribe(newTitle => this.title = newTitle)
    }

    toggleMenu () {
        this.isMenuOpen = !this.isMenuOpen
    }

    handleInput({target}) {
        this.headerService.updateFilterValue(target.value)
    }
}