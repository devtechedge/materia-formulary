import { batch01 } from "./monographs-01";
import { batch02 } from "./monographs-02";
import { batch03 } from "./monographs-03";
import { batch04 } from "./monographs-04";
import { batch05 } from "./monographs-05";
import { batch06 } from "./monographs-06";
import { batch07 } from "./monographs-07";
import { batch08 } from "./monographs-08";
import { batch09 } from "./monographs-09";
import { batch10 } from "./monographs-10";
import type { Monograph } from "@/lib/types";

export const monographs: Monograph[] = [
  ...batch01,
    ...batch02,
    ...batch03,
    ...batch04,
    ...batch05,
    ...batch06,
    ...batch07,
    ...batch08,
    ...batch09,
    ...batch10,
];

export const monographBySlug = new Map(monographs.map((item) => [item.slug, item]));

export const categories = [...new Set(monographs.map((item) => item.category))].sort();

export { rules, ruleById } from "./rules";
