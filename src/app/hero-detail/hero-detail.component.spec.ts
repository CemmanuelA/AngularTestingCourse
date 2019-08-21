import { TestBed } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

describe('HeroDetailComponent', () => {
    let mockActivatedRoute, mockHeroService, mockLocation;
    let fixture;
    beforeEach(() => {
        mockActivatedRoute = {
             snapshot: { paramMap: { get: () => '3' }}
        };
        mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
        mockLocation = jasmine.createSpyObj(['back']);
        TestBed.configureTestingModule({
            declarations: [HeroDetailComponent],
            providers: [
                {provide: ActivatedRoute, useValue: mockActivatedRoute},
                {provide: HeroService, useValue: mockHeroService},
                {provide: Location, useValue: mockLocation},

            ]
        });
        fixture = TestBed.createComponent(HeroDetailComponent);
    });
});