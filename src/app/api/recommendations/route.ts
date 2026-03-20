import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const recommendations = await prisma.userRecommendation.findMany({
    where: { userId: session.user.id },
    include: { plant: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(recommendations);
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { answers, plantIds } = await request.json();

  if (!answers || !plantIds || !Array.isArray(plantIds)) {
    return NextResponse.json(
      { error: "answers and plantIds[] are required" },
      { status: 400 }
    );
  }

  const userId = session.user!.id;
  const recommendations = await Promise.all(
    plantIds.map((plantId: string) =>
      prisma.userRecommendation.upsert({
        where: {
          userId_plantId: {
            userId,
            plantId,
          },
        },
        update: { answers },
        create: {
          userId,
          plantId,
          answers,
        },
      })
    )
  );

  return NextResponse.json(recommendations, { status: 201 });
}
