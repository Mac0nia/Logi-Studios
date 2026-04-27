import fs from "fs"
import path from "path"
import matter from "gray-matter"

const CONTENT_DIR = path.join(process.cwd(), "content/work")

export interface CaseStudy {
  slug: string
  title: string
  trade: string
  tradeCategory: "plumber" | "electrician" | "builder" | "barber" | "other"
  area: string
  result: string        // one-line headline result
  brief: string         // 2-3 sentences, what they came with
  features: string[]    // bullet list of what was built
  tech: string[]        // tag list
  quote: string         // testimonial
  quoteName: string
  quoteRole: string
  accent: string        // per-project colour for the placeholder gradient
  content: string       // MDX body (result narrative)
}

export function getAllCaseStudies(): CaseStudy[] {
  const files = fs.readdirSync(CONTENT_DIR)
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "")
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8")
      const { data, content } = matter(raw)
      return { slug, ...data, content } as CaseStudy
    })
    .sort((a, b) => {
      const order = ["ah-electric", "decoworld", "bethnal-barber"]
      return order.indexOf(a.slug) - order.indexOf(b.slug)
    })
}

export function getCaseStudy(slug: string): CaseStudy | null {
  try {
    const raw = fs.readFileSync(
      path.join(CONTENT_DIR, `${slug}.mdx`),
      "utf-8"
    )
    const { data, content } = matter(raw)
    return { slug, ...data, content } as CaseStudy
  } catch {
    return null
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""))
}
