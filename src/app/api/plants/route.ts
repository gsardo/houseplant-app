import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const careLevel = searchParams.get("careLevel");
  const category = searchParams.get("category");

  const where: Record<string, unknown> = {};
  if (careLevel) where.careLevel = careLevel;
  if (category && ["easyCare", "petFriendly", "succulent", "lowLight"].includes(category)) {
    where[category] = true;
  }

  const plants = await prisma.plant.findMany({
    where,
    orderBy: { commonName: "asc" },
  });

  return NextResponse.json(plants);
}
