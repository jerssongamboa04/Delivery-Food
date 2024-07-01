import { NextResponse } from "next/server"
import { Resend } from "resend";
import Email from "../../../emails/index";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

    const response = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'Roma-Food',
            to: [response.email],
            subject: 'Roma Food Order Confirmation',
            react: Email(),
        });
        return NextResponse.json({data})

    } catch (error) {
        return NextResponse.json({ error })
    }

}

