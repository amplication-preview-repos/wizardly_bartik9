/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Bet } from "./Bet";
import { BetCountArgs } from "./BetCountArgs";
import { BetFindManyArgs } from "./BetFindManyArgs";
import { BetFindUniqueArgs } from "./BetFindUniqueArgs";
import { CreateBetArgs } from "./CreateBetArgs";
import { UpdateBetArgs } from "./UpdateBetArgs";
import { DeleteBetArgs } from "./DeleteBetArgs";
import { Game } from "../../game/base/Game";
import { User } from "../../user/base/User";
import { BetService } from "../bet.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Bet)
export class BetResolverBase {
  constructor(
    protected readonly service: BetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  async _betsMeta(
    @graphql.Args() args: BetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Bet])
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "any",
  })
  async bets(@graphql.Args() args: BetFindManyArgs): Promise<Bet[]> {
    return this.service.bets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "read",
    possession: "own",
  })
  async bet(@graphql.Args() args: BetFindUniqueArgs): Promise<Bet | null> {
    const result = await this.service.bet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bet)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "create",
    possession: "any",
  })
  async createBet(@graphql.Args() args: CreateBetArgs): Promise<Bet> {
    return await this.service.createBet({
      ...args,
      data: {
        ...args.data,

        game: args.data.game
          ? {
              connect: args.data.game,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bet)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "update",
    possession: "any",
  })
  async updateBet(@graphql.Args() args: UpdateBetArgs): Promise<Bet | null> {
    try {
      return await this.service.updateBet({
        ...args,
        data: {
          ...args.data,

          game: args.data.game
            ? {
                connect: args.data.game,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bet)
  @nestAccessControl.UseRoles({
    resource: "Bet",
    action: "delete",
    possession: "any",
  })
  async deleteBet(@graphql.Args() args: DeleteBetArgs): Promise<Bet | null> {
    try {
      return await this.service.deleteBet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Game, {
    nullable: true,
    name: "game",
  })
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "read",
    possession: "any",
  })
  async getGame(@graphql.Parent() parent: Bet): Promise<Game | null> {
    const result = await this.service.getGame(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Bet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
