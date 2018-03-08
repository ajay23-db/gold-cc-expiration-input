/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   date-input.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-a11y-keys-behavior/iron-a11y-keys-behavior.d.ts" />
/// <reference path="../iron-input/iron-input.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../iron-validatable-behavior/iron-validatable-behavior.d.ts" />
/// <reference path="../paper-input/paper-input-container.d.ts" />
/// <reference path="../paper-styles/default-theme.d.ts" />
/// <reference path="../paper-styles/typography.d.ts" />
/// <reference path="date-validator.d.ts" />

interface DateInputElement extends Polymer.Element, Polymer.IronA11yKeysBehavior, Polymer.IronValidatableBehavior {
  keyBindings: object;
  validator: string|null|undefined;

  /**
   * Set to true to mark the input as required.
   */
  required: boolean|null|undefined;

  /**
   * The month component of the date displayed.
   */
  month: string|null|undefined;

  /**
   * The year component of the date displayed.
   */
  year: string|null|undefined;

  /**
   * The date object used by the validator. Has two properties, month and year.
   */
  date: object|null|undefined;
  ariaLabelPrefix: string|null|undefined;

  /**
   * Set to true to disable the month and year input elements.
   */
  disabled: boolean|null|undefined;

  /**
   * Set to true to autofocus the month input element.
   */
  autofocus: boolean|null|undefined;

  /**
   * Bound to the month and year input elements' `inputmode` property.
   */
  inputmode: string|null|undefined;

  /**
   * Set to true to mark the month and year inputs as not editable.
   */
  readonly: boolean|null|undefined;
  validate(): any;
  beforeRegister(): void;
  created(): void;
  _selectYear(): void;
  _computeDate(month: any, year: any): void;
  _computeAriaLabel(dateLabel: any, monthLabel: any): any;
}

interface HTMLElementTagNameMap {
  "date-input": DateInputElement;
}
