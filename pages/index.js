export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}
    >
      <h1 style={{ margin: "10px 0", fontSize: "1.8rem", color: "#333" }}>
        Em construção...
      </h1>
      <img
        src="https://i.imgur.com/CX5naKG.jpeg"
        alt="Imagem em construção"
        style={{ width: "700px", height: "auto", marginTop: "10px" }}
      />
    </div>
  );
}
