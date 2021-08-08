import './footer.css';

const Footer = () => {
  return (
    <footer>
      <p> Copyright &copy; 2021 CloadTest UK Limited</p>
      <p> Apollo House Hallam Way, Whitehills Business Park, Blackpool, England, FY4 5FS </p>
      <div className="socials">
        <a href="/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/">
          <i className="fab fa-linkedin"></i>
        </a>
        </div>
    </footer>
  )
}

export { Footer }