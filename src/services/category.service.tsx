import { Category } from '../models/category.model';

let categories: Category[] = []

export class CategoryService {
  constructor() { }

  categoryList() {
    categories = [
      {
        id: 1,
        name: "Kompaun",
        image: "assets/images/category/kp.png",
        url: "/dashboard/Kompaun"
      },
      {
        id: 2,
        name: "Cukai",
        image: "assets/images/category/ck.png",
        url: "/dashboard/Cukai"
      },
      {
        id: 3,
        name: "Sewa Gerai",
        image: "assets/images/category/sg.png",
        url: "/dashboard/Sewa Gerai"
      }
    ];

    return categories;
  }
}