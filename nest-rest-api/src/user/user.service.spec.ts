import { Test, TestingModule } from '@nestjs/testing';
import * as dayjs from 'dayjs';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import exclude from '../commons/utils/exclude';
import { PrismaService } from '../commons/prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;

  const now = dayjs().toDate();

  const userData = {
    id: '1',
    email: 'anon@anon.com',
    firstName: 'anon',
    lastName: 'anon',
    password: '123',
    verificationCode: null,
    confirmedAt: now,
    phoneNumber: '12',
    profession: 'dev',
    profilePicture: '',
    birthdayDate: now,
    hobbies: '',
    createdAt: now,
    updatedAt: null,
    deletedAt: null,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserRepository, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get user profile', async () => {
    jest.spyOn(repository, 'findOneById').mockResolvedValueOnce(userData);

    await expect(service.getProfile('1')).resolves.toEqual(
      exclude(userData, ['password', 'id']),
    );
  });
});
