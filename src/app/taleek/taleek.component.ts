import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taleek',
  templateUrl: './taleek.component.html',
  styleUrls: ['./taleek.component.scss']
})
export class TaleekComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  backToHome() {
    this._router.navigate(['./home']);
  }

  taleekAOne() {
    this._router.navigate(['./taleekA1']);
  }

}
