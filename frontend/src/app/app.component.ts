import { AfterViewInit, Component, HostListener, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MaterialModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeStaggerFade', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('700ms ease-in', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]),
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'frontend';

  showFooter = false;
  private router = inject(Router);

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
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });      

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

  removeFocus(event: Event) {
    (event.target as HTMLElement).blur();
  }
}
