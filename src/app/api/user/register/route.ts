import { errorResponse, successResponse } from "@/apiUtils/response";
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/User";
import { NextResponse, NextRequest } from "next/server";
var bcrypt = require('bcryptjs');
connect()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const reqBody: any = await req.json()

        // Check if email exists
        let user = await User.findOne({ email: reqBody.email })
        if (user) {
            return errorResponse("email already exists", 401)
        }

        // Check if email exists 
        user = await User.findOne({ username: reqBody.username })
        if (user) {
            return errorResponse("username already exists", 401)
        }

        // encrypt password
        if (reqBody?.password) {
            var hashPassword: string = bcrypt.hashSync(reqBody?.password, bcrypt.genSaltSync(10));
        } else {
            return errorResponse("password is required", 401)
        }

        // create a new user
        user = await User.create({
            username: reqBody.username,
            email: reqBody.email,
            password: hashPassword
        })

        return successResponse(user, 201)
    } catch (error: any) {
        console.log(error)
        return errorResponse(error?.message, error?.status)
    }
}
