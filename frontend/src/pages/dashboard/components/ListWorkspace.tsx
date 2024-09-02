import * as React from "react"
import WorkspaceCard from "./Workspace"
import { WorkspaceData } from "@/api/server"

export type ListWorkspaceProps = {
  workspace: WorkspaceData[]
}
const ListWorkspaceCard: React.FC<ListWorkspaceProps> = ({ workspace }) => {
  return (
    <div className="w-full flex flex-wrap justify-start gap-8">
      {workspace?.map((Workspace) => {
        return (
          <WorkspaceCard
            key={Workspace.id}
            title={Workspace.title ?? ""}
            createAt={Workspace.startDate ?? ""}
            member={Workspace.memberNum ?? 0}
          />
        )
      })}
    </div>
  )
}

export default ListWorkspaceCard
