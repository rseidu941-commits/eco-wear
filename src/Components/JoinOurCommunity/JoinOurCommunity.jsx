import { useState } from "react";
import "./JoinOurCommunity.scss";

function JoinOurCommunity() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <section className="join-community">
      <div className="join-community__container">
        <h2 className="join-community__title">Join Our Community</h2>

        <p className="join-community__subtitle">
          Be the first to know about new arrivals, sustainable fashion insights, and exclusive community offers.
        </p>

        <form className="join-community__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email adress....."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="join-community__input"
          />
          <button type="submit" className="join-community__button">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}

export default JoinOurCommunity;