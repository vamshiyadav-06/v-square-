function ContactPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Contact</div>
          <h1>Get free project consultation</h1>
        </div>
        <div className="form-shell">
          <form className="form-grid">
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input type="tel" placeholder="Your phone number" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="form-field">
              <label>College</label>
              <input type="text" placeholder="College name" />
            </div>
            <div className="form-field">
              <label>Project Idea</label>
              <input type="text" placeholder="Your idea" />
            </div>
            <div className="form-field">
              <label>Technology</label>
              <input type="text" placeholder="React, Python, AI, etc." />
            </div>
            <div className="form-field">
              <label>Deadline</label>
              <input type="text" placeholder="e.g. 2 weeks" />
            </div>
            <div className="form-field full">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell us more about your requirement"></textarea>
            </div>
            <div className="full">
              <button className="btn btn-primary" type="button">Submit Consultation Request</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
