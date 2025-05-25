import LoginForm from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-green-500">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Left side - Login Form */}
        <div className="flex flex-1 items-center justify-start">
          <div className="w-full max-w-xs mx-auto">
            <LoginForm />
          </div>
        </div>

        {/* Right side - Illustration Panel */}
        <div className="flex flex-1 items-center justify-center w-full bg-green-300 rounded-l-[36px]">
          <div className="flex flex-col items-center">
            {/* Illustration placeholder */}
            <div className="max-w-xs flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Notebook Illustration"
                className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Logo */}
            <h1
              className="text-white text-[28px] font-normal italic mt-3"
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
        <div className="h-full bg-green-300 rounded-b-[36px] flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center space-y-6">
            {/* Illustration placeholder */}
            <div className="w-[171.46px] h-[131.62px]  rounded-lg flex items-center justify-center">
                <img
                src="/logo.png"
                alt="Notebook Illustration"
                className="w-full h-full object-cover rounded-lg"
                />
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
        <div className="flex flex-col h-full items-start justify-center  px-4">
          <div className="w-full max-w-md mx-auto">
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
