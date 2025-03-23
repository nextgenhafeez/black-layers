import type { Metadata } from "next"
import LogoUploader from "@/components/logo-uploader"
import { getLogo } from "@/app/actions/logo-actions"

export const metadata: Metadata = {
  title: "Logo Management",
  description: "Upload and manage your website logo",
}

export default async function LogoManagementPage() {
  const currentLogo = await getLogo()

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Logo Management</h1>
      <p className="text-muted-foreground mb-8">
        Upload a new logo for your website. The logo will be displayed in the header and other places throughout the
        site.
      </p>

      <LogoUploader currentLogo={currentLogo} />
    </div>
  )
}

