import { Component } from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from "@angular/material/sidenav";


@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        MatIcon,
        MatIconButton,
        MatToolbar,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
