import { ID, team } from '.';

export async function createGroup(name: string) {
  return team.create(ID.unique(), name);
}

export async function getGroups() {
  const teams = await (await team.list()).teams;
  return teams;
}
