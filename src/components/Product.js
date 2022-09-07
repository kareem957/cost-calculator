import React from "react";

const Product = ({ state, dispatch }) => {
    const { products, cart } = state;
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "80%",
                justifyContent: "space-evenly",
            }}
        >
            {products.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 10,
                        border: "1px solid gray",
                        gap: 10,
                        width: "30%",
                        marginTop: 10,
                    }}
                >
                    <img src={prod.thumbnail} alt={prod.title} style={{ height: 200, objectFit: "cover" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{prod.title}</span>
                        <b> $ {prod.price}</b>
                    </div>
                    {cart.some((c) => c.id === prod.id) ? (
                        <button
                            style={{
                                backgroundColor: "#e53935",
                                padding: 7,
                                border: 0,
                                borderRadius: 5,
                                color: "white",
                            }}
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            style={{
                                backgroundColor: "green",
                                padding: 7,
                                border: 0,
                                borderRadius: 5,
                                color: "white",
                            }}
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Product;
