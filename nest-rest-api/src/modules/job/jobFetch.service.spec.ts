import { Test, TestingModule } from '@nestjs/testing';
import { JobsFetchService } from './jobFetch.service';
import { JobListDTO } from './dto/job-list.dto';
import { AkpaJobDTO } from './dto/akpa-job.dto';

describe('JobFetchService', () => {
  let service: JobsFetchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobsFetchService],
    }).compile();

    service = module.get<JobsFetchService>(JobsFetchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('transformJobDetailsToModel', () => {
    it('should correctly transform job details to the Job model', () => {
      const jobListDTO: JobListDTO = {
        id: 123,
        name: 'Software Developer',
        description: 'Develop amazing software',
        address_id: [1, '123 Main St'],
        punedhenes_id: {
          id: 1,
          name: 'Tech Corp',
          image: false,
          image_type: false,
        },
        suitable_for_disabilities: 'po',
        vacant_positions: 5,
        date_start_notification: '2024-02-19',
        date_end_notification: '2024-02-29',
        contract_type_id: [4, 'Praktikë Profesionale'],
        county_id: [19, 'Gjirokastër'],
        vlp_private_url: false,
        profession_id: [1433, '2512.01 Informatikan'],
        job_shift_id: false,
      };

      const akpaJobDTO: AkpaJobDTO = {
        date_start_notification: '2024-02-19',
        date_end_notification: '2024-02-29',
        contract_type_id: [4, 'Praktikë Profesionale'],
        contract_duration_id: { contract_duration_id: [1, '1 vit'] },
        communication_skills: 'yes',
        basic_skill_ids: [
          {
            select: true,
            name: [216, 'siguron dokumentacionin teknik'],
            id: 1882741,
          },
        ],
        computer_line_ids: [
          {
            select: true,
            name: [216, 'siguron dokumentacionin teknik'],
            id: 1882741,
          },
        ],
        foreign_language_ids: [
          {
            select: true,
            name: [216, 'siguron dokumentacionin teknik'],
            id: 1882741,
          },
        ],
        job_experience_id: [2, 'Minimalisht 1 vit'],
        ss_skills: [
          {
            select: true,
            name: [216, 'siguron dokumentacionin teknik'],
            id: 1882741,
          },
        ],
        specialization_lines_ids: [
          {
            select: true,
            name: [216, 'siguron dokumentacionin teknik'],
            id: 1882741,
          },
        ],
        skill_lines_ids: [
          {
            select: true,
            name: [216, 'siguron dokumentacionin teknik'],
            id: 1882741,
          },
        ],
        education_level: { education_level: [6, 'Bachelor (3 vjeçar)'] },
        payment_level_id: { payment_level_id: [3, '40,000 - 50,000 lekë'] },
        job_mobility: false,
        graduation_profile: [],
        work_time: [],
        experience: '',
        suitable_for_disabilities: '',
        id: 0,
        vlp_private_url: false,
        position_type: '',
        punedhenes_id: [98931, 'K99713291W - SHERBIMI SPITALOR PERMET'],
        address_id: [10798, 'K99713291W - PERMET'],
        application_document_ids: [],
        name: '',
        description: '',
        type: '',
        employerInfo: {
          economic_activity:
            'AKTIVITETE SOCIALE TE ORGANIZMAVE DREJTUESE QE MEREN ME SHENDETIN,ARSIMIN,KULTUREN DHE AKTIVITETE TE TJERA SOCIALE ME PERJASHTIM TE SIGURIMEVE SHOQERORE',
          name: 'SHERBIMI SPITALOR PERMET',
          id: 98931,
          contact_web_page: '',
        },
      };
      const result = service.transformJobDetailsToModel(jobListDTO, akpaJobDTO);

      expect(result.referenceId).toEqual('123');
      expect(result.title).toEqual('Software Developer');
      expect(result.description).toEqual('Develop amazing software');
      expect(result.dateStart).toEqual('2024-02-19');
      expect(result.dateEnd).toEqual('2024-02-29');
      expect(result.address).toEqual('123 Main St');
      expect(result.location).toEqual('');
      expect(result.type).toEqual('Praktikë Profesionale');
      expect(result.contractDuration).toEqual('1 vit');
      expect(result.company).toEqual('Tech Corp');
      expect(result.vacantPositions).toEqual(5);
      expect(result.companyLogo).toBeNull();
      expect(result.basicSkills).toEqual('Programming');
      expect(result.communicationSkill).toBeTruthy();
      expect(result.computerSkills).toEqual('Microsoft Office');
      expect(result.foreignLanguage).toEqual('English');
      expect(result.experience).toEqual('Minimalisht 1 vit');
      expect(result.skills).toEqual('Teamwork');
      expect(result.specializations).toEqual('Software Engineering');
      expect(result.skillLines).toEqual('Agile Methodologies');
      expect(result.educationType).toEqual('Bachelor (3 vjeçar)');
      expect(result.paymentLevel).toEqual('40,000 - 50,000 lekë');
      expect(result.suitableForDisabilities).toBeTruthy();
      expect(result.needDrivingLicense).toBeFalsy();
      expect(result.isUnvailable).toBeFalsy();
      expect(result.createdAt).toBeInstanceOf(Date);
    });
  });
});
