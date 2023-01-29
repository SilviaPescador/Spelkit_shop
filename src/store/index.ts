import { createStore } from 'vuex'
import { User } from "@/models/user"
import { Product } from "@/models/product"
import { Category } from "@/models/category"


export interface IState {
  authUser: User | null
  greeting: string
}

export default createStore
