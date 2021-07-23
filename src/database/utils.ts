import { LoggerOptions } from "typeorm/logger/LoggerOptions";

type LoggerOptionsArray = Exclude<LoggerOptions, boolean | string>;

export function createTypeormLogger(option: string | undefined): LoggerOptions {
  if (!option) return false;
  if (option === "true" || option === "false") return option === "true";
  if (option === "all") return option;

  // Other possible options as array
  const AVAILABLE_OPTIONS: LoggerOptionsArray = [
    "query",
    "schema",
    "error",
    "warn",
    "info",
    "log",
    "migration"
  ];
  const optionsArray = option.split(",") as LoggerOptionsArray;

  // return only items in 'AVAILABLE_OPTIONS'
  const validatedOptions: LoggerOptionsArray = [];
  optionsArray.forEach(o => {
    if (AVAILABLE_OPTIONS.includes(o)) {
      validatedOptions.push(o);
    }
  });

  return validatedOptions;
}
