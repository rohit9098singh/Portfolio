// components/ContactRight.tsx
"use client"

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Send } from "lucide-react"
import toast from "react-hot-toast"
import {schema} from "./validation/Validation"


type FormData = z.infer<typeof schema>

export default function ContactRight() {
  
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    if(data){
        toast.success(`${data.email} we will get back to u soon`)
        // form.reset()
    }
  }

  return (
    <Card className="bg-slate-900 border border-white/20 ">
      <CardContent className="p-6 ">
        <h3 className="text-xl font-bold mb-6 text-blue-500">Send a Message</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Name</FormLabel>
                  <FormControl>
                    <Input className="border border-white/10 placeholder:text-gray-200 text-white" placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Email</FormLabel>
                  <FormControl>
                    <Input className="border border-white/10 placeholder:text-gray-200 text-white" placeholder="Your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea className="border border-white/10 placeholder:text-gray-200 text-white" placeholder="Your message..." rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800 cursor-pointer" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Sending..." : (
                <span className="flex items-center ">
                  <Send className="mr-2 h-4 w-4 text-blue-500 hover:text-blue-600" /> Send Message
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
