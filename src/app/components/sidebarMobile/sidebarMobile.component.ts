import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule} from 'lucide-angular';
@Component({
  selector: 'app-sidebarMobile',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './sidebarMobile.component.html',
  styleUrl: './sidebarMobile.component.css'
})
export class SidebarMobileComponent {

}
