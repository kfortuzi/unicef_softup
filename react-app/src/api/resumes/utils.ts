import { GetResumeResponse } from "./types";

const orderByDate = (r: GetResumeResponse) => {
  r.experiences = r.experiences?.sort((a, b) => b.startDate?.localeCompare(a.startDate));
  r.educations = r.educations?.sort((a, b) => b.startDate?.localeCompare(a.startDate));
  r.certificates = r.certificates?.sort((a, b) => b.receivedDate?.localeCompare(a.receivedDate));
  r.publications = r.publications?.sort((a, b) => b.releaseDate?.localeCompare(a.releaseDate));
  r.volunteering = r.volunteering?.sort((a, b) => b.startDate?.localeCompare(a.startDate));

  return r;
}

export { orderByDate };