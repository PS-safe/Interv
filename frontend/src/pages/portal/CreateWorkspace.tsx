import SideBarItem from "@/components/layout/SideBarItem.tsx"
import SideBar from "@/components/layout/SideBar.tsx"
import MainPanel from "@/components/layout/MainPanel.tsx"
import WorkspaceCreateForm from "./components/CreateForm"

const CreateWorkspace = () => {
  return (
    <>
      <SideBar isSignOutEnabled={true}>
        <SideBarItem title={"Workspace"} isActive={true} />
        <SideBarItem title={"Assessment"} isActive={false} onClick={() => {}} />
      </SideBar>
      <MainPanel>
        <WorkspaceCreateForm />
      </MainPanel>
    </>
  )
}

export default CreateWorkspace
