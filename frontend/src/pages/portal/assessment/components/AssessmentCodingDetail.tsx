import { ContentLayout } from "@/components/layout/ContentLayout"
import ContentPanel from "@/components/layout/ContentPanel"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link, useParams } from "react-router-dom"

function AssessmentCodingDetail() {
  const { codingTitle } = useParams()
  return (
    <div>
      <ContentLayout
        title={"Coding Questions"}
        breadcrumb={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/portal/question/coding">Coding Questions</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{codingTitle}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      >
        <ContentPanel children={undefined}></ContentPanel>
      </ContentLayout>
    </div>
  )
}

export default AssessmentCodingDetail
