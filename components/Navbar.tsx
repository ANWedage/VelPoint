import Link from "next/link";

export default function Navbar() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex">
              {/* Logo */}
              <div className="de-flex-col">
                <div id="logo">
                  <button 
                    onClick={handleLogoClick}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    aria-label="Back to home"
                  >
                    <img className="logo-main" src="/images/logo.png" alt="Velpoint" />
                    <img className="logo-scroll" src="/images/logo.png" alt="Velpoint" />
                    <img className="logo-mobile" src="/images/logo.png" alt="Velpoint" />
                  </button>
                </div>
              </div>

              {/* Main menu */}
              <div className="de-flex-col">
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li><a className="menu-item" href="/">Home</a></li>
                  </ul>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
