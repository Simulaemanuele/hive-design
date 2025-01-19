import HiveCell from "@/components/HiveCell/HiveCell";

export default function Home() {
  return (
    <div>
      <h1>Test</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "95vh",
        }}
      >
        <HiveCell
          dimension="15rem"
          type="logo-menu"
          textContent=""
          backgroundVariant={false}
        />
        <HiveCell
          dimension="15rem"
          type="menu-tile"
          textContent="TextContent"
          backgroundVariant={false}
        />
        <HiveCell
          dimension="15rem"
          type="menu-tile"
          textContent="TextContent 2"
          backgroundVariant={true}
        />
        <HiveCell
          dimension="15rem"
          type="rotate"
          textContent=""
          backgroundVariant={true}
          rotate="-30deg"
        />
      </div>
    </div>
  );
}
