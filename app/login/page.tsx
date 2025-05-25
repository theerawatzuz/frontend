import LoginForm from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-green-500">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left side - Login Form */}
        <div className="flex-1 flex items-center justify-start pl-[215.5px]">
          <div className="w-[384px]">
            <LoginForm />
          </div>
        </div>

        {/* Right side - Illustration Panel */}
        <div className="w-[632px] bg-green-300 rounded-l-[36px] flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center space-y-8">
            {/* Illustration placeholder */}
            <div className="w-[299.61px] h-[230px] bg-white/10 rounded-lg flex items-center justify-center">
              <div className="text-white/60 text-sm">Notebook Illustration</div>
            </div>

            {/* Logo */}
            <h1
              className="text-white text-[28px] font-normal italic leading-6"
              style={{ fontFamily: "Castoro, serif" }}
            >
              a Board
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col h-screen">
        {/* Top Panel - Illustration */}
        <div className="h-[362px] bg-green-300 rounded-b-[36px] flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center space-y-6">
            {/* Illustration placeholder */}
            <div className="w-[171.46px] h-[131.62px] bg-white/10 rounded-lg flex items-center justify-center">
              <div className="text-white/60 text-xs">Notebook</div>
            </div>

            {/* Logo */}
            <h1
              className="text-white text-[24px] font-normal italic leading-6"
              style={{ fontFamily: "Castoro, serif" }}
            >
              a Board
            </h1>
          </div>
        </div>

        {/* Bottom Panel - Login Form */}
        <div className="flex-1 flex items-start justify-center pt-[129px] px-4">
          <div className="w-[343px]">
            <LoginForm />
          </div>
        </div>

        {/* Home Indicator */}
        <div className="h-[34px] flex items-center justify-center">
          <div className="w-[134px] h-[5px] bg-grey-100 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
