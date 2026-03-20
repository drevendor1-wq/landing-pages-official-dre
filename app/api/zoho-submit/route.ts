export async function POST(req: Request) {
  try {
    const data = await req.json();

    const formData = new URLSearchParams();

    // ✅ EXACT Zoho field names
    formData.append("SingleLine", data.name);
    formData.append("Email", data.email);
    formData.append("PhoneNumber", data.phone);

    // ⚠️ Important hidden fields (safe defaults)
    formData.append("zf_referrer_name", "");
    formData.append("zf_redirect_url", "");
    formData.append("zc_gad", "");

    const response = await fetch(
      "https://forms.zohopublic.com/drehomesrealestate/form/GreenzbyDanubeTafrax/formperma/vWRNfQOrxtXN81bWQJ2ngywzZQjK8ATw02Uv6Y65698",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    // 🔍 Debug response (VERY IMPORTANT)
    const text = await response.text();
    console.log("Zoho response:", text);

    return Response.json({ success: true });

  } catch (error) {
    console.error("Zoho API error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}