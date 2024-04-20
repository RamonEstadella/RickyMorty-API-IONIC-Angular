import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  characters: Character[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
      this.http.get<any>('https://rickandmortyapi.com/api/character')
        .subscribe(res => {
          console.log(res);
          this.characters = res.results;
        })
  }

}
