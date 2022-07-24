import Nav from 'react-bootstrap/Nav';

function Footer() {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top sticky-bottom">
        <div class="container">
        
        <p class="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>
        <Nav
          activeKey="/home"
          className='nav col-md-4 justify-content-end'
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
      
        <Nav.Item>
            <Nav.Link href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">  <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg></Nav.Link>
          </Nav.Item>
    
        <ul class="nav col-md-4 justify-content-end">
        <Nav.Item>
          <li class="nav-item"><Nav.Link href="/" className="nav-link px-2 text-muted">Home</Nav.Link></li>
          </Nav.Item>
          <Nav.Item>
          <li class="nav-item"><Nav.Link href="/" className="nav-link px-2 text-muted">Features</Nav.Link></li>
          </Nav.Item>
          <Nav.Item>
          <li class="nav-item"><Nav.Link href="/" className="nav-link px-2 text-muted">Pricing</Nav.Link></li>
          </Nav.Item>
          <Nav.Item>
          <li class="nav-item"><Nav.Link href="/" className="nav-link px-2 text-muted">FAQs</Nav.Link></li>
          </Nav.Item>
          <Nav.Item>
          <li class="nav-item"><Nav.Link href="/" className="nav-link px-2 text-muted">About</Nav.Link></li>
          </Nav.Item>
          </ul>
          </Nav>
        
     
      </div>
      </footer>

    )
};

export default Footer