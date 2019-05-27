import Link from "next/link";
import { Header } from "@fillipvt/components";
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
      <a href="https://fillipvt.com/blog/about">Go To About Page</a>
    </section>
    <section>
      <a href="https://fillipvt.com">Go To Portfolio Home Page</a>
    </section>
    <section>
      <div className="cualquier-cosa">
        <Button primary>This is working yay!</Button>
      </div>
    </section>
  </main>
);
