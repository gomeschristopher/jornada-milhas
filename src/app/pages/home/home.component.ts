import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PromotionService } from 'src/app/core/services/promotion.service';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';
import { Promotion, Testimonial } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promotions: Promotion[] = [];
  testimonials: Testimonial[] = [];

  constructor(private promotionService: PromotionService,
    private testimonialsService: TestimonialsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.promotionService.list().subscribe({
      next: (promotions) => {
        this.promotions = promotions;
      }
    });

    this.getTestimonials();
  }

  getTestimonials(): void {
    this.testimonialsService.list().subscribe(
      res => {
        this.testimonials = res;
      }
    )
  }

  navigateToSearch(event: any) {
    this.router.navigate(['/busca']);
  }
} 
