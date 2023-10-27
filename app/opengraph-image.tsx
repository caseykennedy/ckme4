import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Casey Kennedy";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const interBold = fetch(
    new URL("public/Inter-Bold.woff", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          backgroundColor: "#000",
          backgroundSize: "100px 100px",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #fff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #fff 2%, transparent 0%)",
          backgroundPosition: "0 -8px, 0 -8px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
            fontStyle: "normal",
            marginTop: 0,
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          <b style={{ color: "white" }}>Casey Kennedy</b>
        </div>
        <div
          style={{
            display: "flex",
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
