import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/service/jwt/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  private jwtService:JwtService;

  constructor(jwtService: JwtService) {
    this.jwtService = jwtService;
    this.jwtService.tokenType="ap";
  }
}
