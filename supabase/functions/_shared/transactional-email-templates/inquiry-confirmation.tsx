import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Latorre Interiors'

interface InquiryConfirmationProps {
  name?: string
}

const InquiryConfirmationEmail = ({ name }: InquiryConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for your inquiry — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Thank you, ${name}.` : 'Thank you.'}
        </Heading>
        <Text style={text}>
          We have received your inquiry and appreciate your interest in {SITE_NAME}.
          The principal will review your project personally and respond within
          two business days.
        </Text>
        <Text style={text}>
          In the meantime, please feel free to reply to this email if you would
          like to share additional context or imagery.
        </Text>
        <Text style={signature}>
          Warm regards,<br />
          The {SITE_NAME} Studio
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: InquiryConfirmationEmail,
  subject: 'We received your inquiry — Latorre Interiors',
  displayName: 'Inquiry confirmation (client)',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '48px 32px', maxWidth: '560px' }
const h1 = {
  fontSize: '26px', fontWeight: 'normal', color: '#1a1a1a',
  letterSpacing: '0.04em', margin: '0 0 24px',
}
const text = {
  fontSize: '15px', color: '#55575d', lineHeight: '1.7', margin: '0 0 20px',
}
const signature = {
  fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6',
  margin: '32px 0 0', fontStyle: 'italic' as const,
}
