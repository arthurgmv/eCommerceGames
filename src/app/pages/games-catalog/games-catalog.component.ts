import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from "@angular/material/button";
import {IGame} from "../../models/game";
import {GameCardComponent} from "../../components/game-card/game-card.component";

@Component({
  selector: 'app-games-catalog',
  standalone: true,
  imports: [MatCardModule, MatButton, GameCardComponent],
  templateUrl: './games-catalog.component.html',
  styleUrl: './games-catalog.component.css'
})
export class GamesCatalogComponent implements OnInit{
  @Output() addGameToCart: EventEmitter<IGame> = new EventEmitter();

  gamesList:IGame[] = [
{
  id: 1,
  name: "Batman: Arkham Asylum ",
  publisher: "Warner Bros. Interactive Entertainment",
  genre: "Action-adventure",
  published: "2009-08-25",
  img:"https://upload.wikimedia.org/wikipedia/en/4/42/Batman_Arkham_Asylum_Videogame_Cover.jpg",
  description: "After the Joker assaults Gotham City Hall, he is caught by Batman and taken to Arkham Asylum, " +
    "which temporarily houses many members of the Joker's gang, who were transferred after a fire at Blackgate Prison." +
    "Believing the Joker allowed himself to be captured, Batman accompanies him into the asylum. ",
  price: 10.99,
  totalInStock: 20,
  totalAddedToCart: 0,
},
{ id: 2,
  name: "Fallout 4",
  publisher: "Bethesda Softworks",
  genre: "Action-RPG",
  published: "2015-11-10",
  img: "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg",
  description: "In the Commonwealth during the year 2077, the protagonist and their family—consisting of their husband Nate (Brian T. Delaney) or wife Nora (Courtenay Taylor), depending on the player's chosen sex, and their baby son Shaun—escape into Vault 111, gaining entry due to a Vault-Tec representative signing them up for it immediately prior to a nuclear attack. Inside, the family members are tricked into entering cryogenic tubes and frozen alive. ",
  price: 20.52,
  totalInStock: 20,
  totalAddedToCart: 0,
},
    { id:3,
      name: "The Witcher 3: Wild Hunt",
      publisher: "CD Projekt Red",
      genre: "Action-RPG",
      published: "2015-05-19",
      img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
      description:"Geralt and his mentor Vesemir arrive at the town of White Orchard after receiving a letter from Geralt's long-lost lover Yennefer. After defeating a griffin for the local Nilfgaardian garrison, Geralt accompanies Yennefer to the city of Vizima, where they meet with Emperor Emhyr. Emhyr orders Geralt to find Ciri, who is Emhyr's biological (and Geralt's adopted) daughter. Ciri is a Child of the Elder Blood, the last heir to an ancient Elven bloodline that grants her the power to manipulate time and space, and is being relentlessly stalked by the enigmatic Wild Hunt. ",
      price: 20.52,
      totalInStock: 20,
      totalAddedToCart: 0,
    },

    { id:4,
      name: "BioShock: The Collection",
      publisher: "2K Games",
      genre: "Action-RPG",
      published: "2016-09-13",
      img: "https://th.bing.com/th/id/R.1aad43115249608e3495ca20ee4d1657?rik=otFbO7cVcx8nRg&pid=ImgRaw&r=0",
      description:"BioShock: The Collection is a compilation of the BioShock video games, developed by Blind Squirrel Games and published by 2K Games. The Collection features upgraded versions of BioShock, BioShock 2, and BioShock Infinite, with new textures and support for higher resolution displays and framerates.",
      price: 22.52,
      totalInStock: 20,
      totalAddedToCart: 0,
    },

    { id:5,
      name: "Baldur's Gate 3",
      publisher: "Larian Studios",
      genre: "RPG",
      published: "2023-08-03",
      img: "https://gamefaqs.gamespot.com/a/box/2/6/3/922263_front.jpg",
      description:"Baldur's Gate 3 takes place in the fictional world of the Forgotten Realms during the year of 1492 DR, over 120 years after the events of the previous game, Baldur's Gate II: Shadows of Amn, and months after the events of the playable Dungeons & Dragons 5e module, Baldur's Gate: Descent into Avernus. The story is set primarily in the Sword Coast in western Faerûn, encompassing a forested area that includes the Emerald Grove, a druid grove dedicated to the deity Silvanus; Moonrise Towers and the Shadow-Cursed Lands, which are covered by an unnatural and sentient darkness that can only be penetrated through magical means; and Baldur's Gate, the largest and most affluent city in the region, as well as its outlying suburb of Rivington.",
      price: 49.99,
      totalInStock: 20,
      totalAddedToCart: 0,
    },



  ];

  ngOnInit() {
    const storedGames = localStorage.getItem("gamesList");
    if (storedGames) {
      this.gamesList = JSON.parse(storedGames);
    } else {
      localStorage.setItem("gamesList", JSON.stringify(this.gamesList));
    }
  }


  warnAboutAddGameToCart(game: IGame){
    //console.log("Buy button clicked")
    //console.log(game)
    this.addGameToCart.emit(game)
  }
}
