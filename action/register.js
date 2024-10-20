"use server"
import { redirect } from "next/navigation"
import { getRegister } from "../queries/users"
export async function registrationAction (formData) {
        const users = Object.fromEntries(formData)
       await getRegister(users)
       redirect("/")
}
