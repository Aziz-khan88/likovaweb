import fs from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const file = path.join(process.cwd(), "public", "likova-body.html");
  const markup = await fs.readFile(file, "utf8");
  return {
    props: { markup },
  };
}

export default function HomePage({ markup }) {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
