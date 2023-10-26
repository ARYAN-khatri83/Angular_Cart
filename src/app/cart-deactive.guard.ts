import { CanDeactivateFn } from '@angular/router';

export const cartDeactiveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log(component); 
  return true;
};
