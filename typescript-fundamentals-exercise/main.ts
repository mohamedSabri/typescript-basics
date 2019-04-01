/**
 * to execute this module run this command in a terminal
 * tsc --target es5 *.ts && node main.js
 */

import { LikeComponent } from './like.component'

let component = new LikeComponent(10, true);

component.onClick();

console.log(`likesCount: ${component.likesCount} , isSelected: ${component.isSelected}`);