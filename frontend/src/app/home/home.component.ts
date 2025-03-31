import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  message: string = '';

  constructor(private apiService: ApiService) {}

  onClick() {
    alert('Bouton cliqué !');
  }
  
  ngOnInit(): void {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

}
