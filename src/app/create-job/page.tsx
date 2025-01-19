'use client'

import {
    prepareContractCall,
    sendTransaction,
} from "thirdweb";
import { contract } from "@/thirdweb";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { z } from "zod";
import { Button } from "@/components/ui/button";

const JobListingSchema = z.object({
    owner: z.string().min(1, "Owner is required"),
    companyName: z.string().min(1, "Company name is required"),
    salary: z.coerce.number().nonnegative("Salary must be a non-negative number"),
    workHours: z.coerce.number().nonnegative("Work hours must be a non-negative number"),
    role: z.string().min(1, "Role is required"),
    skillsRequired: z.string().min(1, "Skills are required"),
    education: z.string().min(1, "Education is required"),
    jobDescription: z.string().min(1, "Job description is required"),
    jobTask: z.string().min(1, "Job task is required"),
    isOpen: z.boolean(),
    timestamp: z.number(), // Set this during submission
});

// Infer the TypeScript type
type JobListingFormData = z.infer<typeof JobListingSchema>;




export default function JobListingForm() {
    const form = useForm<JobListingFormData>({
        resolver: zodResolver(JobListingSchema),
        defaultValues: {
            owner: "",
            companyName: "",
            salary: 0,
            workHours: 0,
            role: "",
            skillsRequired: "",
            education: "",
            jobDescription: "",
            jobTask: "",
            isOpen: true,
            timestamp: Date.now(), // Default timestamp
        },
    });

    const onSubmit = async (data: JobListingFormData) => {
        const finalData = {
            ...data,
            timestamp: Date.now(),
        };
        console.log("Submitted Data:", finalData);
        const transaction = prepareContractCall({
            contract,
            method:
                "function createJobListing(string _companyName, uint256 _salary, uint256 _workHours, string _role, string _skillsRequired, string _education, string _jobDescription, string _jobTask) returns (uint256)",
            params: [
                data.companyName,
                BigInt(data.salary),
                BigInt(data.workHours),
                data.role,
                data.skillsRequired,
                data.education,
                data.jobDescription,
                data.jobTask,
            ],
        });
        const { transactionHash } = await sendTransaction({
            transaction,
            account,
        });
    };

    return (
        <Card className="max-w-lg mx-auto">
            <CardHeader>
                <CardTitle className="text-xl font-bold">Job Listing Form</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Owner Field */}
                        <FormField
                            control={form.control}
                            name="owner"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Owner</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter owner name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Company Name */}
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter company name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Salary */}
                        <FormField
                            control={form.control}
                            name="salary"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Salary</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter salary" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Work Hours */}
                        <FormField
                            control={form.control}
                            name="workHours"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Work Hours</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Enter work hours" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Role */}
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter job role" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Skills Required */}
                        <FormField
                            control={form.control}
                            name="skillsRequired"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Skills Required</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter required skills" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Education */}
                        <FormField
                            control={form.control}
                            name="education"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Education</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter education requirements" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Job Description */}
                        <FormField
                            control={form.control}
                            name="jobDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Job Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter job description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Job Task */}
                        <FormField
                            control={form.control}
                            name="jobTask"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Job Task</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter job tasks" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
