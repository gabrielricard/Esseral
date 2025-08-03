import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent implements OnInit, OnDestroy {
  ngOnInit() {
    document.body.classList.add('links-page');
  }
  ngOnDestroy() {
    document.body.classList.remove('links-page');
  }
}
