// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Simulamos una validación exitosa
    if (username === 'admin' && password === 'admin123') {
      const token = 'fake-jwt-token';
      localStorage.setItem('token', token);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
