import SideBarItem from "@/components/layout/SideBarItem.tsx"
import SideBar from "@/components/layout/SideBar.tsx"
import MainPanel from "@/components/layout/MainPanel.tsx"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <SideBar isSignOutEnabled={true}>
        <SideBarItem title={"Home"} isActive={true} />
      </SideBar>
      <MainPanel>
        <Outlet />
      </MainPanel>
    </>
  )
}

export default Dashboard
