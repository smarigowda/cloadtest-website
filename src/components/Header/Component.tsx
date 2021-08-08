import styles from "./header.module.scss";
const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.contactPhone}>
          <i className="fas fa-phone"></i>
          <div>07920830031</div>
        </div>
        <div className="email">Send EMail</div>
      </div>
      <div className={styles.companyName}>
        <h1>CloadTest UK Limited</h1>
      </div>
    </header>
  );
};

export { Header };
