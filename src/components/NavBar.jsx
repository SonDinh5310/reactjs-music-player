import React from "react";

function NavBar() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "lightblue",
                height: "50px",
                width: "100%",
                margin: "0 auto",
            }}
        >
            <div>
                <p>
                    <span>MUSIC</span>
                </p>
            </div>
            <div>
                <button style={{ marginRight: "10px" }}>Upload music</button>
                <button>Get started</button>
            </div>
        </div>
    );
}

export default NavBar;
