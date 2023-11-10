import React from "react";

const Content = (props) => {
  const { nameCountry, temp, desc, bandeira, cidade } = props;
  return (
    <>
      <section style={{ margin: "auto", maxWidth: "100%", padding: "20px" }}>
        <div style={{ width: "20%", borderRadius: "8px", overflow: "hidden" }}>
          <h3 align="center">{cidade}</h3>
          <img
            src={bandeira}
            alt=""
            width="100%"
            style={{ borderTop: "solid 1px" }}
          />
        </div>

        <div
          style={{
            backgroundColor: temp < 22 ? "#3498db" : "#e74c3c",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "10px 0",
            textAlign: "center",
          }}
        >
          <div align="center">Temperatura da cidade</div>
          <div align="center">{temp.toFixed(2)} graus celsius</div>
        </div>
        <div
          style={{
            marginTop: "10px",
            background: "#f4f4f4",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <div>Descrição do clima</div>
          <div align="center">{desc}</div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Content;
