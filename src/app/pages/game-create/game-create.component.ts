import {Component, OnInit} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatButton} from "@angular/material/button";
import {IGame} from "../../models/game";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-game-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButton, FormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './game-create.component.html',
  styleUrl: './game-create.component.css'
})
export class GameCreateComponent implements OnInit{
  gameList: IGame[] = [];
  game:IGame = {
    id: 1,
    name: "Name",
    publisher: "Publisher",
    genre: "Genre",
    published: "",
    img:"",
    description: "A nice game",
    price: 20,
    totalInStock: 20,
    totalAddedToCart: 0,
  };

  ngOnInit(){
  this.gameList = JSON.parse(localStorage.getItem("gamesList") || "[]")
  }
  submitForm(){
    this.gameList.push(this.game);
    localStorage.setItem("gamesList", JSON.stringify(this.gameList));
  }
}
