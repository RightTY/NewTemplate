import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor() {}
}

export function jwtOptionsFactory(request: Request) {
  return {
    tokenGetter: (request: Request) => {
      console.log(request.url);
      if (
        request.url.includes('api') &&
        !request.url.includes('/api/public/Token/create_ap_token')
      ) {
        return localStorage.getItem('ap_token');
      } else {
        return localStorage.getItem('template_token');
      }
    },
    allowedDomains: [''],
    disallowedRoutes: [
      '/assets/i18n/zh-tw.json',
      '/assets/i18n/zh-cn.json',
      '/api/public/Token/create_ap_token',
    ],
    authScheme: 'bearer',
    throwNoTokenError: true,
  };
}
