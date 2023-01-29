import { createStore } from "vuex";
import {User } from "@/models/user"
import productsModule from "./products";

export interface IState {
	authUser: User | null;
	greeting: string;
}

export default createStore<IState> ({
  state: {
    authUser: null,
    greeting: "Online"
  },
  getters: {
    hello(state) {
      return state.greeting
    }
  },
  mutations: {
    changeGreeting(state, hello: string){
      state.greeting = hello
    }
  },
  actions: {
  },
  modules: {
    products: productsModule
  }
});
