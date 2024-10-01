import { createBrowserRouter } from "react-router-dom"
import AppLayout from "@/components/layout/AppLayout.tsx"
import MainLayout from "@/components/layout/MainLayout.tsx"
import LoginPage from "@/pages/login/Login.tsx"
import RoomPage from "@/pages/room/Room.tsx"
import Playground from "@/pages/playground/Playground.tsx"
import WorkspaceListPage from "@/pages/portal/workspace/WorkspaceListPage"
import CodingInterviewPage from "@/pages/room/codingInterview/CodingInterview.tsx"
import VideoInterviewPage from "@/pages/room/videoInterview/VideoInterview.tsx"
import CreateWorkspace from "@/pages/portal/workspace/CreateWorkspace"
import AssessmentCreateVideoQuestionForm from "@/pages/portal/assessment/components/AssessmentCreateVideoQuestionForm.tsx"
import WorkspaceDetailPage from "@/pages/portal/workspace/WorkspaceDetailPage"
import MainLayoutRevamp from "@/components/layout/MainLayoutRevamp.tsx"
import AssessmentCreateCodingQuestionForm from "@/pages/portal/assessment/components/AssessmentCreateCodingQuestionForm"
import AssessmentVideoListPage from "@/pages/portal/assessment/AssessmentVideoListPage.tsx"
import AssessmentCodingListPage from "@/pages/portal/assessment/AssessmentCodingListPage.tsx"
import AssessmentCodingDetail from "@/pages/portal/assessment/components/AssessmentCodingDetail"
import WorkspaceCandidateList from "@/pages/portal/workspace/WorkspaceCandidateList"
import AssessmentVideoDetail from "@/pages/portal/assessment/components/AssessmentVideoDetail.tsx"
import AssessmentCodingEdit from "@/pages/portal/assessment/components/AssessmentCodingEdit"
import AssessmentEditVideoQuestionForm from "@/pages/portal/assessment/components/AssessmentEditVideoQuestionForm.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "portal",
        element: <MainLayoutRevamp />,
        children: [
          {
            path: "workspace",
            children: [
              {
                path: "",
                element: <WorkspaceListPage />,
              },
              {
                path: "create",
                element: <CreateWorkspace />,
              },
              {
                path: ":workspaceId",
                children: [
                  {
                    path: "",
                    element: <WorkspaceDetailPage />,
                  },
                  {
                    path: "candidateList",
                    element: <WorkspaceCandidateList />,
                  },
                ],
              },
            ],
          },
          {
            path: "question/coding",
            children: [
              {
                path: "",
                element: <AssessmentCodingListPage />,
              },
              {
                path: "create",
                element: <AssessmentCreateCodingQuestionForm />,
              },
              {
                path: ":codingTitle",
                element: <AssessmentCodingDetail />,
              },
              {
                path: "edit/:codingTitle",
                element: <AssessmentCodingEdit />,
              },
            ],
          },
          {
            path: "question/video",
            children: [
              {
                path: "",
                element: <AssessmentVideoListPage />,
              },
              {
                path: "create",
                element: <AssessmentCreateVideoQuestionForm />,
              },
              {
                path: ":videoQuestionId",
                element: <AssessmentVideoDetail />,
              },
              {
                path: ":videoQuestionId/edit",
                element: <AssessmentEditVideoQuestionForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/room/:roomId",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <RoomPage />,
      },
      {
        path: "coding",
        element: <CodingInterviewPage />,
      },
      {
        path: "video",
        element: <VideoInterviewPage />,
      },
    ],
  },
  {
    path: "playground",
    element: <Playground />,
  },
])

export default router
