import { isPrimitiveOrNull } from "../app/types";

export type CharactersResult = {
  info: {
    currentPage: number;
    count: number;
    pages: number;
  };
  result: Character[];
};

export type Character = {
  id: string;
  name: string | null;
  alias: string | null;
  affiliation: string | null;
  birthday: string | null;
  bloodtype: string | null;
  description: string | null;
  fightstyle: string | null;
  gender: string | null;
  Eye: string | null;
  hair: string | null;
  height: string | null;
  kanji: string | null;
  occupation: string;
  quirk: string | null;
  romaji: string | null;
  status: string | null;
  teams: string | null;
  images: string[];
  epithet: string | null;
  ages: AgesEntity[] | null;
  family: FamilyEntity[] | null;
};

export const isCharacters = (param: any): param is Character[] => {
  return (
    param !== null &&
    param !== undefined &&
    Array.isArray(param) &&
    param.every(
      (p) =>
        typeof p.id === "string" &&
        isPrimitiveOrNull(p.name, "string") &&
        isPrimitiveOrNull(p.alias, "string") &&
        isPrimitiveOrNull(p.affiliation, "string") &&
        isPrimitiveOrNull(p.birthday, "string") &&
        isPrimitiveOrNull(p.bloodtype, "string") &&
        isPrimitiveOrNull(p.description, "string") &&
        isPrimitiveOrNull(p.fightstyle, "string") &&
        isPrimitiveOrNull(p.gender, "string") &&
        isPrimitiveOrNull(p.Eye, "string") &&
        isPrimitiveOrNull(p.hair, "string") &&
        isPrimitiveOrNull(p.height, "string") &&
        isPrimitiveOrNull(p.kanji, "string") &&
        isPrimitiveOrNull(p.occupation, "string") &&
        isPrimitiveOrNull(p.quirk, "string") &&
        isPrimitiveOrNull(p.romaji, "string") &&
        isPrimitiveOrNull(p.status, "string") &&
        isPrimitiveOrNull(p.teams, "string") &&
        Array.isArray(p.images) &&
        p.images.every((img: any) => typeof img === "string") &&
        isPrimitiveOrNull(p.epithet, "string") &&
        (Array.isArray(p.ages) || p.ages === null) &&
        (Array.isArray(p.family) || p.family === null)
    )
  );
};

export type AgesEntity = {
  age: string;
  when: string;
};

export type FamilyEntity = {
  id: string;
  name: string;
};
