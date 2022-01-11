import Head from 'next/head';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Layout = ({children}) => {
    return (
        <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        {children}
        </>
    )
}

export default Layout;
