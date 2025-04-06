import ClientComponent from "@/app/components/ClientComponent"
import Link from "next/link"

export default function SeverComponent() {

  console.log('Server')
  return (
    <div>
      サーバー
      <ClientComponent />
      <Link href="/about">About</Link>
    </div>
  )
}
