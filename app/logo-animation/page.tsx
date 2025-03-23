import { LogoAnimation } from "@/components/logo-animation"
import { AdvancedLogoAnimation } from "@/components/advanced-logo-animation"

export default function LogoAnimationPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Black Layers Logo Animation</h1>

      <div className="bg-gray-900 p-8 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-4">Advanced Animation</h2>
        <div className="flex justify-center">
          <AdvancedLogoAnimation width={400} height={400} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Looping Animation</h2>
          <div className="flex justify-center">
            <LogoAnimation width={250} height={250} loop={true} />
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Single Play Animation</h2>
          <div className="flex justify-center">
            <LogoAnimation width={250} height={250} loop={false} />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 p-8 rounded-lg mb-16">
        <h2 className="text-xl font-semibold mb-4">Responsive Animation</h2>
        <div className="flex justify-center">
          <LogoAnimation className="w-full max-w-[500px] h-[300px]" width={500} height={300} />
        </div>
      </div>

      <div className="bg-gray-900 p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Custom Sized Animation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <LogoAnimation width={150} height={150} />
          </div>
          <div className="flex justify-center">
            <LogoAnimation width={200} height={200} />
          </div>
          <div className="flex justify-center">
            <LogoAnimation width={250} height={250} />
          </div>
        </div>
      </div>
    </div>
  )
}

