/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AgentService } from "../agent.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AgentCreateInput } from "./AgentCreateInput";
import { Agent } from "./Agent";
import { AgentFindManyArgs } from "./AgentFindManyArgs";
import { AgentWhereUniqueInput } from "./AgentWhereUniqueInput";
import { AgentUpdateInput } from "./AgentUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AgentControllerBase {
  constructor(
    protected readonly service: AgentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Agent })
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAgent(@common.Body() data: AgentCreateInput): Promise<Agent> {
    return await this.service.createAgent({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastName: true,
        email: true,
        firstName: true,
        phoneNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Agent] })
  @ApiNestedQuery(AgentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agents(@common.Req() request: Request): Promise<Agent[]> {
    const args = plainToClass(AgentFindManyArgs, request.query);
    return this.service.agents({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastName: true,
        email: true,
        firstName: true,
        phoneNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agent(
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Agent | null> {
    const result = await this.service.agent({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        lastName: true,
        email: true,
        firstName: true,
        phoneNumber: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAgent(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() data: AgentUpdateInput
  ): Promise<Agent | null> {
    try {
      return await this.service.updateAgent({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          lastName: true,
          email: true,
          firstName: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAgent(
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Agent | null> {
    try {
      return await this.service.deleteAgent({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          lastName: true,
          email: true,
          firstName: true,
          phoneNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        time: true,

        client: {
          select: {
            id: true,
          },
        },

        property: {
          select: {
            id: true,
          },
        },

        agent: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "update",
    possession: "any",
  })
  async connectAppointments(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "update",
    possession: "any",
  })
  async updateAppointments(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "update",
    possession: "any",
  })
  async disconnectAppointments(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
