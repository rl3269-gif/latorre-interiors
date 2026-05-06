import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Latorre Interiors'

interface InquiryNotificationProps {
  name?: string
  email?: string
  phone?: string
  city?: string
  projectType?: string
  budget?: string
  timeline?: string
  referral?: string
  message?: string
}

const Row = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null
  return (
    <Section style={row}>
      <Text style={rowLabel}>{label}</Text>
      <Text style={rowValue}>{value}</Text>
    </Section>
  )
}

const InquiryNotificationEmail = (props: InquiryNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New project inquiry from {props.name || 'a prospective client'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Project Inquiry</Heading>
        <Text style={intro}>
          A new inquiry has been received through the {SITE_NAME} website.
        </Text>
        <Hr style={hr} />
        <Row label="Full Name" value={props.name} />
        <Row label="Email" value={props.email} />
        <Row label="Phone" value={props.phone} />
        <Row label="Project Location" value={props.city} />
        <Row label="Project Type" value={props.projectType} />
        <Row label="Investment Range" value={props.budget} />
        <Row label="Anticipated Start" value={props.timeline} />
        <Row label="How They Found Us" value={props.referral} />
        {props.message ? (
          <>
            <Hr style={hr} />
            <Text style={rowLabel}>Message</Text>
            <Text style={messageStyle}>{props.message}</Text>
          </>
        ) : null}
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: InquiryNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New inquiry — ${data?.name || 'website visitor'}${data?.city ? ' · ' + data.city : ''}`,
  displayName: 'Inquiry notification (studio)',
  to: 'studio@latorreinteriors.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 555 555 5555',
    city: 'Miami, FL',
    projectType: 'Private Residence',
    budget: '$1M – $3M',
    timeline: '3 – 6 months',
    referral: 'Instagram',
    message: 'We are renovating our oceanfront home and would love to discuss the project.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '40px 32px', maxWidth: '600px' }
const h1 = {
  fontSize: '24px', fontWeight: 'normal', color: '#1a1a1a',
  letterSpacing: '0.04em', margin: '0 0 16px',
}
const intro = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 24px' }
const hr = { borderColor: '#e5e5e5', margin: '20px 0' }
const row = { margin: '14px 0' }
const rowLabel = {
  fontSize: '10px', color: '#999', textTransform: 'uppercase' as const,
  letterSpacing: '0.18em', margin: '0 0 4px',
}
const rowValue = { fontSize: '15px', color: '#1a1a1a', margin: '0' }
const messageStyle = {
  fontSize: '15px', color: '#1a1a1a', lineHeight: '1.6',
  margin: '8px 0 0', whiteSpace: 'pre-wrap' as const,
}
