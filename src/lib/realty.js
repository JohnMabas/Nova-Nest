function pick(obj, paths) {
  for (const path of paths) {
    const value = path.split(".").reduce((acc, key) => {
      if (acc === null || acc === undefined) return undefined;
      const asIndex = Number(key);
      if (Array.isArray(acc) && Number.isInteger(asIndex)) return acc[asIndex];
      return acc[key];
    }, obj);
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return null;
}

function formatPrice(value) {
  if (value === null || value === undefined || value === "") return null;
  const num = Number(String(value).replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(num) || num <= 0) return null;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

function formatHomeType(value) {
  if (!value || typeof value !== "string") return "Featured Listing";
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function fetchPropertyByAddress(
  address = "1875 AVONDALE Circle, Jacksonville, FL 32205"
) {
  const apiKey = process.env.REALTY_API_KEY;
  const baseUrl =
    process.env.REALTY_API_URL ||
    "https://zillow.realtyapi.io/pro/byaddress";

  if (!apiKey) return null;

  try {
    const url = `${baseUrl}?propertyaddress=${encodeURIComponent(address)}`;
    const res = await fetch(url, {
      headers: {
        "x-realtyapi-key": apiKey,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Realty API error", res.status);
      return null;
    }

    const data = await res.json();
    const root = data?.propertyDetails || data?.data || data;

    const price = formatPrice(
      pick(root, ["price", "zestimate", "listPrice", "homeValue"])
    );

    const beds = pick(root, ["bedrooms", "beds"]);
    const baths = pick(root, ["bathrooms", "baths"]);
    const livingArea = pick(root, ["livingArea", "livingAreaValue"]);
    const city = pick(root, ["address.city", "city"]);
    const state = pick(root, ["address.state", "state"]);
    const street = pick(root, [
      "address.streetAddress",
      "streetAddress",
      "address",
    ]);
    const image =
      pick(root, [
        "hiResImageLink",
        "mediumImageLink",
        "desktopWebHdpImageLink",
        "originalPhotos.0.mixedSources.jpeg.0.url",
        "imgSrc",
      ]) || null;

    const title = formatHomeType(
      pick(root, ["homeType", "propertyType", "homeStatus"])
    );

    return {
      title,
      price: price || "$500,000",
      location:
        [street, city, state].filter(Boolean).join(", ") ||
        "Downtown Metropolitan Area",
      size: livingArea
        ? `${Number(livingArea).toLocaleString("en-US")} ft²`
        : "120m²",
      bedrooms: beds != null ? `${beds} Bedrooms` : "2 Bedrooms",
      bathrooms: baths != null ? `${baths} Bathrooms` : "2 Bathrooms",
      image: typeof image === "string" && image.startsWith("http") ? image : null,
    };
  } catch (error) {
    console.error("Realty API fetch failed", error);
    return null;
  }
}
