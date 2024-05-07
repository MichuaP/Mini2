import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { DomseguroPipe } from '../domseguro.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuComponent, DomseguroPipe]
})
export class HomeComponent {
    video:string="kkHVpcB4IyU";       
}
