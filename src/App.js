import axios from "axios";
import { useEffect, useReducer } from "react";

import { cartReducer } from "./reducers/cartReducer";

import Cart from "./components/Cart";
import Product from "./components/Product";

const App = () => {
    useEffect(() => {
        fetchProducts();
    }, []);

    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
        products: [],
    });

    const fetchProducts = async () => {
        const { data } = await axios.get("https://dummyjson.com/products");

        dispatch({
            type: "ADD_PRODUCTS",
            payload: data.products,
        });
        console.log(state);
    };

    return (
        <div style={{ display: "flex" }}>
            <Product state={state} dispatch={dispatch} />
            <Cart state={state} dispatch={dispatch} />
        </div>
    );
};

export default App;
