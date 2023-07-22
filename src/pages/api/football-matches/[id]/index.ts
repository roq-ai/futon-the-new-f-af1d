import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { footballMatchValidationSchema } from 'validationSchema/football-matches';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.football_match
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getFootballMatchById();
    case 'PUT':
      return updateFootballMatchById();
    case 'DELETE':
      return deleteFootballMatchById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFootballMatchById() {
    const data = await prisma.football_match.findFirst(convertQueryToPrismaUtil(req.query, 'football_match'));
    return res.status(200).json(data);
  }

  async function updateFootballMatchById() {
    await footballMatchValidationSchema.validate(req.body);
    const data = await prisma.football_match.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteFootballMatchById() {
    const data = await prisma.football_match.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
