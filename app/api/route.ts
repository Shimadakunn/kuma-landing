import type {NextApiRequest, NextApiResponse} from 'next'

import { NextRequest, NextResponse } from 'next/server'

let data = [""];

export async function GET (request:NextApiRequest){
  return new NextResponse(JSON.stringify({ emails: data }), {
  status: 200,
});
} 

type MyData = {
  email: string;
};

export async function POST(request: NextRequest) {
  const { email }: MyData = await request.json();

  if (!email) {
    return new NextResponse(
      JSON.stringify({ success:false, error: "Please provide proper email" }),
      { status: 400 }
    );
  }

  data.push(email);
  return new NextResponse(JSON.stringify({ success: true }), {
    status: 200,
  });
}