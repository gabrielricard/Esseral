import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'frontend';

  showFooter = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
  
    const atBottom = (scrollTop + windowHeight) >= (documentHeight - 5);
  
    console.log(`Scroll position: ${scrollTop}, window: ${windowHeight}, document: ${documentHeight}`);
    console.log(`At bottom: ${atBottom}`);
  
    this.showFooter = atBottom;
  }

  ngAfterViewInit() {
    const burger = document.querySelector('.toolbar-burger') as HTMLElement;
    const drawer = document.querySelector('.toolbar-drawer') as HTMLElement;

    if (burger && drawer) {
      burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        drawer.classList.toggle('open');
      });
      // Optional: close drawer when clicking a link
      drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          burger.classList.remove('open');
          drawer.classList.remove('open');
        });
      });
    }
  }
}
