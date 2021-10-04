export type Primitive =
  | "undefined"
  | "object"
  | "boolean"
  | "number"
  | "bigint"
  | "string"
  | "symbol"
  | "function";

export const isPrimitiveOrNull = (param: any, primitive: Primitive) => {
  return param === null || typeof param === primitive;
};

export const isArrayPopulated = (param: any): param is any[] => {
  return param !== null && param !== undefined && param.length > 0;
};
