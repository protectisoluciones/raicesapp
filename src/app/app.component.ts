import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AvatarGuideComponent } from './components/avatar-guide/avatar-guide.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AvatarGuideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'raicesapp';
}
