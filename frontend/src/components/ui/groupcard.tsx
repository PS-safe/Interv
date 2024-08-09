import * as React from "react"
import { cn } from "@/lib/utils"

export type GroupCardProps = {
    title : string
    member? : number
    createAt : Date
}

const GroupCard: React.FC<GroupCardProps> = ({
    title,
    member,
    createAt
}) => {
    return (
    <div className={cn(
        "w-full p-4 text-center font-semibold text-xl rounded-xl bg",
    )}>
        {title}
        {member}
        {createAt.toISOString()}
    </div>
    )
}

export default GroupCard;