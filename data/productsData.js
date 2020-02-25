import axios from "axios";
import { products } from "../store";


export const getProducts = () => {
    return axios.get(
        'http://127.0.0.1:8000/api/products/all-products',
      ).then(response => {
        let products = response.data;
        // this.props.dispatch(products(products));
        // let { projects, userId } = response.data;
        // this.props.dispatch(userIdContainer(userId));
        // this.props.dispatch(projectContainer(projects));
      }).catch(error => {
  
      });
      
      
}