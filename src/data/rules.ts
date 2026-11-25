import type { InteractionRule } from "@/lib/types";
import { rules01 } from "./rules-01";
import { rules02 } from "./rules-02";
import { rules03 } from "./rules-03";
import { rules04 } from "./rules-04";
import { rules05 } from "./rules-05";

export const rules: InteractionRule[] = [...rules01, ...rules02, ...rules03, ...rules04, ...rules05];

export const ruleById = new Map(rules.map((rule) => [rule.id, rule]));
