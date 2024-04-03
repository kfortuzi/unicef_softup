import { PureAbility, AbilityBuilder, ExtractSubjectType } from '@casl/ability';
import { createPrismaAbility, PrismaQuery, Subjects } from '@casl/prisma';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { users } from '@prisma/client';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

type AppSubjects = 'all' | Subjects<{ User: users }>;
export type AppAbility = PureAbility<[string, AppSubjects], PrismaQuery>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: users) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(
      createPrismaAbility,
    );

    // if (user.id == 1) {
    //   can(Action.Manage, 'all'); // read-write access to everything
    // } else {
    //   cannot(Action.Read, 'all'); // read-only access to everything
    // }

    can(Action.Update, 'User');
    cannot(Action.Delete, 'User');

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<AppAbility>,
    });
  }
}
