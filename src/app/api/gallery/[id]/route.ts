import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { del } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const image = await prisma.galleryImage.findUnique({ where: { id } });
  if (!image || image.userId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Delete from Vercel Blob storage
  await del(image.url);

  // Delete from database
  await prisma.galleryImage.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
