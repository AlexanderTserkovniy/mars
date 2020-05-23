type PossibleFalsies = (false | undefined | null | '' | 0)[];

export default function filterEmptyFromObject<T extends object, K extends PossibleFalsies, U extends Exclude<T, keyof K>>(
  obj: T,
  values: K
): U {
  const result: { [key: string]: any; } = {};

  // tslint:disable-next-line:forin
  for (const key in obj) {
    const value: any = obj[key];
    if (values.includes(value) === false) {
      result[key] = value;
    }
  }

  // Make the fucking TS accept the simple HASH MAP!
  // return result;
  return result as U;
}
