function Contact() {
  return (
    <div className="grid-container contact-container">
      <h1 className="heading text-center">CONTACT ME</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="grid-item"
      >
        <div className="contact-content">
          <h2 className="text-lg">What's On Your Mind?</h2>
          <label className="contact-label text-med" htmlFor="name">
            Name
          </label>
          <input
            className="contact-input outline-none text-sm"
            id="name"
            name="name"
            type="text"
            autoComplete="off"
          />
          <label className="contact-label text-med" htmlFor="name">
            Subject
          </label>
          <input
            className="contact-input outline-none text-sm"
            id="subject"
            name="subject"
            type="text"
            autoComplete="off"
          />
          <label
            className="contact-label message-label text-med"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="contact-input message-input outline-none text-sm"
            type="text"
            id="message"
            name="message"
            autoComplete="off"
            required
          />
          <button className="submit-btn outline-none text-med black">
            Submit
          </button>
        </div>
      </form>
      <div className="grid-item about">
        <h2 className="text-lg text-center">About Me & Help Wanted</h2>
        <p className="text-sm">
          Hi all, I’m Parker Glas. I’ve loved puzzles and strategy games for as
          long as I can remember. Whether it's solving Rubik’s cubes, playing
          chess, or tackling daily brain teasers, I’ve always been drawn to
          activities that make you think.
        </p>
        <p className="text-sm">
          But I started to feel like things were stuck in a loop—same formats,
          same vibes, and very little surprise. I craved something fresh.
          Something that combined logic with creativity and just a bit of chaos.
        </p>
        <p className="text-sm">
          That’s why I built Name Guesser, despite having almost no web
          development experience when I started. It’s been a blast to work on,
          and building this game has quickly become one of my favorite pastimes.
        </p>
        <p className="text-sm">
          But there's one puzzle I can't solve alone: the star ratings. They
          reflect my own perspective and biases, and I need your unique input.
          I've added a completely anonymous, secure form for feedback when you
          encounter a question you believe to be too easy or too hard.
        </p>
        <p className="text-sm">
          Thanks for being here. Enjoy Name Guesser, and good luck.
        </p>
        <a
          href="https://shorturl.at/LKAKq"
          target="_blank"
          className="text-med"
        >
          Question Difficulty Form Link
        </a>
      </div>
    </div>
  );
}

export default Contact;
