import * as React from "react"
import { cn } from "@/lib/utils"

export type WorkspaceProps = {
  title: string
  member: number
  // user: User[]
  createAt: string
}

const WorkspaceCard: React.FC<WorkspaceProps> = ({
  title,
  member,
  createAt,
}) => {
  return (
    <div
      className={cn(
        "w-full p-4 text-center font-semibold text-xl rounded-xl bg",
      )}
    >
      <div className="text-primary">{title}</div>
      <div>{member > 1 ? member + "Candidates" : member + "Candidate"}</div>
      <div>Created At: {createAt}</div>
    </div>
  )
}

export default WorkspaceCard
