import { useGetListWorkspace } from "@/hooks/useGetListWorkspace.ts"
import { Link } from "react-router-dom"
import ListWorkspaceCard from "./components/ListWorkspace.tsx"
import { ContentLayout } from "@/components/layout/ContentLayout.tsx"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx"
import ContentPanel from "@/components/layout/ContentPanel.tsx"

const Portal = () => {
  const { data } = useGetListWorkspace()

  return (
    <ContentLayout title={"Candidate Group"}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Account</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ContentPanel>
        <ListWorkspaceCard workspace={data?.data ?? []} />
      </ContentPanel>
    </ContentLayout>
  )
}

export default Portal
