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
import { server } from "@/contexts/swr"
import { toast } from "sonner"
import useCurrentUser from "@/hooks/UseCurrentUser"

// Zod schema for form validation
const formSchema = z.object({
  title: z.string().min(1, { message: "Required" }),
  date: z.object({
    startDate: z.string().min(1, { message: "Start date is required" }),
    endDate: z.string().min(1, { message: "End date is required" }),
  }),
  isVideo: z.boolean().default(false),
  isCoding: z.boolean().default(false),
  codingTime: z.number().min(1, { message: "Required" }),
  reqScreen: z.boolean().default(false),
  reqMicrophone: z.boolean().default(false),
  reqCamera: z.boolean().default(false),
})

const CreateWorkspace = () => {
  const { currentUser } = useCurrentUser()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: { startDate: "", endDate: "" },
      isVideo: false,
      isCoding: false,
      codingTime: 0,
      reqScreen: false,
      reqMicrophone: false,
      reqCamera: false,
    },
  })
  const { setValue, watch } = form
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const sD = new Date(values.date.startDate)
    const eD = new Date(values.date.endDate)
    toast.promise(
      server.workspace.createWorkspace({
        ...values,
        endDate: eD.toISOString(),
        startDate: sD.toISOString(),
        portalId: currentUser.portalId,
      }),
      {
        loading: "Creating question...",
        success: () => {
          return "Created successfully"
        },
        error: (err) => {
          return err.response.data.message
        },
      },
    )
  }

  // Watch date values
  const startDate = watch("date.startDate")
  const endDate = watch("date.endDate")

  // Handlers for date changes
  const handleStartDateChange = (date: string) => {
    setValue("date.startDate", date, { shouldValidate: true })
  }

  const handleEndDateChange = (date: string) => {
    setValue("date.endDate", date, { shouldValidate: true })
  }

  // State for assessments
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

  // Automatically update isVideo and isCoding fields based on currentAssessment
  const isVideo = videoCurrentAssessment.length > 0
  const isCoding = codeCurrentAssessment.length > 0

  // Update these values in the form when they change
  setValue("isVideo", isVideo)
  setValue("isCoding", isCoding)

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
              render={() => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <DatePicker
                      startDate={startDate}
                      setStartDate={handleStartDateChange}
                      endDate={endDate}
                      setEndDate={handleEndDateChange}
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
              name="isCoding"
              render={() => (
                <FormItem>
                  <FormLabel>Coding Assessment</FormLabel>
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
              name="codingTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coding Time</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value ?? ""} // Ensure the field value doesn't start as undefined
                      onChange={(e) => field.onChange(Number(e.target.value))} // Convert string to number
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reqScreen"
              render={({ field }) => (
                <FormItem className="flex flex-row">
                  <FormControl>
                    <Input
                      className="size-4"
                      type="checkbox"
                      checked={field.value} // Set checked to the boolean value
                      onChange={field.onChange} // Update the form state when checkbox changes
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormLabel>Require screen record</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reqMicrophone"
              render={({ field }) => (
                <FormItem className="flex flex-row">
                  <FormControl>
                    <Input
                      className="size-4"
                      type="checkbox"
                      checked={field.value} // Set checked to the boolean value
                      onChange={field.onChange} // Update the form state when checkbox changes
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormLabel>Require microphone record</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reqCamera"
              render={({ field }) => (
                <FormItem className="flex flex-row">
                  <FormControl>
                    <Input
                      className="size-4"
                      type="checkbox"
                      checked={field.value} // Set checked to the boolean value
                      onChange={field.onChange} // Update the form state when checkbox changes
                      name={field.name}
                    />
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
