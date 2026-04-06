import { use } from "react"
import InnerBrandingCheckTest from "@/components/inner-branding-check-test"

type HomePageProps = {
  params: Promise<Record<string, string | string[] | undefined>>
}

export default function HomePage({ params }: HomePageProps) {
  use(params)
  return <InnerBrandingCheckTest />
}
