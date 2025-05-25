import { getContactContent } from '@/lib/sanity/queries'
import ContactForm from '@/components/ContactForm'

export default async function ContactPage() {
  const content = await getContactContent()

  return (
    <ContactForm
      title={content.title}
      subheadline={content.subheadline}
      fallbackEmail={content.fallbackEmail}
      topics={content.topics}
      trustLine={content.trustLine}
      successMessage={content.successMessage}
    />
  )
}
