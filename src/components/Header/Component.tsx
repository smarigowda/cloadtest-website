import styles from './header.module.css';
const Header = function() {
  return (
    <header className={styles.header}>
      <div className="header-top">
      
      
        <div className="contact-phone">
          <i className="fas fa-phone"></i>
          07920830031
          </div>
        <div className="email">Send EMail</div>
      </div>
      <h1>Cload Test UK Limited</h1>
    </header>
  )
}

export { Header }