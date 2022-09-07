import React from "react";

const Cart = ({ state, dispatch }) => {
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
            <div style={{ textAlign: "center" }}>Cart</div>
        </div>
    );
};

export default Cart;
