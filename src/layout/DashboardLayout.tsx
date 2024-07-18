import { ReactNode } from "react"
import Nav from "../components/nav/Nav"
import Sidebar from "../components/sidebar/Sidebar"

interface IDashboardLayout{
    children: ReactNode
}
export default function DashboardLayout({children}: IDashboardLayout) {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="ml-[20vw] px-6 w-[calc(100vw-20vw)] h-screen overflow-y-scroll py-24">{children}</div>
    </div>
  );
}
