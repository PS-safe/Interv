import SideBarItem from "@/components/layout/SideBarItem.tsx"
import SideBar from "@/components/layout/SideBar.tsx"
import MainPanel from "@/components/layout/MainPanel.tsx"
import { Button } from "@/components/ui/button"
import WorkspaceCard from "./components/Workspace.tsx"
import { useGetListWorkspace } from "@/hooks/useGetListWorkspace.ts"

const Dashboard = () => {
  const { data } = useGetListWorkspace()

  return (
    <>
      <SideBar isSignOutEnabled={true}>
        <SideBarItem title={"Candidate"} isActive={true} />
        <SideBarItem title={"Assessment"} isActive={false} onClick={() => {}} />
      </SideBar>
      <MainPanel>
        <Button
          key={"button"}
          className={
            "w-52 h-14 text-center font-semibold text-xl rounded-xl disabled:opacity-100"
          }
          onClick={() => {}}
        >
          Add new group
        </Button>
        {data?.data?.map((Workspace) => {
          return (
            <WorkspaceCard
              key={Workspace.id}
              title={Workspace.title ?? ""}
              createAt={Workspace.startdate ?? ""}
              member={Workspace.membernum ?? 0}
            />
          )
        })}
      </MainPanel>
    </>
  )
}

export default Dashboard
