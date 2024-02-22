import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule} from 'lucide-angular';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarMobileComponent } from '../sidebarMobile/sidebarMobile.component';


@Component({
    selector: 'home',
    standalone: true,
    imports: [SidebarComponent, SidebarMobileComponent ,FooterComponent, LucideAngularModule, NgOptimizedImage],
templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
