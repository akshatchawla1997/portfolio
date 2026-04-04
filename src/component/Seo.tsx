import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  keywords?: string;
}

const defaultDescription =
  "Akshat Chawla Portfolio - Full Stack Developer focused on web apps, AI/ML integrations, cloud automation, and modern UI experiences.";

export default function Seo({
  title,
  description = defaultDescription,
  keywords = "Akshat Chawla, Full Stack Developer, React, Node.js, AI, Portfolio, Web Developer",
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#0f172a" />
    </Helmet>
  );
}
