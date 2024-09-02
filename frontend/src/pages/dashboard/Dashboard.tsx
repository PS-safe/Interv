import SideBarItem from "@/components/layout/SideBarItem.tsx"
import SideBar from "@/components/layout/SideBar.tsx"
import MainPanel from "@/components/layout/MainPanel.tsx"
import { Button } from "@/components/ui/button"
import { useGetListWorkspace } from "@/hooks/useGetListWorkspace.ts"
import { useNavigate } from "react-router-dom"
import ListWorkspaceCard from "./components/ListWorkspace.tsx"
import { Input } from "@/components/ui/input.tsx"
import Papa from "papaparse"
import React, { useState } from "react"
// import { server } from "@/contexts/swr.tsx"

const Dashboard = () => {
  const { data } = useGetListWorkspace()
  const navigate = useNavigate()
  const [userData, setUserData] = useState<DataRow[]>()

  interface DataRow {
    [key: string]: string
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      Papa.parse(file, {
        skipEmptyLines: true,
        complete: (results) => {
          setUserData(results.data as DataRow[])
          console.log(results)
        },
      })
    }
  }

  // const handleSubmitFile = () => {
  //   server.user
  // }

  return (
    <>
      <SideBar isSignOutEnabled={true}>
        <SideBarItem title={"Candidate"} isActive={true} />
        <SideBarItem title={"Assessment"} isActive={false} onClick={() => {}} />
      </SideBar>
      <MainPanel>
        <div className="w-full mt-8 p-10 grid gap-10">
          <div className="flex justify-between">
            <p className="text-5xl font-bold text-gray-900">Candidate Group</p>
            <Button
              className={
                "w-52 h-14 text-center font-semibold text-xl rounded-xl disabled:opacity-100"
              }
              onClick={() => {
                navigate("create")
              }}
            >
              Add new group
            </Button>
          </div>

          <Input
            className="w-64"
            type="file"
            accept=".csv"
            id="userMail"
            onChange={(e) => {
              handleFileUpload(e)
              console.log(userData)
            }}
          />

          <Button
            className={
              "w-52 h-14 text-center font-semibold text-xl rounded-xl disabled:opacity-100"
            }
            onClick={() => {}}
          >
            Submit
          </Button>

          <ListWorkspaceCard workspace={data?.data ?? []} />
        </div>
      </MainPanel>
    </>
  )
}

export default Dashboard
