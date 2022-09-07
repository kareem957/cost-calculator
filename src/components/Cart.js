import React, { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
    const { cart } = state;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
    }, [cart]);

    const changeQty = (id, qty) => {
        dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
                id,
                qty,
            },
        });
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                backgroundColor: "#ececec",
                margin: 10,
                padding: 10,
            }}
        >
            <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
            <b style={{ alignSelf: "center" }}>Sub Total : {total}</b>

            {cart.length > 0 ? (
                cart.map((prod) => (
                    <div
                        key={prod.id}
                        style={{
                            display: "flex",
                            padding: 5,
                            border: "1px solid gray",
                            marginTop: 5,
                            justifyContent: "space-between",
                        }}
                    >
                        <img src={prod.thumbnail} alt={prod.title} style={{ height: 70, objectFit: "cover" }} />
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                            <span>{prod.title}</span>
                            <b> $ {prod.price}</b>
                        </div>
                        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                            <button onClick={() => changeQty(prod.id, prod.qty - 1)}> - </button>
                            {prod.qty}
                            <button onClick={() => changeQty(prod.id, prod.qty + 1)}> + </button>
                        </div>
                    </div>
                ))
            ) : (
                <span style={{ padding: 20, alignSelf: "center" }}>Cart is Empty</span>
            )}
        </div>
    );
};

export default Cart;
