import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Brand Colors
        green: {
          500: "#243831", // Primary dark green
          300: "#2B5F44", // Medium green
          100: "#D8E9E4", // Light green
        },
        golden: "#C5A365",
        success: "#49A569",
        grey: {
          100: "#BBC2C0", // Light grey background
          300: "#939494", // Medium grey text
        },
        text: "#191919", // Primary text color

        // Shadcn UI Colors (mapped to our brand colors)
        // border: "#D8E9E4", // Green/100
        // input: "#D8E9E4", // Green/100
        // ring: "#243831", // Green/500
        // background: "#FFFFFF",
        // foreground: "#191919", // Text
        // primary: {
        //   DEFAULT: "#243831", // Green/500
        //   foreground: "#FFFFFF",
        // },
        // secondary: {
        //   DEFAULT: "#D8E9E4", // Green/100
        //   foreground: "#191919", // Text
        // },
        // destructive: {
        //   DEFAULT: "#ef4444",
        //   foreground: "#FFFFFF",
        // },
        // muted: {
        //   DEFAULT: "#BBC2C0", // Grey/100
        //   foreground: "#939494", // Grey/300
        // },
        // accent: {
        //   DEFAULT: "#C5A365", // Golden
        //   foreground: "#191919", // Text
        // },
        // popover: {
        //   DEFAULT: "#FFFFFF",
        //   foreground: "#191919", // Text
        // },
        // card: {
        //   DEFAULT: "#FFFFFF",
        //   foreground: "#191919", // Text
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
