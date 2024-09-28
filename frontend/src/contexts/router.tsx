import { createBrowserRouter, Outlet } from "react-router-dom"
import AppLayout from "@/components/layout/AppLayout.tsx"
import MainLayout from "@/components/layout/MainLayout.tsx"
import LoginPage from "@/pages/login/Login.tsx"
import LobbyPage from "@/pages/lobby/Lobby.tsx"
import Playground from "@/pages/playground/Playground.tsx"
import Portal from "@/pages/portal/Portal.tsx"
import CodingInterviewPage from "@/pages/lobby/codingInterview/CodingInterview.tsx"
import VideoInterviewPage from "@/pages/lobby/videoInterview/VideoInterview.tsx"
import CreateCodingQuestion from "@/pages/portal/assessment/components/AssessmentCreateCodingQuestionForm"
import CreateWorkspace from "@/pages/portal/createWorkspace/CreateWorkspace"
import AssessmentCreateVideoQuestionForm from "@/pages/portal/assessment/components/AssessmentCreateVideoQuestionForm.tsx"
import AssessmentPage from "@/pages/portal/assessment/AssessmentPage.tsx"
import Workspace from "@/pages/portal/Workspace.tsx"
import MainLayoutRevamp from "@/components/layout/MainLayoutRevamp.tsx"
import AssessmentCreateCodingQuestionForm from "@/pages/portal/assessment/components/AssessmentCreateCodingQuestionForm"

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
            element: <Portal />,
          },
          {
            path: "create",
            element: <CreateWorkspace />,
          },
          {
            path: ":workspaceId",
            element: <Workspace />,
          },
          {
            path: "assessment/coding",
            children: [
              {
                path: "",
                element: "coding list page",
              },
              {
                path: "create",
                element: <AssessmentCreateCodingQuestionForm />,
              },
            ],
          },
          {
            path: "assessment/video",
            children: [
              {
                path: "",
                element: "video list page",
              },
              {
                path: "create",
                element: <AssessmentCreateVideoQuestionForm />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/lobby/:lobbyId",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <LobbyPage />,
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
