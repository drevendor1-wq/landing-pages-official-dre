"use client"
import { useState } from "react";

const Gallery = () => {
 const images = [
    "https://lh3.googleusercontent.com/sitesv/APaQ0SQO4pptcYPM9w_6GY1aM8_y_qFiQm1ivwtMP8hY1nuUNenrgFZyG17O2m7ttboAZU4hS-U-bc_XU5xXduHbU0lIhGEVd2A2GUwZDsrsncwDgp-jhM-SEAGC5gYhu947UZUTsG2fLs-uStAyL1WAczKAmNEDCBQ1bBkJGl7QWux_1ALBd0MzedEKEsc=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SQZocEBcIY6sk9cX2z4JmDGmlS00V67D48sSlFiXHaMyDH1bGD-dU-ZQU27BRC3lxqFRxTazkk1tNbULE97PbCzJOFzFs_bevayciCRE_-D1jeLigz1A_sl8REw6U3l3ZAKzMv_P-vLMdSXaDqsUPHBiXuecUU0XCzFOabxlHhZoih2kQ3lqOXaph0=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SSV7gFWUv67zDGN9_Ps6Oz3zjV9-efXFuUondWV7d2-BWymJbYJnafFmr-zl-y_QAhfZ0jUVzS_VSnZRQ7ym-HPMAvBHozhlmrrAnpjMVhvDeN8F760mQAIroqdDzfhvSOTwHk7LCF_n7qKA_8iR71JfR1tjqNdqa8oOC793mN-IVNPneJ8KSiuTzE=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SSZ24sWazgmwAZI_7fOdhn_uoJCZu5PNxvSJfnq4tE791ikMM_lh0aH6l4TdVYmid0oOfS1-BhoWx8LtJ9CYnod8HGqU5NIj9IES-tZ7H5uiwc9H6vx-WEm0re2JH2YzD0-d-fgPfVeUULaBAiwjdKLlarBR30E3oBcs2-doyd1nqY5hsADgxvY=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SRLuq4Wh7_hbm2xIFiqGSnCig8hNEJzQ5TmfX0e96mKnh2rD5szbHrZ7D4zqlGx1Bc_3C6fQr8jG6Z7U40UUnjOoQ0442tCqLaYUojZWv6X2Zpnppf2p4zx5Um6lp7MaVkN2nL3Z1JJzd3C25AmJuUzQifEoPTkLR_piUJE5PJTt420YO8GtCYuqh4=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SRlMGosPkNYatZFTbXstO8UJ8Rk4l6JFwOacnU5LKlpFxqVwhY5mzz-KTuxP_S4YGH1k1L0ZeDczyfwimm4DYMMwPsMSTzG4v-H7JiE1dY_HcBwXeDKiU4rbH8WhHnROwgz9p7WeKnkvcBOKhhZK_QDTqrUs3qU_KtQDtefW-D-vvqNpVUtCPk-WH8=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SRM609CyYg-2828agwA0mlbZddZ6Yq1hlN77V9IFndUvMgJ-cfRnFeqUsUzxH77yAlOuzIygL-Srza6JjLc3zTJp_N8nN-PxY06CQjM3QHFNhSRzCXHhtcX_89fFXOgfogVlOyYczOMqARw5tkbzYuaTtBnUCOgLlBgCtB7w_tcdxf9Ef9NuCiJ=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SQixLIkeKxoUbpjMRhTOdVB82QAozLyvUlsIyy05gstpcyrWVfcIDBga47PUCl7mq82fWjLwcCnsOhaV1KX8AkBozOgLydyzZkvN5dr7y5NQHCWlsdr2wbPvRqFVtpXxhj969VPRdlTI_Dfo3cLIYgAMoIW7yP5L95pbv_Hd7oD9q7qfApihhJzNO4=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SS2q52zEABsngdndR8jmtdTB0AMyYizOL8humY-_8AziNWuWxGRa9rZx5swyT7EWvXadh0VIpcPKoDFwlBF12DkWgiDPdRucN90QaSUb4jemymEZ-0hYD5QMlsOIeuE7DF0yNVotl5drzjyTiRv1GSfGDyiQ0lmuuSkT-iUJ3arDMRYRfRHa3Ou=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SRTPFTpo3qJQKjUOVxe62Fd_--B9El8QlUHXTH5wcSJjvJTgokl2UBpMCSG1JoM7CRmP6ZNO8kJsrnUYsPi8Ry27ag3lgxRJX54W_PHkQp9cewnoopzI0LVdbBfrwkg7HoylAWTbIJTJ4Ydp2FWCKtjg7PXcnz5VlAQWgf53Z47aE3caYP_rt8CaW0=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SQb9t_Xz1f1QdazYWLYaUCDhlKlnfrqMAwGa8hU6yw00PfpjpQW2zivWUNc28KaOcaRY_m6qcQ3ju5hPuNexM1592MemAcX17iJNhEjIddKY3SSU7T5cjft0wSaoXC9N_W_N0JB95Thx8u5okm7rUpcpeCEEDjbSPL4msOtwAJnITKI1PF34gTF=w16383",
    "https://lh3.googleusercontent.com/sitesv/APaQ0SRVXO0RgU9vb_xz4Si92A8WAfpBqwIjOGuR9uw37nPql2dk1-Qe_4fIlotFEkTnKlQxg2PQZdyM5qmPviwsnYIG7bTNmJ2ey8wLfkGZm6kKSUoP9CLQFfu3GCxFnPFo_MdqiRjpYhW3osfQsZcxd6Pl4vAH1HlfV1baeCeQQzcdi4csA0oDi94X=w16383"
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#EFEDE8] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT BIG HERO */}
        <div className="relative h-[600px] rounded-[40px] overflow-hidden">
          <img
            src={images[active]}
            className="w-full h-full object-cover transition duration-700"
          />

          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-sm tracking-widest mt-2 opacity-80">
              {active + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer rounded-2xl overflow-hidden ${
                active === i ? "ring-2 ring-green-600" : ""
              }`}
            >
              <img
                src={img}
                className="w-full h-40 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;