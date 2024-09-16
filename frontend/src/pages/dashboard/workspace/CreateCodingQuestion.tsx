import ReactQuill from "react-quill"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import "react-quill/dist/quill.snow.css"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import "react-quill/dist/quill.snow.css"
import { toast } from "sonner"

function CreateCodingQuestion() {
  const formSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    testCases: z
      .array(
        z.object({
          input: z.string().min(1),
          output: z.string().min(1),
        }),
      )
      .min(1),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      testCases: [], // Start with an empty array instead of a default empty test case
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  const editorFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ]

  const editorModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      ["link", "image", "video"],
    ],
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      toast.message("Please upload a file")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        if (!content.trim()) {
          toast.message("Please upload a file")
          return
        }

        const uploadedTestCases = JSON.parse(content)
        if (Array.isArray(uploadedTestCases) && uploadedTestCases.length > 0) {
          // Filter out any empty test cases
          const validTestCases = uploadedTestCases.filter(
            (testCase) =>
              testCase.input.trim() !== "" || testCase.output.trim() !== "",
          )

          if (validTestCases.length > 0) {
            // Replace all current test cases with the valid uploaded ones
            form.setValue("testCases", validTestCases)
            toast.message(
              `${validTestCases.length} test case(s) imported successfully.`,
            )
          } else {
            toast.message("No valid test cases found in the file")
          }
        } else {
          toast.message("Invalid file format")
        }
      } catch (error) {
        console.error("Error parsing file:", error)
        toast.message("Error parsing file")
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Create Coding Assessment
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium">
                  Question Title <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" className="w-full" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium">
                  Question Description <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <ReactQuill
                    theme="snow"
                    value={field.value}
                    onChange={field.onChange}
                    formats={editorFormats}
                    modules={editorModules}
                    className="bg-white rounded-md"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="testCases"
            render={() => (
              <FormItem>
                <FormLabel className="text-lg font-medium flex flex-row gap-2 justify-between">
                  <div className="flex flex-row gap-2">
                    <span>Test Cases</span>
                    <span className="text-red-500">*</span>
                  </div>
                  <Button
                    type="button"
                    onClick={() => {
                      const currentTestCases = form.getValues("testCases")
                      form.setValue("testCases", [
                        ...currentTestCases,
                        { input: "", output: "" },
                      ])
                    }}
                    variant="outline"
                  >
                    Add Test Case
                  </Button>
                </FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    {form.watch("testCases").map((_, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          placeholder="Input"
                          {...form.register(`testCases.${index}.input`)}
                          className="w-full"
                        />
                        <Input
                          placeholder="Output"
                          {...form.register(`testCases.${index}.output`)}
                          className="w-full"
                        />
                        {index === 0 ? (
                          <div className="w-[160px]" />
                        ) : (
                          <Button
                            type="button"
                            onClick={() => {
                              const currentTestCases =
                                form.getValues("testCases")
                              form.setValue(
                                "testCases",
                                currentTestCases.filter((_, i) => i !== index),
                              )
                            }}
                            variant="destructive"
                            className="w-[70px]"
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <Input
                        type="file"
                        accept=".json"
                        onChange={handleFileUpload}
                        className="w-full"
                        placeholder="Upload"
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Create
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateCodingQuestion
