import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class PdctListService {

  constructor() { }

  pdctList: Product[] = [
    {
      id: 0,
      img: '../assets/imgs/mob1.jpg',
      name: 'Samsung Galaxy A50 Dual Sim',
      category: 'mobiles & tablets',
      price: 5000,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 1,
      img: '../assets/imgs/mob2.jpg',
      name: 'Apple iPhone X with FaceTime',
      category: 'mobiles & tablets',
      price: 17500,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 2,
      img: '../assets/imgs/elec1.jpg',
      name: 'ATA 32 Inch HD LED Standard TV Black',
      category: 'electronics',
      price: 2000,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 3,
      img: '../assets/imgs/elec2.jpg',
      name: 'Lenovo Ideapad 330 Laptop',
      category: 'electronics',
      price: 5000,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 4,
      img: '../assets/imgs/home2.jpg',
      name: 'Olivilla Organic Frying Pan',
      category: 'home',
      price: 400,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 5,
      img: '../assets/imgs/home1.jpg',
      name: 'Tefal Stainless Steel Clipso + Pressure Cooker',
      category: 'home',
      price: 2300,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 6,
      img: '../assets/imgs/beauty1.jpg',
      name: 'Philips HP8233 Thermo Protect Ionic Hairdryer',
      category: 'health & beauty',
      price: 1500,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 7,
      img: '../assets/imgs/beauty2.jpeg',
      name: 'JOHNSON’S Body Cream Vita-Rich Soothing',
      category: 'health & beauty',
      price: 50,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 8,
      img: '../assets/imgs/toy1.jpg',
      name: 'Tasia 8012 Precious Gems For Girls',
      category: 'toys',
      price: 150,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
    {
      id: 9,
      img: '../assets/imgs/toy2.jpg',
      name: 'Galt Princesses Puzzle 100 Pieces For Girls',
      category: 'toys',
      price: 200,
      details: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    },
  ];

  returnList() {
    return this.pdctList;
  }

}
