import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule} from 'lucide-angular';


@Component({
    selector: 'home',
    standalone: true,
    imports: [LucideAngularModule, NgOptimizedImage],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
