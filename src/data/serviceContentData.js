import startupChunks from './Txt content/startup.json'
import { serviceCategories } from './servicesData'

const startupServices = serviceCategories.find((item) => item.label === 'Startup')?.options ?? []

/**
 * startup.json stores sequential blocks per service (intro, long "Simple packages…" article,
 * then FAQ). Those middle chunks are most of the copy — include them in the detail body.
 * Duplicate OPC rows in the file (indices 9–11) are omitted.
 */
const STARTUP_JSON_INDICES = {
  Proprietorship: [0, 1, 2],
  Partnership: [3, 4, 5],
  'One Person Company': [6, 7, 8],
  'Limited Liability Partnership': [12, 13, 14],
  'Private Limited Company': [15, 16, 17],
  'Section 8 Company': [18, 19, 20],
  'Trust Registration': [21, 22, 23],
  'Public Limited Company': [24, 25, 26],
  'Producer Company': [27, 30, 31],
  'Indian Subsidiary': [32, 33, 34],
}

const stripInlineBold = (text) => text.replace(/\*\*([^*]+)\*\*/g, '$1')

const normalizeMarkdownLine = (line) => {
  let s = line.trim()
  if (!s) return ''
  const hm = s.match(/^(#{1,6})\s+(.*)$/)
  if (hm) s = hm[2].trim()
  s = stripInlineBold(s)
  return s
}

const markdownToParagraphLines = (markdown) => {
  const raw = markdown.split('\n').map((line) => normalizeMarkdownLine(line))
  return raw.filter(Boolean)
}

const FAQ_HEADING = /^frequently asked questions$/i

/**
 * FAQ chunks use one line per item: "Question?Answer text…"
 * Lines before the first "?" (e.g. "Common questions about…") are skipped for items.
 */
const extractFaqFromParagraphs = (lines) => {
  const idx = lines.findIndex((line) => FAQ_HEADING.test(line.trim()))
  if (idx === -1) {
    return { bodyParagraphs: lines, faqItems: [] }
  }

  const bodyParagraphs = lines.slice(0, idx)
  const faqItems = []

  for (const line of lines.slice(idx + 1)) {
    const t = line.trim()
    if (!t || /^load more questions$/i.test(t)) continue
    const qMark = t.indexOf('?')
    if (qMark === -1) continue
    const question = t.slice(0, qMark + 1).trim()
    const answer = t.slice(qMark + 1).trim()
    if (question.length > 3 && answer.length > 5) {
      faqItems.push({ question, answer })
    }
  }

  return { bodyParagraphs, faqItems }
}

const pickHeroTitle = (lines, serviceName) => {
  const candidates = [lines[0], lines[1]].filter(Boolean)
  const pick = candidates.find(
    (t) => t.length >= 18 && t.length <= 100 && !/[.!?]$/.test(t),
  )
  return pick ?? `${serviceName} Services`
}

const pickHeroSubtitle = (lines) => {
  const shortTitle = (t) => t.length < 50 && !/[.!?]/.test(t)
  for (let i = 0; i < lines.length; i += 1) {
    const t = lines[i]
    if (i === 0 && shortTitle(t)) continue
    if (t.length >= 40) return t
  }
  return lines.find((t) => /[.!?]/.test(t)) || lines[lines.length - 1] || `${lines[0] || 'Service'}.`
}

const buildStartupEntry = (serviceName) => {
  const indices = STARTUP_JSON_INDICES[serviceName]
  if (!indices?.length) {
    return {
      heroTitle: `${serviceName} Services`,
      heroSubtitle: `${serviceName} service details.`,
      fullText: '',
      paragraphs: [],
      faqItems: [],
    }
  }

  const parts = []
  for (const i of indices) {
    const chunk = startupChunks[i]
    if (!chunk?.content) continue
    parts.push(chunk.content.trim())
  }

  const fullMarkdown = parts.join('\n\n')
  const allLines = markdownToParagraphLines(fullMarkdown)
  const { bodyParagraphs, faqItems } = extractFaqFromParagraphs(allLines)

  return {
    heroTitle: pickHeroTitle(bodyParagraphs, serviceName),
    heroSubtitle: pickHeroSubtitle(bodyParagraphs),
    fullText: bodyParagraphs.join('\n'),
    paragraphs: bodyParagraphs,
    faqItems,
  }
}

const parseStartupSections = () => {
  const parsed = {}
  startupServices.forEach((serviceName) => {
    parsed[serviceName] = buildStartupEntry(serviceName)
  })
  return parsed
}

export const serviceContentData = {
  Startup: parseStartupSections(),
}

export const getServiceContent = (category, service) => {
  return serviceContentData?.[category]?.[service] ?? null
}
