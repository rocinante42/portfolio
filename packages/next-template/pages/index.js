import Link from "next/link";
import { Header } from "@kpm/components";
import { MarkdownEditor } from "@kpm/components";
import { Card } from "semantic-ui-react";
import "../test.css";

const texto = `# Title

## Secondary title

Regular text and then some **Math**

$$ e=mc^2 $$`;

export default () => (
  <main>
    <section>
      <Card>
        <Card.Content>
          <Card.Description>
            <MarkdownEditor defaultValue={texto} />
          </Card.Description>
        </Card.Content>
      </Card>
    </section>
  </main>
);
