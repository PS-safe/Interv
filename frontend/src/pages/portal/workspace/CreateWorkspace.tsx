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
import { Link } from "react-router-dom"
import AssessmentPicker from "./components/AssessmentPicker"
import { Button } from "@/components/ui/button"
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import DatePicker from "./components/DatePicker"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

const CreateWorkspace = () => {
  const formSchema = z.object({
    title: z.string().min(1, { message: "Required" }),
    date: z.object({
      startDate: z.string().date().min(1, { message: "Required" }),
      endDate: z.string().date().min(1, { message: "Required" }),
    }),
    isVideo: z.boolean().default(false),
    isCoding: z.boolean().default(false),
    codingTime: z.number().min(1, { message: "Required" }),
    reqScreen: z.boolean().default(false),
    reqMicrophone: z.boolean().default(false),
    reqCamera: z.boolean().default(false),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: {},
      isVideo: false,
      isCoding: false,
      codingTime: 0,
      reqScreen: false,
      reqMicrophone: false,
      reqCamera: false,
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  const [codeStockAssessment, setCodeStockAssessment] = useState<string[]>([
    "a",
    "b",
    "c",
  ])
  const [codeCurrentAssessment, setCodeCurrentAssessment] = useState<string[]>(
    [],
  )
  const [videoStockAssessment, setVideoStockAssessment] = useState<string[]>([
    "d",
    "e",
    "f",
  ])
  const [videoCurrentAssessment, setVideoCurrentAssessment] = useState<
    string[]
  >([])
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")

  return (
    <ContentLayout title={"Create workspace"}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/portal/workspace">Workspaces</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Create</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ContentPanel>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Workspace Title</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={(field) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DatePicker
                      startDate={startDate}
                      setStartDate={setStartDate}
                      endDate={endDate}
                      setEndDate={setEndDate}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isVideo"
              render={() => (
                <FormItem>
                  <FormLabel>Video Assessment</FormLabel>
                  <FormControl>
                    <AssessmentPicker
                      currentAssessment={codeCurrentAssessment}
                      setCurrentAssessment={setCodeCurrentAssessment}
                      stockAssessment={codeStockAssessment}
                      setStockAssessment={setCodeStockAssessment}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isCoding"
              render={() => (
                <FormItem>
                  <FormLabel>Coding Assessment</FormLabel>
                  <FormControl>
                    <AssessmentPicker
                      currentAssessment={videoCurrentAssessment}
                      setCurrentAssessment={setVideoCurrentAssessment}
                      stockAssessment={videoStockAssessment}
                      setStockAssessment={setVideoStockAssessment}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="codingTime"
              render={(field) => (
                <FormItem>
                  <FormLabel>Coding Time</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reqScreen"
              render={(field) => (
                <FormItem className="flex flex-row">
                  <FormControl>
                    <Input className="size-4" type="checkbox" {...field} />
                  </FormControl>
                  <FormLabel>Require screen record</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reqMicrophone"
              render={(field) => (
                <FormItem className="flex flex-row">
                  <FormControl>
                    <Input className="size-4" type="checkbox" {...field} />
                  </FormControl>
                  <FormLabel>Require microphone record</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reqCamera"
              render={(field) => (
                <FormItem className="flex flex-row">
                  <FormControl>
                    <Input className="size-4" type="checkbox" {...field} />
                  </FormControl>
                  <FormLabel>Require camera record</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className={"w-full"} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </ContentPanel>
    </ContentLayout>
  )
}

export default CreateWorkspace
