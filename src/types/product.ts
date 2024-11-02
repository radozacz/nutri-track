export type ProductType = {
    title: string
    type: 'liquid'|'solid'
    group: 'milk'|'beef'|'lamb'|'egg'|'salt'|'iso'
    caloriesPer100: number
    proteinsPer100: number 
    carbsPer100: number
    fatsPer100: number
    packName: string
    packSize: number
}

export type TrackItemType = {
    product: ProductType
    date: string
    size: number
}
