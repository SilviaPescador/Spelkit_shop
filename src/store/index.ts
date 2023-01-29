import { createStore } from 'vuex'
import { Product } from "@/models/product"
import { Category } from "@/models/category"


export interface IState {
  authUser: Product | null
  greeting: string
}

export default createStore
