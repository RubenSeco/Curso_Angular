import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
  name: "Ruben",
  gender: "male",
  age: 65,
  address: "Barnetche 2032, Campana"
};

const client2 = {
  name: "Isabel",
  gender: "female",
  age: 58,
  address: "Barnetche 2032, Campana"
};
@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18n Select
  client = signal(client1);
  invitationMap = {
    male: "invitarlo",
    female: "invitarla"
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18n Plural

  clientsMap = signal({
    "=0": "no tenemos ningún cliente esperando",
    "=1": "tenemos 1 cliente esperando",
    "=2": "tenemos 2 clientes esperando",
    other: "tenemos # clientes esperando"

  });

  clients = signal([
    "María",
    "Pedro",
    "Fernando",
    "Melissa",
    "Natalia",
    "Andrea",
    "Juan",
    "Carlos",
  ]);
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));

  }


  // KeyValue Pipe
  profile = {
    name: "Ruben",
    age: 65,
    address: "Campana, Argentina"
  };

  // Async Pipe
  // promiseValue: Promise<string> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Tenemos data en la promesa");
  //     console.log("Promesa finalizada");
  //   }, 3500);
  // });

  // myObservableTimer = interval(2000).pipe(
  //   tap((value) => console.log("tap:", value))
  // );


}


