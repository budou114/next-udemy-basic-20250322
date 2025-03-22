import ClientComponent from "@/app/components/ClientComponent"

export default function SeverComponent() {

  console.log('Server')
  return (
    <div>
      サーバー
      <ClientComponent />
    </div>
  )
}
