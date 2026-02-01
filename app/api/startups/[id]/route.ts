import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authConfig } from '@/app/auth.config';
import { prisma } from '@/lib/prisma';

// GET /api/startups/[id] - Get a specific startup
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // TODO: Add database query to get startup by ID
  return NextResponse.json({});
}

// PUT /api/startups/[id] - Update a startup
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const startup = await prisma.startup.update({
      where: {
        id: params.id,
        userId: session.user.id,
      },
      data: {
        ...data,
        founded: new Date(data.founded),
      },
    });

    return NextResponse.json(startup);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

// DELETE /api/startups/[id] - Delete a startup
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await prisma.startup.delete({
    where: {
      id: params.id,
      userId: session.user.id,
    },
  });
  
  return NextResponse.json({ message: 'Startup deleted successfully' });
}