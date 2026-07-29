import "./WhyChoose.scss";

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose__container">
        <h2 className="why-choose__title">Why Choose Eco Wear</h2>

        <div className="why-choose__grid">
          <div className="why-choose__card">
            <h3 className="why-choose__card-title">Eco-Friendly Materials</h3>
            <p className="why-choose__card-description">
              We source only organic and recycled fabrics that honor both
              artisan craftsmanship and the Earth.
            </p>
          </div>

          <div className="why-choose__card">
            <h3 className="why-choose__card-title">Ethically Made</h3>
            <p className="why-choose__card-description">
              Every piece is crafted in fair-wage environments with safe,
              supportive conditions for all makers.
            </p>
          </div>

          <div className="why-choose__card">
            <h3 className="why-choose__card-title">Sustainable Packaging</h3>
            <p className="why-choose__card-description">
              Our packaging is 100% plastic-free and biodegradable, ensuring
              zero unnecessary waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
