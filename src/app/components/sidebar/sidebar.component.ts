import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
