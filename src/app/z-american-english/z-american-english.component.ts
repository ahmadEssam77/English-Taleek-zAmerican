import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-z-american-english',
  templateUrl: './z-american-english.component.html',
  styleUrls: ['./z-american-english.component.scss']
})
export class ZAmericanEnglishComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  backToHome() {
    this._router.navigate(['./home']);
  }

}
