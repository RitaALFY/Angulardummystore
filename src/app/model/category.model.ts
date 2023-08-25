export  type CategoryHttp =string

export type Category =string
export namespace Category{
  // mapper pour transformer les donne http en donnee front
  export function fromCategoryHttpToCategory(categoryHttp:CategoryHttp): Category{
    return categoryHttp
  }
}
