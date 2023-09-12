/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_image: "url('././images/Benigmara01-min.png')",
        hero_two: "url('././images/Benigmara02-min.png')",
        hero_three: "url('././images/Benigmara03-min.png')",
        skelton_load: "url('././images/skeltonloader.png')",
        border_image: "url('././images/border.png')",
        left_image: "url('././images/left_image.png')",
        top_border: "url('././images/upper line.png')",
        form_image: "url('././images/Form.png')",
        innerform_image: "url('././images/Form_Inner.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100%": "100%",
      },
      fontFamily: {
        sharpin: ["Sharpin"],
        montserat: ["Montserat"],
      },
    },
  },
  plugins: [],
};
