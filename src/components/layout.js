import Header from "./Header";
import React from "react";
import { Container } from "reactstrap";
export default function Layout({ children }) {
  return (
    <div>
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </div>
  );
}
