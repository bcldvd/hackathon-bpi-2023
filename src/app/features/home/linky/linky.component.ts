import { Component } from '@angular/core';

const EnedisEndpoint = 'https://conso.vercel.app/api/auth';

@Component({
  selector: 'app-linky',
  templateUrl: './linky.component.html',
  styleUrls: ['./linky.component.scss'],
})
export class LinkyComponent {
  openEnedis() {
    window.open(EnedisEndpoint, 'Enedis', 'height=500,width=600');
    return false;
  }
}
