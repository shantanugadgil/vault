import Component from '@ember/component';

/**
 * @module SelectDropdown
 * SelectDropdown components are used to render a dropdown.
 *
 * @example
 * ```js
 * <SelectDropdown dropdownLabel='Date Range' @options={{options}} @onChange={{onChange}}/>
 * ```
 *
 * @param dropdownLabel=null {String} - The label for the select element.
 * @param [selectedItem=null] {String} - The currently selected item.
 * @param options=null {Array} - A list of items that the user will select from.
 * @param [isInline=false] {Bool} - Whether or not the select should be displayed as inline-block or block.
 * @param [isFullwidth=false] {Bool} - Whether or not the select should take up the full width of the parent element.
 * @param onChange=null {Func} - The action to take once the user has selected an item.
 */

export default Component.extend({
  classNames: ['select-dropdown', 'field'],
  dropdownLabel: null,
  selectedItem: null,
  options: null,
  isInline: false,
  isFullwidth: false,
  onChange() {},
});
