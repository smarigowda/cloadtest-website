import styles from "./hero.module.scss";
const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.content}>
          <h2>Website Design for Small Business</h2>
          <p>
            We create affordable and effective websites for small businesses and
            start-ups. With expertise in visual design and user experience,
            combined with web coding and digital marketing, we drive leads and
            sales opportunities to your small business.
          </p>
          <p>
            Bespoke web design comes as standard, along with a superior level of
            personal service and support. Advice and prices are offered with
            complete transparency based on your specific needs, aiming to bring
            the greatest success to your business.
          </p>
        </section>
        <section className={styles.image}>
          <img src="website_design.jpeg" alt="website design" />
        </section>
      </div>
      <div className={styles.container}>
        <section className={styles.image}>
          <img src="automated_testing.png" alt="website design" />
        </section>
        <section className={styles.content}>
          <h2>Test Automation Services</h2>
          <p>
            We create affordable and effective websites for small businesses and
            start-ups. With expertise in visual design and user experience,
            combined with web coding and digital marketing, we drive leads and
            sales opportunities to your small business.
          </p>
          <p>
            Bespoke web design comes as standard, along with a superior level of
            personal service and support. Advice and prices are offered with
            complete transparency based on your specific needs, aiming to bring
            the greatest success to your business.
          </p>
        </section>
      </div>
    </>
  );
};

export { Hero };
