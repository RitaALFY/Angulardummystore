import {Category, CategoryHttp} from "./category.model";

export  interface ProductHttp{
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: CategoryHttp
  thumbnail: string,
  images: []

}
export  interface Product{
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: Category,
  thumbnail: string,
  images: []

}
export namespace Product {
  export function fromProductHttpToProduct(productHttp: ProductHttp): Product {

    return {

      id: productHttp.id,
      title: productHttp.title,
      description: productHttp.description,
      price: productHttp.price,
      discountPercentage: productHttp.discountPercentage,
      rating: productHttp.rating,
      stock: productHttp.stock,
      brand: productHttp.brand,
      category: Category.fromCategoryHttpToCategory(productHttp.category),
      thumbnail: productHttp.thumbnail,
      images: productHttp.images
    }
  }
}
