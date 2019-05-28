import { Component } from "react";
import Link from "next/link";
import { Header } from "@kpm/components";

class AboutPage extends Component {
  render() {
    return (
      <main>
        <Header />
        <div>About Page</div>
        <section>
          <Link href="/" as="/blog" prefetch>
            <a>Go To Blog Home (with Link)</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;
