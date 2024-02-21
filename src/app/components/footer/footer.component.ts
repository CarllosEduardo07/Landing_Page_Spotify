import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule, NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
