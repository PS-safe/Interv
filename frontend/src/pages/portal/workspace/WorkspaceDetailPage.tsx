import { Button } from "@/components/ui/button"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useGetWorkspace } from "@/hooks/useGetWorkspace"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx"
import ContentPanel from "@/components/layout/ContentPanel.tsx"
import { ContentLayout } from "@/components/layout/ContentLayout.tsx"
import { Label } from "@radix-ui/react-label"

const WorkspaceDetailPage = () => {
  const { workspaceId } = useParams()
  const { data } = useGetWorkspace(Number(workspaceId))
  const navigate = useNavigate()

  return (
    <ContentLayout title={"${Workspace name}"}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/portal/workspace">Workspaces</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Workspace name</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ContentPanel>
        <Button
          className={
            "w-52 h-14 text-center font-semibold text-xl rounded-xl disabled:opacity-100"
          }
          onClick={() => {
            navigate("candidateList")
          }}
        >
          CandidateList
        </Button>
        <div className="mt-5 flex flex-col">
          <Label>WorkspaceId: {data?.data?.workspaceDetail.id}</Label>
          <Label>Workspace title: {data?.data?.workspaceDetail.title}</Label>
          <Label>Start Date: {data?.data?.workspaceDetail.startDate}</Label>
          <Label>End Date: {data?.data?.workspaceDetail.endDate}</Label>
          <Label>
            Have Video Question:
            {data?.data?.workspaceDetail.isVideo?.toString()}
          </Label>
          <Label>
            Have Coding Question:
            {data?.data?.workspaceDetail.isCoding?.toString()}
          </Label>
          <Label>
            Coding Time: {data?.data?.workspaceDetail.codingTime?.toString()}
          </Label>
          <Label>Portal Id: {data?.data?.workspaceDetail.portalId}</Label>
          <Label>
            Require Camera: {data?.data?.workspaceDetail.reqScreen?.toString()}
          </Label>
          <Label>
            Require Microphone:
            {data?.data?.workspaceDetail.reqMicrophone?.toString()}
          </Label>
          <Label>
            Require Camera: {data?.data?.workspaceDetail.reqCamera?.toString()}
          </Label>
          <Label>
            Number of candidate:{data?.data?.workspaceDetail.memberNum}
          </Label>
        </div>

        <Button
          className={
            "w-52 h-14 text-center font-semibold text-xl rounded-xl disabled:opacity-100"
          }
          onClick={() => {
            console.log(data)
          }}
        >
          TestData
        </Button>
      </ContentPanel>
    </ContentLayout>
  )
}

export default WorkspaceDetailPage
