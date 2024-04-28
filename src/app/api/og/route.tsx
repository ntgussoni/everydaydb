import { ImageResponse } from "next/og";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const runtime = "edge";

export const contentType = "image/png";

function getFont() {
  return fetch(
    new URL("../../../../public/Inter-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
}

// Image generation
export async function GET(request: Request) {
  // Font

  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");
  const hasDescription = searchParams.has("description");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Default title";

  const description = hasDescription
    ? searchParams.get("description")?.slice(0, 100)
    : "My description";

  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col  justify-center py-10 px-20  "
        style={{
          backgroundImage: "url(http://localhost:3001/bg-og.png)",
          backgroundSize: "100% 100%",
          fontFamily: "Inter",
        }}
      >
        <div tw="text-6xl font-extrabold  tracking-tight leading-none mb-6 text-red-800">
          {title}
        </div>
        <div tw="text-3xl font-normal text-black tracking-tight leading-none mb-6 ">
          {description}
        </div>
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
          data: await getFont(),
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
