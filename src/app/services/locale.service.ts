import { Injectable, signal } from '@angular/core';

export type AbailableLocal = "es" | "fr" | "en";

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private currentLocale = signal<AbailableLocal>("fr");
  constructor() {
    this.currentLocale.set(
      localStorage.getItem("locale") as AbailableLocal ?? "es"
    );
  }

  get getLocale() {
    return this.currentLocale;
  }

  changeLocale(locale: AbailableLocal) {
    localStorage.setItem("local", locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }

}
