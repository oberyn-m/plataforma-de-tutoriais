import { Logo } from "./Logo";

export function Header() {
  return (
    <a href="/">
      <header className="w-full py-5 flex items-center justify-center bg-gray-700 boder-b border-gray-600">
        <Logo />
      </header>
    </a>
  )
}