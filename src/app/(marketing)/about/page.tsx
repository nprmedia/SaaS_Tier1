import { getAboutContent } from '@/lib/sanity/aboutQuery';
import AboutPage from '@/components/about/AboutPage';

export default async function About() {
  const content = await getAboutContent();
  return <AboutPage {...content} />;
}
