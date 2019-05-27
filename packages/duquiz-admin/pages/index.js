import Link from "next/link";
import { Header } from "@kpm/components";
import { Button } from "semantic-ui-react";
import "../test.css";

export default () => (
  <main>
    <Header />
    <div>Blog Home Page</div>
    <section>
      <Link href="/about" as="/blog/about" prefetch>
        <a>Go To About Page (with Link)</a>
      </Link>
    </section>
    <section>
      <div className="cualquier-cosa">
        <Button primary>This is working yay!</Button>
      </div>
    </section>
  </main>
);
