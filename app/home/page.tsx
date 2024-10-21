import { NextResponse } from "next/server";

function Page() {
  async function POST(request: Request) {
    // POSTリクエストの処理
    return new NextResponse('POST request successful', { status: 200 });
  }
  return <div>Success! You are Human right?</div>
}

export default Page;
