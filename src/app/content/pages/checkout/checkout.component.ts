import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const initBusiness = {
  taxes: 289.42
}

const initProductList = [
  {
    img: null,
    title: 'Free Ticket',
    description: 'Free ticket for anyone to make a valuable contribution towards our future online events programme. Thank you.',
    expiration: 1,
    expiration_active: true,
    price: 0,
    quantity: 0,
    promo_message: 'Only 2 tickets available.',
    promo_action: 'Join waitlist',
    isDonate: false
  },
  {
    img: null,
    title: 'Alumni Base Ticket',
    description: 'This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime',
    expiration: 5,
    expiration_active: false,
    price: 95.99,
    quantity: 0,
    promo_message: '1 Ticket Added to cart. Want to join the waitlist for 2 tickets?',
    promo_action: 'Join Waitlist',
    isDonate: false
  },
  {
    img: null,
    title: 'Donate',
    description: 'Access to arts in vital. Pay what you can.',
    expiration: 0,
    expiration_active: false,
    price: 0,
    quantity: 0,
    promo_message: '',
    promo_action: '',
    isDonate: true
  },
  {
    img: 'assets/img/product-img.svg',
    title: 'Book: Good Strategy - Bad Strategy',
    description: 'Learn from the experts of business process management',
    expiration: 1,
    expiration_active: false,
    price: 17.99,
    quantity: 0,
    promo_message: '',
    promo_action: '',
    isDonate: false
  }
]

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
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  business: any = initBusiness;
  productList: Array<any> = initProductList;
  cartList: Array<any> = initCartList;

  havePromoCode: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.havePromoCode) {
        this.havePromoCode = params.havePromoCode == "true";
      }
    });
  }

  onClickHavePromoCode() {
    if (this.havePromoCode == false) {
      console.log('===== on click have promo code =====');
      this.productList.splice(2, 0, {
        img: null,
        title: 'Alumni VIP Ticket',
        description: 'This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime',
        expiration: 5,
        expiration_active: false,
        price: 3500,
        quantity: 0,
        promo_message: '2 Tickets Waitlisted.',
        promo_action: 'Cancel',
        isDonate: false
      });
      this.havePromoCode = true;
    }
  }

  onClickCheckOut() {
    console.log(typeof this.havePromoCode);
    if (this.havePromoCode == true) {
      console.log('===== on click check out =====', this.havePromoCode)
      this.router.navigateByUrl('checkout');
    }
  }

}
