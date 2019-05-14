export interface CartProduct {
    product: {
      id: number;
      img: string;
      name: string;
      category: string;
      price: number;
    };
    count: number;
  }
  