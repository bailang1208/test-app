import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const initBusiness = {
  taxes: 289.42
}

const initCartList = [
  {
    title: 'Free Ticket',
    quantity: 1,
    price: 0
  },
  {
    title: 'Alumni VIP Ticket',
    quantity: 2,
    price: 3500
  }
];

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})

export class Checkout2Component implements OnInit {

  business: any = initBusiness;
  cartList: Array<any> = initCartList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickEdit() {
    this.router.navigateByUrl('/');
  }

  onClickHavePromocode() {
    this.router.navigateByUrl('?havePromoCode=true');
  }
}
