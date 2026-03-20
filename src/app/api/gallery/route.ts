import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const plantId = searchParams.get("plantId");

  const where: Record<string, string> = { userId: session.user.id };
  if (plantId) where.plantId = plantId;

  const images = await prisma.galleryImage.findMany({
    where,
    include: { plant: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(images);
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const plantId = formData.get("plantId") as string | null;
  const caption = formData.get("caption") as string | null;

  if (!file || !plantId) {
    return NextResponse.json(
      { error: "file and plantId are required" },
      { status: 400 }
    );
  }

  const blob = await put(
    `gallery/${session.user.id}/${Date.now()}-${file.name}`,
    file,
    { access: "public" }
  );

  const image = await prisma.galleryImage.create({
    data: {
      userId: session.user.id,
      plantId,
      url: blob.url,
      caption,
    },
  });

  return NextResponse.json(image, { status: 201 });
}
