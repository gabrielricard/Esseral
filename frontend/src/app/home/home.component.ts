import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, RouterModule],
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
    /*this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });*/
  }
  
}
