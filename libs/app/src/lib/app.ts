import { isEven } from "@myorg/is-even";
import { isOdd } from "@myorg/is-odd";
import * as _ from "lodash";

export function app(): string {
  console.log(isEven());
  console.log(isOdd());
  console.log(_.VERSION);
  return 'app';
}
