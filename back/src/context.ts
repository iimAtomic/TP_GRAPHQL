import { PrismaClient } from "@prisma/client";
import { AuthenticatedUser } from "./auth";

export type DataSourceContext = {
  dataSources: {
    db: PrismaClient
  };
  user: AuthenticatedUser
};