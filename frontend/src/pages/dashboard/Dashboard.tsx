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
          className={
            "w-52 h-14 text-center font-semibold text-xl rounded-xl disabled:opacity-100"
          }
          onClick={() => {}}
        >
          Add new group
        </Button>
        {data?.data == null ? (
          <></>
        ) : (
          data.data.map((Workspace) => {
            if (
              Workspace.title == undefined ||
              Workspace.startdate == undefined
            ) {
              return <></>
            } else {
              return (
                <>
                  <WorkspaceCard
                    title={Workspace.title}
                    createAt={Workspace.startdate}
                    member={10}
                  />
                </>
              )
            }
          })
        )}
      </MainPanel>
    </>
  )
}

export default Dashboard
